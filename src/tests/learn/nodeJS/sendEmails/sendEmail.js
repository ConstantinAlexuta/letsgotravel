var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'constantin.alexuta@gmail.com',
    pass: 'chihlimBaR12&'
  }
});

var mailOptions = {
  from: 'constantin.alexuta@gmail.com',
  to: 'alexutac@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});