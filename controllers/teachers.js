const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");

//retrieve details of student
const getTeacherDetails = async (req, res) => {
  console.log("Teacher details called");
  const student_id = req.user;

  try {
    const [rows, fields] = await req.app.locals.pool.execute(
      "SELECT * FROM studdetails WHERE ProfID = ?",
      [student_id]
    );
    console.log(rows); // rows matching the query
    console.log(fields);
    if (rows.length >= 1) {
      res
        .status(200)
        .json({
          msg: "details retrieved",
          Firstname: rows[0].Firstname,
          Lastname: rows[0].Lastname,
          Birthdate: rows[0].Birthdate,
          Phno: rows[0].Phno,
          RollNo: rows[0].RollNo,
          Division: rows[0].Division,
          Cname: rows[0].Cname,
          Sem: rows[0].Sem,
          AcademicYear: rows[0].AcademicYear,
          PhotoUrl: rows[0].PhotoUrl,
        });
    } else {
      res.status(401).json({ msg: "No such Student" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};

//write a method to update details by admin
const updateStudentDetails = (req,res) =>{

};

//retrieve today lec
const getStudentLectures = (req, res) => {
  // req.authheader  = id from
  res.send("Student attendance");
};

//retrieve his attendance


module.exports = { getStudentDetails, getStudentLectures ,updateStudentDetails};
