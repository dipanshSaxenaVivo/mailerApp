const User = require("../model/userSchema");
const mailer = require("nodemailer");
const { google } = require("googleapis");

const logingoogle = async () => {
  const oAuth2client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );
  oAuth2client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  const accessToken = await oAuth2client.getAccessToken();
  const smtpTransport = mailer.createTransport({
    service: "Gmail",
    auth: {
      type: "oAuth2",
      user: process.env.GMAIL_ID,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });
  return smtpTransport;
};

const sendEmailToAllUsers = async (req, res, next) => {
  const allUsers = await User.find().select("email");
  const userObjects = Object.values(allUsers);
  const smtpTransport = await logingoogle();

  userObjects.map(async (user) => {
    const mail = {
      from: `yoursTrouly <${process.env.GMAIL_ID}>`,
      to: user.email,
      subject: "Send Email Using Node.js",
      text: "Node.js",
      html: "<b>Node.js</b>",
    };

    await smtpTransport.sendMail(mail, (error, response) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response.message);
      }
      smtpTransport.close();
    });
  });
  return res.status(201).send({ ...allUsers });
};

module.exports = sendEmailToAllUsers;
