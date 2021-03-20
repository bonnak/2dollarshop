module.exports = {
  twilio: {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
    phoneNumber: process.env.TWILIO_PHONE_NUMBER,
  },

  mailtrap: {
    host: 'smtp.mailtrap.io',
    port: 2525,
    user: process.env.MAILTRAP_SMTP_USERNAME,
    password: process.env.MAILTRAP_SMTP_PASSWORD,
  },
};
