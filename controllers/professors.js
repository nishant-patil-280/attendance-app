const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");

//retrieve details of professor,code pending to be written
const getProfessorDetails = async (req, res) => {
  console.log("Professor details called");
  const prof_id = req.user;
  try {
    const [rows, fields] = await req.app.locals.pool.execute(
      "SELECT * FROM profdetails WHERE ProfID = ?",
      [prof_id]
    );
    console.log(rows); // rows matching the query
    console.log(fields);
    if (rows.length >= 1) {
      res.status(200).json({
        msg: "details retrieved",
        Firstname: rows[0].Firstname,
        Lastname: rows[0].Lastname,
      });
    } else {
      res.status(401).json({ msg: "No such Student" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

const getProfessorLectures = async (req, res) => {
  console.log("yeyeyeeyey");
  const professor_id = req.user;
  const today = req.body.today;
  console.log(today);

  try {
    const [rows, fields] = await await req.app.locals.pool.execute(
      "SELECT TimeTable.RoomNo, TimeTable.Division, TimeTable.AcademicYear, TimeTable.Sem, TimeTable.Day, TimeTable.StartTime, TimeTable.EndTime, Subject.SubName, Subject.Cname, TimeTable.ProfID FROM TimeTable JOIN Subject ON TimeTable.SubID = Subject.SubID WHERE TimeTable.ProfID = ? AND TimeTable.Day = ?",
      [
        professor_id,
        //pass here today instead
        "tuesday",
      ]
    );
    console.log(rows.length.toString());
    console.log(rows[0].RoomNo);
    const lectures = rows.map((row) => ({
      roomNo: row.RoomNo.toString(),
      division: row.Division.toString(),
      academicYear: row.AcademicYear.toString(),
      sem: row.Sem.toString(),
      day: row.Day.toString(),
      startTime: row.StartTime.toString(),
      endTime: row.EndTime.toString(),
      subName: row.SubName.toString(),
      cName: row.Cname.toString(),
      profID: row.ProfID.toString(),
    }));
    console.log(lectures);
    // Send the JSON response
    res.status(200).json({ lectures });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getProfessorLectures, getProfessorDetails };
