const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contactme', (req, res) => {
  const { firstName, email, type, comment } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'mahamadoubrah672@gmail.com',
      pass: 'mh9900dexce',
    },
  });

  const mailOptions = {
    from: email,
    to: 'mahamadoubrah672@gmail.com',
    subject: `Nouveau message de ${firstName} (${type})`,
    text: comment,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi du message.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
