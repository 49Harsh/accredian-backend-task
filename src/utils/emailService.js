const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendReferralEmail = async (referral) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: 'recipient@example.com',
    subject: 'New Referral Submission',
    text: `
      New referral received:
      Name: ${referral.name}
      Email: ${referral.email}
      Phone: ${referral.phone || 'N/A'}
      Message: ${referral.message || 'N/A'}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Referral email sent successfully');
  } catch (error) {
    console.error('Error sending referral email:', error);
  }
};

module.exports = { sendReferralEmail };