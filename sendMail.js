const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport(
  {
    secure : true,
    host : 'smtp.gmail.com',
    port : 465,
    auth : {
      user : 'Enter your  sender email',
      pass : 'const pass = process.env.pass;'
      
    }
  }
);
function sendMail(to, subject, text) {
  transporter.sendMail(
    {
      to : to,
      subject : subject,
      html : text,
    }
  );
}
console.log('mail send successfully');

sendMail("Enter the mail where you have to send the mail",
  "Hello this is test mail",
  "<h1>Hello this is test mail</h1><p>Keep Quit While Eating..!</p><img src='https://imgs.search.brave.com/2GVw28EFzOaW6SVvwGJraTqB7nnmkUemb9tosBuqVJY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi93b21h/bi1lYXRpbmctY29v/a2llLTEyNTg3ODcz/LmpwZw'/> <p>Are you Hungery");


