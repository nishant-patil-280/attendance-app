const mysql = require("mysql2/promise");
const jwt = require("jsonwebtoken");

//retrieve details of student
const editStudents = async (req, res) => {
  console.log("Student details called");
  

  try {
    const [rows, fields] = await req.app.locals.pool.execute(
      "SELECT * FROM studdetails WHERE sem = 8"
    );
    if (rows.length > 0) {
      for(var i=0;i<rows.length;i++){
        if (rows[i].Birthdate) {
          var olddate = rows[i].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[i].Birthdate = newdate;
        }
      }
    }
   
    console.log(rows[0].Birthdate);

    // console.log(rows[0]); // rows matching the query
    if (rows.length >= 1) {
      res
        .status(200)
        .render("editStudents", {
          data: rows,
          readonly: 'readonly',
          disabled: 'disabled',
          content: 'No students to display.'
        });
    } else {
      res.status(401).json({ msg: "No such Student" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
  
};

const searchStudents = async (req, res, intParam) => {
  console.log("Student details searched");
  console.log(intParam);
  if(intParam == 101) {
    var student_id = req.body.search;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE StudID = ?",[student_id] 
      );
      if (rows.length > 0) {
        if (rows[0].Birthdate) {
          var olddate = rows[0].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[0].Birthdate = newdate;
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 102) {
    var sem = req.body.sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE Sem = ?",[sem] 
      );

      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  if (intParam == 103) {  
    var branch = req.body.branch;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE Cname = ?",[branch] 
      );
      for(var i=0;i<rows.length;i++){
        if (rows[i].Birthdate) {
          var olddate = rows[i].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[i].Birthdate = newdate;
        }
      }
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: '',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 104) {  
    console.log("EDIT EDIT");
    var student_id = req.body.search;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE StudID = ?",[student_id] 
      );
      
      if (rows.length > 0) {
        if (rows[0].Birthdate) {
          var olddate = rows[0].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[0].Birthdate = newdate;
        }
      }
      
      

      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudentsEdit", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: '',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };


  if (intParam == 105) {
    console.log('search division');  

    var division = req.body.divisionSearch;
    console.log(sem);
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE division = ?",[division] 
      );
      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 106) {  
    console.log("EDIT delete");
    var student_id = req.body.search;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE StudID = ?",[student_id] 
      );
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudentsDelete", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: '',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

};

const editStudentDetails = async (req, res) => {
  console.log("Student details edit");
  res
  .status(200)
  .render("editStudentsEdit", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Student ID to edit.'
  });
 
};

const editStudentDetailsEdit = async (req, res) => {
  console.log("Student details edit edit");
  res
  .status(200)
  .render("editStudentsEdit", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Student ID to edit.'
  });

};

const addStudentDetails = async (req, res) => {
  console.log("Student details add");
  res
  .status(200)
  .render("editStudentsAdd", {
    data: '',
    readonly: '',
    disabled: '',
    content: ''
  });


};

const deleteStudentDetails = async (req, res) => {
  console.log("Student details delete");

  res
  .status(200)
  .render("editStudentsDelete", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Student ID to delete.'
  });

};

