import * as nodemailer from 'nodemailer';
require('dotenv').config();

export const Mail = async (email: any, subject: any, body: any) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USERNAME, //TODO from .env
        pass: process.env.MAIL_PASSWORD, //TODO from .env
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    // setup email data with unicode symbols
    const mailOptions = {
      from: '"ABC" <abc@gmail.com>',
      to: email,
      subject: subject,
      text: body,
    };
    // send mail with defined transport object
    const myPromise = new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error: any) => {
        if (error) {
          reject(error);
        }
        resolve(200);
      });
    });
    return myPromise;
  } catch (error) {
    return error;
  }
};
