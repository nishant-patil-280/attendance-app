const express = require("express");
const fs = require("fs");
const app = express();
const mysql = require("mysql2/promise");
const students = require("./router/student");
const login = require("./router/login");
const admin = require("firebase-admin");
require("dotenv").config();

// const serviceAccount =JSON.parse( process.env.FireBase_Secret);
var serviceAccount = require("./attendance-app-b667e-firebase-adminsdk-s4efb-b381a2c7c7.json");
const { log } = require("console");
//intializing firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
//initializing firbase firestore database
const firebaseDb = admin.firestore();
//connecting mysql -used xampp mysl
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "geofence",
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database lalala!");
    connection.release();
  }
});

pool.on("error", (err) => {
  console.error("Database error:", err);
});

//making pool connection available to all paths
app.locals.pool = pool;
app.locals.admin = admin;
app.locals.firebaseDb = firebaseDb;
// middleware
app.use(express.json());

//routes
app.use("/api/v1/login", login);
app.use("/api/v1/students", students);

//script to generate timetable daily
async function getTodaysTimeTable() {
  let date = new Date();
  var today = "Tuesday"; //replace here code to get todays timetable
  var year = date.getFullYear();
  const isAfterJuly1 = date.getMonth() >= 6;
  let yearRange;
  if (isAfterJuly1) {
    yearRange = `${year}-${year + 1}`;
  } else {
    yearRange = `${year - 1}-${year}`;
  }
  const timestamp = admin.firestore.FieldValue.serverTimestamp();
  console.log(year);
  console.log(yearRange);
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  var dateFormat = date.toLocaleDateString("en-US", options).toString();
  console.log("1" + today);
  dateFormat = dateFormat.replace(/\//g, "-");
  console.log(dateFormat);
  try {
    let index = 0;
    const [rows, fields] = await pool.execute(
      "SELECT TimeTable.RoomNo, Timetable.Division, Timetable.AcademicYear, Timetable.Sem, Timetable.Day, Timetable.StartTime, Timetable.EndTime, Subject.SubName, Subject.Cname, Timetable.ProfID FROM Timetable JOIN Subject ON Timetable.SubID = Subject.SubID WHERE Timetable.Day = ?",
      [today]
    );
    console.log("Total rows today:" + rows.length);
    while (index < rows.length) {
      //used fot atomic batched writes to database
      const batch = firebaseDb.batch();
      console.log("iteration no: " + index);
      RoomNo = rows[index].RoomNo;
      console.log(RoomNo);
      Div = rows[index].Division;
      console.log(Div);
      Cname = rows[index].Cname;
      console.log(Cname);
      Sem = rows[index].Sem;
      console.log(Sem);
      AcademicYear = rows[index].AcademicYear;
      console.log(AcademicYear);
      ProfId = rows[index].ProfID;
      SubName = rows[index].SubName;
      console.log(SubName);
      Time = rows[index].StartTime + "-" + rows[index].EndTime;
      const [rowsStudent] = await pool.execute(
        "SELECT StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear FROM StudDetails WHERE Division = ? AND Cname = ? AND Sem = ? AND AcademicYear = ?",
        [Div, Cname, Sem, AcademicYear]
      );
      const [profName] = await pool.execute(
        "SELECT Firstname, Lastname FROM ProfDetails WHERE ProfID = ? ",
        [ProfId]
      );
      console.log(profName);
      console.log(profName[0].Firstname);
      ProfId2 =
        ProfId + "-" + profName[0].Firstname + " " + profName[0].Lastname;
      if (rowsStudent.length == 0) {
        continue;
      }
      let studentIds = [{ StudID: "STUD965", status: false }];
      rowsStudent.forEach((StudentRow) => {
        studentIds.push({ StudID: StudentRow.StudID, status: false });
      });
      const yearRangeRef = app.locals.firebaseDb.collection(yearRange);
      await yearRangeRef
        .doc(Cname)
        .set({ timestamp })
        .then(() => {
          log(Div);
          log(AcademicYear);
          return yearRangeRef
            .doc(Cname)
            .collection(`${AcademicYear}`)
            .doc(Div)
            .set({ timestamp });
        })
        .then(() => {
          log("===============");
          return yearRangeRef
            .doc(Cname)
            .collection(`${AcademicYear}`)
            .doc(Div)
            .collection(dateFormat)
            .doc(`${ProfId2}`)
            .set({ sub: SubName, time: Time, room: RoomNo });
        })
        .catch((error) => {
          console.error("Error adding timestamp: ", error);
        });

      console.log("4" + studentIds);
      studentIds.forEach((student) => {
        const { StudID, status } = student;
        const docRef = app.locals.firebaseDb
          .collection(yearRange)
          .doc(Cname)
          .collection(`${AcademicYear}`)
          .doc(Div)
          .collection(dateFormat)
          .doc(ProfId2)
          .collection(SubName)
          .doc(StudID);

        batch.set(docRef, { status });
      });
      await batch
        .commit()
        .then(() => {
          console.log("Batch write successful!");
        })
        .catch((error) => {
          console.error("Error writing batch: ", error);
        });
      index++;
    }
  } catch (err) {
    console.log(err);
  }
}

//===============================
// async function getTodaysTimeTable() {
//   let date = new Date();
//   var today = "Tuesday"; //replace here code to get todays timetable
//   var year = date.getFullYear();
//   const isAfterJuly1 = date.getMonth() >= 6;
//   let yearRange;
//   if (isAfterJuly1) {
//     yearRange = `${year}-${year + 1}`;
//   } else {
//     yearRange = `${year - 1}-${year}`;
//   }
//   console.log(year);
//   console.log(yearRange);
//   const options = { day: "2-digit", month: "2-digit", year: "numeric" };
//   var dateFormat = date.toLocaleDateString("en-US", options).toString();
//   console.log("1" + today);
//   dateFormat = dateFormat.replace(/\//g, "-");
//   console.log(dateFormat);
//   try {
//     let index = 0;
//     const [rows, fields] = await pool.execute(
//       "SELECT Timetable.Division, Timetable.AcademicYear, Timetable.Sem, Timetable.Day, Timetable.StartTime, Timetable.EndTime, Subject.SubName, Subject.Cname, Timetable.ProfID FROM Timetable JOIN Subject ON Timetable.SubID = Subject.SubID WHERE Timetable.Day = ?",
//       [today]
//     );
//     console.log("2" + rows);
//     console.log("3" + rows.length);
//     while (index < rows.length) {
//       Div = rows[index].Division;
//       console.log(Div);
//       Cname = rows[index].Cname;
//       console.log(Cname);
//       Sem = rows[index].Sem;
//       console.log(Sem);
//       AcademicYear = rows[index].AcademicYear;
//       console.log(AcademicYear);
//       ProfId = rows[index].ProfID;
//       SubName = rows[index].SubName;
//       console.log(SubName);
//       const [rowsStudent] = await pool.execute(
//         "SELECT StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear FROM StudDetails WHERE Division = ? AND Cname = ? AND Sem = ? AND AcademicYear = ?",
//         [Div, Cname, Sem, AcademicYear]
//       );
//       const [profName] = await pool.execute("SELECT Firstname, Lastname FROM ProfDetails WHERE ProfID = ? ",
//       [ProfId]);
//       console.log(profName);
//       console.log(profName[0].Firstname);
//       ProfId2 =ProfId + '-' + profName[0].Firstname  +' '+ profName[0].Lastname;
//       if (rowsStudent.length == 0) {
//         continue;
//       }
//       let studentIds = [{ StudID: "STUD25", status: false }];
//       rowsStudent.forEach((StudentRow) => {
//         studentIds.push({ StudID: StudentRow.StudID, status: false });
//       });
//       console.log("4" + studentIds);
//       studentIds.forEach((student) => {
//         const { StudID, status } = student;
//         const docRef = app.locals.firebaseDb
//           .collection(`${yearRange}`)
//           .doc(`${Cname}`)
//           .collection(`${AcademicYear}`)
//           .doc(`${Div}`)
//           .collection(`${dateFormat}`)
//           .doc(`${ProfId2}`)
//           .collection(`${SubName}`)
//           .doc(`${StudID}`);

//         batch.set(docRef, { status });
//       });
//       batch
//         .commit()
//         .then(() => {
//           console.log("Batch write successful!");
//         })
//         .catch((error) => {
//           console.error("Error writing batch: ", error);
//         });
//       index++;
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

async function checkRunTime() {
  const now = new Date();
  const currentHour = now.getHours();

  // Read the last run time from the file
  let lastRunTime = null;
  try {
    lastRunTime = fs.readFileSync("Lecture.txt", "utf8");
  } catch (err) {
    console.error(`Error reading last run time file: ${err}`);
  }

  if (!lastRunTime || now - new Date(lastRunTime) >= 24 * 60 * 60 * 1000) {
    // If the last run time is not within 24 hours, run the script and update the last run time
    await getTodaysTimeTable();
    fs.writeFile("Lecture.txt", now.toISOString(), (err) => {
      if (err) {
        console.error(`Error updating last run time file: ${err}`);
      }
    });
  } else if (currentHour >= 0 && currentHour < 3) {
    // If the current time is between 12 am and 3 am, and the last run time is within 24 hours, run the script
    await getTodaysTimeTable();
  } else {
    // If the current time is not between 12 am and 3 am, wait until the next day at 12 am to run the script
    const timeUntilNextRun = new Date();
    timeUntilNextRun.setDate(timeUntilNextRun.getDate() + 1);
    timeUntilNextRun.setHours(0, 0, 0, 0);
    const timeToWait = timeUntilNextRun - now;

    console.log(
      `Current time is ${now}, waiting ${
        timeToWait / (60 * 1000)
      } minutes until next run...`
    );

    setTimeout(() => {
      checkRunTime();
    }, timeToWait);
  }
}

checkRunTime();

setInterval(() => {
  checkRunTime();
}, 60 * 60 * 1000);

//setting port
const port = 3000;
//starting the app
app.listen(port, console.log(`Server is listening on port ${port}...`));
