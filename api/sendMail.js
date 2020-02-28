// module.exports = (req, res) => {
//   res.json({
//     body: "coucou",
//     query: "req.query"
//     // cookies: req.cookies
//   });
// };

// var express = require("express");
// var router = express.Router();
// var nodemailer = require("nodemailer");

// router.post("/", handleSendEmail); // handle the route at yourdomain.com/sayHello

// module.exports = (req, res) => {
//   // Not the movie transporter!
//   var transporter = nodemailer.createTransport({
//     service: "Gmail",
//     auth: {
//       user: "mktg.zenops360@gmail.com", // Your email id
//       pass: "@0!gOb@FqO62YA" // Your password
//     }
//   });
//   var text = "Hello from \n\n" + req.body.user_name;
//   var mailOptions = {
//     from: "sender@gmail.com", // sender address
//     to: "receiver@gmail.com", // list of receivers
//     subject: "Appointment Email Example", // Subject line
//     text: text,
//     html:
//       "<!DOCTYPE html>" +
//       "<html><head><title>Appointment</title>" +
//       "</head><body><div>" +
//       '<img src="http://evokebeautysalon1.herokuapp.com/main/img/logo.png" alt="" width="160">' +
//       "<p>Thank you for your appointment.</p>" +
//       "<p>Here is summery:</p>" +
//       "<p>Name: James Falcon</p>" +
//       "<p>Date: Feb 2, 2017</p>" +
//       "<p>Package: Hair Cut </p>" +
//       "<p>Arrival time: 4:30 PM</p>" +
//       "</div></body></html>"
//   };
//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//       res.json({ yo: "error" });
//     } else {
//       console.log("Message sent: " + info.response);
//       res.json({ yo: info.response });
//     }
//   });
// };

// module.exports = router;

// import { NowRequest, NowResponse } from "@now/node";

module.exports = (req, res) => {
  console.log(req.body, "REQ)");
  const nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mktg.zenops360@gmail.com",
      pass: "@0!gOb@FqO62YA"
    }
  });

  const mailOptions = {
    from: "mktg.zenops360@gmail.com",
    to: "mktg.zenops360@gmail.com",
    subject: "ZenOps 360 Contact ",
    text: req.body.data.message || "[No message]"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
      return res.status(500).send(err);
    } else {
      console.log("Email sent: " + info.response);
      res.json({ success: true });
    }
  });
};

// console.log("sendMail");
// const bodyParser = require("body-parser");
// const express = require("express");
// const nodemailer = require("nodemailer");
// const app = express();
// app.use(bodyParser.urlencoded());
// const contactAddress = "mktg.zenops360@gmail.com";
// const mailer = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: "mktg.zenops360@gmail.com",
//     pass: "@0!gOb@FqO62YA"
//   }
// });
// app.post("/", function(req, res) {
//   mailer.sendMail(
//     {
//       from: req.body.from || "mktg.zenops360@gmail.com",
//       to: [contactAddress],
//       subject: req.body.subject || "[No subject]",
//       html: req.body.message || "[No message]"
//     },
//     function(err, info) {
//       if (err) return res.status(500).send(err);
//       res.json({ success: true });
//     }
//   );
// });
// app.listen(3000);
