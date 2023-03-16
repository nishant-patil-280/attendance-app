
const mysql = require('mysql2/promise');
const jwt  =  require('jsonwebtoken');


//retrieve details of student
const getStudentDetails  = async (req,res) =>{
     console.log("Student details called");
    const student_id =  req.user ;
    // const [details] = await req.app.locals.pool.execute('SELECT * FROM student WHERE StudID = ?', [student_id]);
    
    

    try {
        const [details] = await req.app.locals.pool.execute('SELECT * FROM student WHERE StudID = ?', [student_id]);
        if (details.length === 1) {
            console.log(details[0].Cname);
            res.status(200).json({msg:'details retreived', roll: details[0].RollNo, div: details[0].Division, branch: details[0].Cname, Sem: Sem});  

        } else {
            res.status(401).json({msg:'details not retreived'});
        }
        
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
        
    }
};

//update student details,used by admin to change password


//retrieve today lec
const getStudentLectures  = (req,res) =>{
    // req.authheader  = id from 
    res.send('Student attendance')
}

//retrieve his attendance

module.exports = {getStudentDetails,getStudentLectures}