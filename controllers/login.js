// check userId,password in post(login) request 
// if exist check in backend 
//send back to frontend 
const mysql = require('mysql2/promise');
const jwt  =  require('jsonwebtoken');
//setup authentication so only the request with jwt can access the dashboard 


const loginUser  = async (req,res,intParam) =>{
    var table_name
    var EnrollID
    if(intParam == 101){
    table_name = 'adminuser';
    EnrollID = 'AdminId'
    };
    if(intParam == 102){
      table_name = 'studuser'
      EnrollID = 'StudId'
    };
      if(intParam == 103){
        table_name = 'profuser'
        EnrollID = 'ProfId'
      };

    //based upon the intParam redirect to different tables by using string interpolation
    const {userId,password } = req.body
    console.log(userId,password,intParam);
   if(!userId || !password){
        //add error handling here
        res.sendStatus(401);
        return;
    }
    try{
        const [rows] = await req.app.locals.pool.execute('SELECT * FROM '  + table_name +  ' WHERE ' +  EnrollID  +' = ? AND Password = ?', [userId, password]);
        if (rows.length === 1) {
             req.app.locals.admin.auth().createCustomToken(userId).then((customToken)=>{
                res.status(200).json({message:'user authenticated,Token created',user : userId,token:customToken});
             }).catch(()=>{
                console.log('Error');
             })
             //commented  out our own token to use custom firebase token
            //const token  = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'30d'});
          //  res.status(200).json({msg:'uer created',user : userId,token:token});
          } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    
};

module.exports = {loginUser: loginUser};