const saveStudentDetails = async (req, res,intParam) => {

  if (intParam == 101) {
    console.log("Student details save");

    var save = req.body;
    console.log(save);


    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails"
      );
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 102) {
    console.log("Student details save edit");

    var save = req.body;
    console.log(save);

    var year = Number(req.body.sem)/2.0;
    year = Math.ceil(year);


    try {

      if (req.body.birthdate.length == 0) {
        await req.app.locals.pool.execute(
          "UPDATE studdetails SET firstname = ?, lastname = ?, division = ?, rollno = ?, sem = ?, cname = ?, academicyear = ? WHERE studid = ?",
          [req.body.firstname,req.body.lastname,req.body.division,req.body.rollno,req.body.sem,req.body.branch, year,req.body.studid]
        );
      } else {
        await req.app.locals.pool.execute(
          "UPDATE studdetails SET firstname = ?, lastname = ?, birthdate = ?, division = ?, rollno = ?, sem = ?, cname = ?, academicyear = ? WHERE studid = ?",
          [req.body.firstname,req.body.lastname,req.body.birthdate,req.body.division,req.body.rollno,req.body.sem,req.body.branch, year, req.body.studid]
        );
      }
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editStudents", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details saved successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 103) {
    console.log("Student details save add");

    var save = req.body;
    console.log(save);

    var year = Number(req.body.sem)/2.0;
    year = Math.ceil(year);


    try {

      await req.app.locals.pool.execute(
        "INSERT INTO studdetails (studid, firstname, lastname, birthdate, division, rollno, sem, cname, academicyear) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?) ",
        [req.body.studid, req.body.firstname, req.body.lastname,req.body.birthdate, req.body.division, req.body.rollno, req.body.sem, req.body.branch, year]
      );
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editStudents", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details added successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 104) {
    console.log("Student details save delete");

    var save = req.body;
    console.log(save);

    var year = Number(req.body.sem)/2.0;
    year = Math.ceil(year);


    try {

      await req.app.locals.pool.execute(
        "DELETE FROM studdetails WHERE studid=?",
        [req.body.studid]
      );
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editStudents", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details deleted successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

};

//-----------------------------------------------------------------------------------------------------------------------------------------------------//

const editTeachers = async (req, res) => {
  console.log("Teacher details called");
  

  try {
    const [rows, fields] = await req.app.locals.pool.execute(
      "SELECT * FROM profdetails"
    );
    
    if (rows.length > 0) {
      for(var i=0;i<rows.length;i++){
        if (rows[i].Birthdate) {
          var olddate = rows[i].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[i].Birthdate = newdate;
        }
      }
    }

    // console.log(rows[0]); // rows matching the query
    if (rows.length >= 1) {
      res
        .status(200)
        .render("editTeachers", {
          data: rows,
          readonly: 'readonly',
          disabled: 'disabled',
          content: 'No students to display.'
        });
    } else {
      res.status(401).json({ msg: "No such Teacher" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
  
};

const searchTeachers = async (req, res, intParam) => {
  console.log("Teacher details searched");
  console.log(intParam);
  if(intParam == 101) {
    var teacher_id = req.body.search;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM profdetails WHERE Profid = ?",[teacher_id] 
      );
      if (rows.length > 0) {
        if (rows[0].Birthdate) {
          var olddate = rows[0].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[0].Birthdate = newdate;
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editTeachers", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editTeachers", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  if (intParam == 103) {  
    var branch = req.body.branch;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE Cname = ?",[branch] 
      );

      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: '',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 104) {  
    console.log("EDIT EDIT");
    var prof_id = req.body.search;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM profdetails WHERE ProfID = ?",[prof_id] 
      );

      if (rows.length > 0) {
        if (rows[0].Birthdate) {
          var olddate = rows[0].Birthdate;
          olddate.setHours(12, 0, 0, 0)
  
          var newdate = olddate.toISOString();
          newdate = newdate.slice(0, 10)
          rows[0].Birthdate = newdate;
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editTeachersEdit", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No Teachers to display.'
          });
      } else {
        res.render("editTeachers", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: '',
        content: 'No Teachers to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };


  if (intParam == 105) {
    console.log('search division');  

    var division = req.body.divisionSearch;
    console.log(sem);
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE division = ?",[division] 
      );

      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 106) {  
    console.log("EDIT delete");
    var prof_id = req.body.search;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM profdetails WHERE profID = ?",[prof_id] 
      );
      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editTeachersDelete", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No students to display.'
          });
      } else {
        res.render("editTeachers", { 
        msg: "No such Teacher", 
        data: '',
        readonly: '',
        disabled: '',
        content: 'No Teacher to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

};

const editTecherDetailsEdit = async (req, res) => {
  console.log("Teacher details edit edit");
  res
  .status(200)
  .render("editTeachersEdit", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Prof ID to edit.'
  });

};

const saveTeacherDetails = async (req, res,intParam) => {

  if (intParam == 101) {
    console.log("Teacher details save");

    var save = req.body;
    console.log(save);


    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails"
      );
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 102) {
    console.log("Teacher details save edit");

    var save = req.body;
    console.log(save);


    try {

      if (req.body.birthdate.length == 0) {
        await req.app.locals.pool.execute(
          "UPDATE profdetails SET firstname = ?, lastname = ?, phno = ? WHERE profid = ?",
          [req.body.firstname,req.body.lastname,req.body.phno,req.body.profid]
        );
      } else {
        await req.app.locals.pool.execute(
          "UPDATE profdetails SET firstname = ?, lastname = ?, birthdate = ?, phno = ? WHERE profid = ?",
          [req.body.firstname,req.body.lastname,req.body.birthdate,req.body.phno, req.body.profid]
        );
      }
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editTeachers", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details saved successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 103) {
    console.log("Teacher details save add");

    var save = req.body;
    console.log(save); 

    try {

      await req.app.locals.pool.execute(
        "INSERT INTO profdetails (profid, firstname, lastname, birthdate, phno) VALUES (?, ?, ?, ?, ?) ",
        [req.body.profid, req.body.firstname, req.body.lastname,req.body.birthdate, req.body.phno]
      );
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editTeachers", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details added successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 104) {
    console.log("Teacher details save delete");

    var save = req.body;
    console.log(save);


    try {

      await req.app.locals.pool.execute(
        "DELETE FROM profdetails WHERE profid=?",
        [req.body.profid]
      );
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editTeachers", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details deleted successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

};

const addTeacherDetails = async (req, res) => {
  console.log("Student details add");
  res
  .status(200)
  .render("editTeachersAdd", {
    data: '',
    readonly: '',
    disabled: '',
    content: ''
  });


};

const deleteTeacherDetails = async (req, res) => {
  console.log("Teacher details delete");

  res
  .status(200)
  .render("editTeachersDelete", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Prof ID to delete.'
  });

};

//-----------------------------------------------------------------------------------------------------------------------------------------------------//

const editTimetable = async (req, res) => {
  console.log("timetable details called");
  

  try {
    const [rows, fields] = await req.app.locals.pool.execute(
      "SELECT * FROM timetable"
    );

    // console.log(rows[0]); // rows matching the query
    if (rows.length >= 1) {
      res
        .status(200)
        .render("editTimetable", {
          data: rows,
          readonly: 'readonly',
          disabled: 'disabled',
          content: 'Nothing to display.'
        });
    } else {
      res.status(401).json({ msg: "No such timetable" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
  
};

const searchTimetable = async (req, res, intParam) => {
  console.log("Timetable details searched");
  console.log(intParam);
  if(intParam == 101) {
    var lect_id = req.body.search;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM timetable WHERE lecid = ?",[lect_id] 
      );      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editTimetable", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Nothing to display.'
          });
      } else {
        res.render("editTimetable", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  if (intParam == 103) {  
    var branch = req.body.branch;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE Cname = ?",[branch] 
      );

      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: '',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 104) {  
    console.log("EDIT EDIT");
    var lect_id = req.body.search;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM timetable WHERE LecID = ?",[lect_id] 
      );
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editTimetableEdit", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No Teachers to display.'
          });
      } else {
        res.render("editTeachers", { 
        msg: "No such Student", 
        data: '',
        readonly: '',
        disabled: '',
        content: 'No Teachers to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };


  if (intParam == 105) {
    console.log('search division');  

    var division = req.body.divisionSearch;
    console.log(sem);
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails WHERE division = ?",[division] 
      );

      if (rows.length > 0) {
        for(var i=0;i<rows.length;i++){
          if (rows[i].Birthdate) {
            var olddate = rows[i].Birthdate;
            olddate.setHours(12, 0, 0, 0)
    
            var newdate = olddate.toISOString();
            newdate = newdate.slice(0, 10)
            rows[i].Birthdate = newdate;
          }
        }
      }
      
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { 
        msg: "No such Student", 
        data: '',
        readonly: 'readonly',
        disabled: 'disabled',
        content: 'No students to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 106) {  
    console.log("EDIT delete");
    var lec_id = req.body.search;
    // var sem = req.body,sem;
    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM timetable WHERE lecID = ?",[lec_id] 
      );
 
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editTimetableDelete", {
            data: rows,
            readonly: 'readonly',
            disabled: '',
            content: 'No lectures to display.'
          });
      } else {
        res.render("editTimetable", { 
        msg: "No such lecture", 
        data: '',
        readonly: 'readonly',
        disabled: '',
        content: 'No lecture to display.' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

};

const editTimetableDetailsEdit = async (req, res) => {
  console.log("Timetable details edit edit");
  res
  .status(200)
  .render("editTimetableEdit", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Lect ID to edit.'
  });

};

const saveTimetableDetails = async (req, res,intParam) => {

  if (intParam == 101) {
    console.log("Teacher details save");

    var save = req.body;
    console.log(save);


    try {
      const [rows, fields] = await req.app.locals.pool.execute(
        "SELECT * FROM studdetails"
      );
      // console.log(rows[0]); // rows matching the query
      if (rows.length >= 1) {
        res
          .status(200)
          .render("editStudents", {
            data: rows,
            readonly: '',
            disabled: '',
            content: 'No students to display.'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 102) {
    console.log("Timetable details save edit");

    var save = req.body;
    console.log(save);


    try {

        await req.app.locals.pool.execute(
          "UPDATE timetable SET RoomNo = ?, Division = ?, Cname = ?, AcademicYear = ?, Sem = ?, Day = ?, StartTime = ?, EndTime = ?, SubID = ? WHERE lecid = ?",
          [req.body.RoomNo, req.body.Division,req.body.Cname,req.body.AcademicYear,req.body.Sem, req.body.Day, req.body.StartTime, req.body.EndTime,req.body.SubID,req.body.LecID]
        );
      
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editTimetable", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details saved successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 103) {
    console.log("Timetable details save add");

    var save = req.body;
    console.log(save); 

    try {

      await req.app.locals.pool.execute(
        "INSERT INTO timetable (LecID,RoomNo, Division, Cname, AcademicYear, Sem, Day, StartTime, EndTime, SubID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [req.body.LecID,req.body.RoomNo,
           req.body.Division,req.body.Cname,req.body.AcademicYear,req.body.Sem, req.body.Day, req.body.StartTime, req.body.EndTime,req.body.SubID]
      );
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editTimetable", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details added successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

  if (intParam == 104) {
    console.log("Teacher details save delete");

    var save = req.body;
    console.log(save);


    try {

      await req.app.locals.pool.execute(
        "DELETE FROM timetable WHERE lecid=?",
        [req.body.LecID]
      );
    
        
      // console.log(rows[0]); // rows matching the query
      if (true) {
        res
          .status(200)
          .render("editTimetable", {
            data: '',
            readonly: 'readonly',
            disabled: 'disabled',
            content: 'Details deleted successfuly'
          });
      } else {
        res.render("editStudents", { msg: "No such Student", data: '' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  };

};

const addTimetableDetails = async (req, res) => {
  console.log("Student details add");
  res
  .status(200)
  .render("editTimetableAdd", {
    data: '',
    readonly: '',
    disabled: '',
    content: ''
  });


};

const deleteTimetableDetails = async (req, res) => {
  console.log("Timetable details delete");

  res
  .status(200)
  .render("editTimetableDelete", {
    data: '',
    readonly: '',
    disabled: '',
    content: 'Search using Lecture ID to delete.'
  });

};


module.exports = {
  editStudents, searchStudents, editStudentDetails, addStudentDetails , deleteStudentDetails, saveStudentDetails, editStudentDetailsEdit, 
  editTeachers, searchTeachers, editTecherDetailsEdit, saveTeacherDetails, addTeacherDetails, deleteTeacherDetails, 
  editTimetable, searchTimetable, editTimetableDetailsEdit, saveTimetableDetails, addTimetableDetails, deleteTimetableDetails
};
