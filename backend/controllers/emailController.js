const nodemailer = require('nodemailer');
const creds = require('../config');

class EmailController {
  sendEmail (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const content = `name: ${name} \n email: ${email} \n message: ${message} `;
    
    const transport = {
      host: 'smtp-mail.outlook.com',
      secureConnection: false, 
      port: 587, 
      auth: {
        user: creds.USER,
        pass: creds.PASS
      },
      tls: {
        ciphers:'SSLv3'
      }
    };
    
    const transporter = nodemailer.createTransport(transport);
    
    transporter.verify((error, success) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Server is ready to take messages');
      }
    });
    
    var mail = {
      from: name,
      to: creds.USER,
      subject: 'New Message from Contact Form',
      text: content
    };
    
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          msg: 'fail'
        });
      } else {
        res.json({
          msg: 'success'
        });
      }
    });    
  }
}

module.exports = new EmailController();