const fs = require('fs');

async function getTodaysTimeTable(app) {
  let date = new Date();
  let options1 = { weekday: 'long' };
  let today = date.toLocaleString('en-US', options1);
  // var today = "Tuesday"; //replace here code to get todays timetable
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
    const [rows, fields] = await app.locals.pool.execute(
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
      const [rowsStudent] = await app.locals.pool.execute(
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
        console.log("entering firebase");
        const { StudID, status } = student;
        const docRef = app.locals.firebaseDb
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

function checkRunTime(app) {
    const now = new Date();
    // Read the last run time from the file
    let lastRunTime = null;
    try {
        lastRunTime = fs.readFileSync('Lecture.txt', 'utf8');
    } catch (err) {
        console.error(`Error reading last run time file: ${err}`);
    }

    // If the last run time is not within 24 hours, run the script and update the last run time
    if (!lastRunTime || now - new Date(lastRunTime) >= 24 * 60 * 60 * 1000) {
        getTodaysTimeTable(app);

        // Update the last run time file
        fs.writeFile('Lecture.txt', now.toISOString(), err => {
            if (err) {
                console.error(`Error updating last run time file: ${err}`);
            }
        });
    } else {
        console.log(
            `Script last ran at ${lastRunTime}, skipping run at ${now}`
        );
    }
}

module.exports = checkRunTime;