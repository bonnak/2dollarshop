const nodemailer = require('nodemailer');
const { config } = require('@bonnak/toolset');

function createTransport() {
  return nodemailer.createTransport({
    host: config.get('transportation.mailtrap.host'),
    port: config.get('transportation.mailtrap.port'),
    auth: {
      user: config.get('transportation.mailtrap.user'),
      pass: config.get('transportation.mailtrap.password'),
    },
  });
}

function send({
  from, to, subject, text,
}) {
  return new Promise((resolve, reject) => {
    const transporter = createTransport();

    transporter.sendMail({
      from, to, subject, text,
    }, (err, info) => {
      if (err) {
        return reject(err);
      }

      resolve(info);
    });
  });
}

module.exports = { send };
