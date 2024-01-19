const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const socket = require('socket.io');
const http = require('http');
const mysql = require('mysql');
const { addAbortListener } = require('events');

const users = [{}];
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

const server = http.createServer(app);
const io = socket(server);

const ConnectDB = async () => {
 
    const con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password:"",
  database: "matrimonial"
});

con.connect((err)=>{

  if(err){

    console.log(err);
  }else{

    console.log("Connected");
  }
})

app.post('/', async(req,res)=>{

  const { email, name, pass, religion, gender, dob, occupation, company, nationality, city, cast, degree, institute, status, single, children, smoking, drinking, mood, disease, description } = req.body;
   console.log(req.body);
  con.query("insert into bachelor (email, fullname, pass, religion, gender, dob, occupation, company, city, area, caste, deg, institute,status, marital_status, children, smoking, drinking, mood, disease, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [email, name, pass, religion, gender, dob, occupation, company, nationality, city, cast, degree, institute, status, single, children, smoking, drinking, mood, disease, description], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error saving user data to MySQL' });
    } else {
      res.status(200).json({ message: 'bahelor data saved successfully' });
    }
  });
});
app.post('/parent', async(req,res)=>{

  const {email, name, pass, religion, caste, city, area, searchingfor, domain, occupation, company, description} = req.body;
  console.log(req.body);
  con.query("insert into parent (email, fullname, pass, religion, caste, city, area, gender, domain, occupation, company, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",[email, name, pass, religion, caste, city, area, searchingfor, domain, occupation, company, description], (err,result) => {
    if (err) {
      console.error(err);
      res.status(500).json({error: 'Error saving parent data to MySQL' });
    } else {
      res.status(200).json({ message: 'parent data saved successfully' });
    }
  });
});

app.post('/photo', async(req,res)=>{

  const { email } = req.body;
      const photoFile = req.files.photo;
      const urlname = `/assets/${photoFile.name}`;
      const photoFilePath = `F:/react projects/DatingWebsite/client/public/assets/${photoFile.name}`;

      photoFile.mv(photoFilePath, async (err) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Error uploading image' });
        } else {
          con.query("insert into photo (email, path) values(?,?)", [email, urlname], (err,result)=>{
            if (err) {
              console.error(err);
              res.status(500).json({ error: 'Error saving photo data to MySQL' });
            } else {
              res.json({ message: 'Email and photo saved successfully' });
            }
          });
        }
      });

});

app.post('/login', async (req, res) => {
  const { email, pass } = req.body;
  let sex = 'Male';
  con.query("SELECT * FROM bachelor WHERE email = ? AND pass = ?", [email, pass], async (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error checking credentials' });
    } else if (results.length > 0) {
      const user = results[0]
      console.log(user.gender);
      if (user.gender === 'M') {
        sex = 'F';
      }
      con.query("DELETE FROM gender", (deleteErr) => {
        if (deleteErr) {
          console.error(deleteErr);
          res.status(500).json({ success: false, message: 'Error deleting gender data' });
        } else {
         
          con.query("INSERT INTO gender (gender) VALUES (?)", [sex], (insertErr) => {
            console.log(sex);
            if (insertErr) {
              console.error(insertErr);
              res.status(500).json({ success: false, message: 'Error inserting gender data' });
            } else {
              con.query("SELECT path FROM photo WHERE email = ?", [email], (photoErr, photoResults) => {
                if (photoErr) {
                  console.error(photoErr);
                  res.status(500).json({ success: false, message: 'Error fetching photo path' });
                } else if (photoResults.length > 0) {
                  user.photoPath = photoResults[0].path;
                  res.status(200).json(user);
                } else {
                  res.status(200).json(user);
                }
              });
            }
          });
        }
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid Email or Password' });
    }
  });
});

app.get('/card', async (req, res) => {
  con.query("SELECT * FROM bachelor, gender WHERE bachelor.gender = gender.gender", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching cards' });
    } else {
      res.status(200).json(results);
    }
  });
});

app.get('/getphoto', async (req, res) => {
  
  con.query("SELECT * FROM photo", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error fetching photos' });
    } else {
      res.status(200).json(results);
    }
  });
});




app.post('/fmail', async (req, res) => {
  const { fmail } = req.body;

  con.query("SELECT * FROM bachelor WHERE email = ?", [fmail], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error checking email' });
    } else if (results.length > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Email not found' });
    }
  });
});

app.post('/reset', async (req, res) => {
  const { fmail, pass1 } = req.body;

  con.query("UPDATE bachelor SET pass = ? WHERE email = ?", [pass1, fmail], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ success: false, message: 'Error resetting password' });
    } else if (results.affectedRows > 0) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false, message: 'Email not found' });
    }
  });
});

app.post('/email',async(req,res)=>{

  const {SenderEmail, SenderName, RecieverEmail, RecieverName, Message} = req.body;
  con.query("insert into emails (sender_email,sender_name,reciever_email,reciever_name,message) values(?,?,?,?,?)", [SenderEmail, SenderName, RecieverEmail, RecieverName, Message], (err, result)=>{
    
    if(err){

      console.log(err);
      res.status(500);
    }else{

      res.status(200);
    }

  })
})

io.on('connection',(socket)=>{

  console.log("Connection Built with");

  socket.on("joined",({name})=>{
      
      users[socket.id] = name.user;
      console.log(`${name.user} has joined`);
      socket.broadcast.emit('userJoined',{user:"Admin",message:` ${users[socket.id]} has joined`});
      socket.emit('welcome',{user:"Admin",message:`Welcome to the chat`})
})

socket.on('message',({message,id})=>{
    io.emit('sendMessage',{user:users[id],message,id});
})

socket.on('disconnect',()=>{
      socket.broadcast.emit('leave',{user:"Admin",message:`${users[socket.id]}  has left`});
    console.log(`user left`);
})
});

    app.listen(8081, () => {
      console.log('Server Started');
    });

    server.listen(8000,()=>{

      console.log("Socket Server Started");
 });
    
  }

ConnectDB();