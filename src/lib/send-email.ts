import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendEmail({
  to,
  subject,
  text,
  from,
}: {
  to: string;
  subject: string;
  text: string;
  from: string;
}) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from,
    to,
    subject,
    text,
  };

  return new Promise<void>((resolve, reject) => {
    transport.sendMail(mailOptions, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}