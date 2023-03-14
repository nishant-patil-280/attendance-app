const express  = require('express')
const app  = express();
const mysql = require('mysql2/promise');
const students = require('./router/student')
const login  = require('./router/login')
const  admin = require("firebase-admin");
require('dotenv').config();

// const serviceAccount =JSON.parse( process.env.FireBase_Secret);
 var serviceAccount = require("./attendance-app-b667e-firebase-adminsdk-s4efb-b381a2c7c7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'attendance_db',
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0
});
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database lalala!');
    connection.release();
  }
});

pool.on('error', (err) => {
  console.error('Database error:', err);
});


//making pool availaible to all
app.locals.pool = pool;
app.locals.admin = admin;
// middleware 
app.use(express.json())


//routes

// app.get('/hello',(req,res)=>{
//     res.send('hello');
// });
app.use('/api/v1/login',login)
app.use('/api/v1/students',students)

const port  = 3000;

app.listen(port,  console.log(`Server is listening on port ${port}...`));