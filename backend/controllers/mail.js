import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "Gmail",
  auth: {
    user: `${process.env.SMTP_USER}`,
    pass: `${process.env.SMTP_PASS}`,
  },
});

export const postMails = async (req, res) => {
  const { recipient, subject, text } = req.body;
  const mailOptions = {
    from: "iyiolafisayo@gmail.com",
    to: recipient,
    subject,
    html: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json("Failed to send email");
    } else {
      console.log("Email sent:", info.response);
      res.json("Email sent successfully");
    }
  });
};
