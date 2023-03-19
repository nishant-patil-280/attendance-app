const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const students = require("./router/student");
const login = require("./router/login");
const admin = require("firebase-admin");
require("dotenv").config();

// const serviceAccount =JSON.parse( process.env.FireBase_Secret);
var serviceAccount = require("./attendance-app-b667e-firebase-adminsdk-s4efb-b381a2c7c7.json");
//intializing firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
//initializing firbase firestore database
const firebaseDb = admin.firestore();
//used fot atomic batched writes to database
const batch = firebaseDb.batch();
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

// middleware
app.use(express.json());

//routes
app.use("/api/v1/login", login);
app.use("/api/v1/students", students);

/////////////////////////////////==================================
async function getTodaysTimeTable(app) {
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
      "SELECT Timetable.Division, Timetable.AcademicYear, Timetable.Sem, Timetable.Day, Timetable.StartTime, Timetable.EndTime, Subject.SubName, Subject.Cname, Timetable.ProfID FROM Timetable JOIN Subject ON Timetable.SubID = Subject.SubID WHERE Timetable.Day = ?",
      [today]
    );
    console.log("2" + rows);
    console.log("3" + rows.length);
    while (index < rows.length) {
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
      const [rowsStudent] = await pool.execute(
        "SELECT StudID, Firstname, Lastname, RollNo, Division, Cname, Sem, AcademicYear FROM StudDetails WHERE Division = ? AND Cname = ? AND Sem = ? AND AcademicYear = ?",
        [Div, Cname, Sem, AcademicYear]
      );
      if (rowsStudent.length == 0) {
        continue;
      }
      let studentIds = [{ StudID: "STUD25", status: false }];
      rowsStudent.forEach((StudentRow) => {
        studentIds.push({ StudID: StudentRow.StudID, status: false });
      });
      console.log("4" + studentIds);
      studentIds.forEach((student) => {
        const { StudID, status } = student;
        const docRef = firebaseDb
          .collection(`${yearRange}`)
          .doc(`${Cname}`)
          .collection(`${AcademicYear}`)
          .doc(`${Div}`)
          .collection(`${dateFormat}`)
          .doc(`${ProfId}`)
          .collection(`${SubName}`)
          .doc(`${StudID}`);

        batch.set(docRef, { status });
        
      });
      batch
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

async function generateLectures(app) {
  console.log(new Date().toString());
  await getTodaysTimeTable(app);
  //don't touch below code
  //Below code is for script
  const today = new Date();
  const data = {
    lastRunDate: today.toISOString().slice(0, 10),
  };
  // fs.writeFileSync("lastrun.txt", JSON.stringify(data));
}

function checkRunTime(app) {
  const checkStart = new Date();
  const checkEnd = new Date();
  checkStart.setHours(0, 0, 0, 0); // set to 12am
  checkEnd.setHours(3, 0, 0, 0); // set to 3am
  const now = new Date();
  // if (now >= checkStart && now <= checkEnd) {
  //  const lastRunData = fs.readFileSync(l_run);
  //  const lastRun = JSON.parse(lastRunData);
  //  const lastRunDate = new Date(lastRun.lastRunDate);
  //  const timeDiff = now.getTime() - lastRunDate.getTime();
  // const hoursDiff = 26
  //timeDiff / (1000 * 3600);
  // if (hoursDiff >= 24) {
  getTodaysTimeTable();
  //   }
  // }
}

// module.exports = function(app) {
checkRunTime(app);
setInterval(() => {
  checkRunTime(app);
}, 7200000);
// };
////////////////================================================================
const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));
