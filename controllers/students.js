
//retrieve details of student
const getStudentDetails  = (req,res) =>{
    res.send('Student details')
};

//update student details,used by admin to change password


//retrieve today lec
const getStudentLectures  = (req,res) =>{
    // req.authheader  = id from 
    res.send('Student attendance')
}

//retrieve his attendance

module.exports = {getStudentDetails}