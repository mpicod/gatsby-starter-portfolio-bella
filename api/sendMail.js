// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "mktg.zenops360@gmail.com",
//     pass: "@0!gOb@FqO62YA"
//   }
// });

// const mailOptions = {
//   from: "mktg.zenops360@gmail.com",
//   to: "myfriend@yahoo.com",
//   subject: "Sending Email using Node.js",
//   text: "That was easy!"
// };

// transporter.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

const bodyParser = require("body-parser");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
app.use(bodyParser.urlencoded());
const contactAddress = "mktg.zenops360@gmail.com";
const mailer = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "mktg.zenops360@gmail.com",
    pass: "@0!gOb@FqO62YA"
  }
});
app.post("/", function(req, res) {
  mailer.sendMail(
    {
      from: req.body.from || "mktg.zenops360@gmail.com",
      to: [contactAddress],
      subject: req.body.subject || "[No subject]",
      html: req.body.message || "[No message]"
    },
    function(err, info) {
      if (err) return res.status(500).send(err);
      res.json({ success: true });
    }
  );
});
app.listen(3000);
