// check username,password in post(login) request 
// if exist check in backend 
//send back to frontend 
const mysql = require('mysql2/promise');
const jwt  =  require('jsonwebtoken');
//setup authentication so only the request with jwt can access the dashboard 


const loginuser  = async (req,res) =>{
    const {username,password } = req.body
   if(!username || !password){
        //add error handling here
        res.sendStatus(401);
        return;
    }
    try{
        const [rows] = await req.app.locals.pool.execute('SELECT * FROM appuser WHERE EnrollID = ? AND Password = ?', [username, password]);
        if (rows.length === 1) {
             req.app.locals.admin.auth().createCustomToken(username).then((customToken)=>{
                res.status(200).json({msg:'uer created',user : username,token:customToken});
             }).catch(()=>{
                console.log('Error');
             })
             //commented  out our own token to use custom firebase token
            //const token  = jwt.sign({username},process.env.JWT_SECRET,{expiresIn:'30d'});
          //  res.status(200).json({msg:'uer created',user : username,token:token});
          } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      }
    
};

module.exports = {loginuser};