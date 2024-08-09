const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const sgMail = require("@sendgrid/mail");
const fetch = require("node-fetch");

sgMail.setApiKey("TWÓJ_SENDGRID_API_KEY");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Rate limiting: jedno żądanie na IP na godzinę
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 godzina
  max: 1, // 1 żądanie na godzinę
  message: "Zbyt wiele prób z tego IP, spróbuj ponownie za godzinę.",
});

app.post("/send-email", limiter, async (req, res) => {
  const { name, surname, email, message, captcha } = req.body;

  // Sprawdź CAPTCHA
  const captchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=TWÓJ_SECRET_KEY&response=${captcha}`;
  const captchaResponse = await fetch(captchaVerificationUrl, {
    method: "POST",
  });
  const captchaData = await captchaResponse.json();

  if (!captchaData.success) {
    return res.status(400).json({ message: "Weryfikacja CAPTCHA nie powiodła się" });
  }

  const msg = {
    to: "owner@example.com", // Zastąp odpowiednim adresem e-mail odbiorcy
    from: "no-reply@yourdomain.com", // Zweryfikowany adres e-mail nadawcy
    subject: "Nowa wiadomość z formularza kontaktowego",
    text: `
      Imię: ${name}
      Nazwisko: ${surname}
      Email: ${email}
      
      Wiadomość:
      ${message}
    `,
    html: `
      <h2>Nowa wiadomość z formularza kontaktowego</h2>
      <p><strong>Imię:</strong> ${name}</p>
      <p><strong>Nazwisko:</strong> ${surname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Wiadomość:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "Email wysłany pomyślnie" });
  } catch (error) {
    console.error("Błąd podczas wysyłania emaila:", error.response ? error.response.body : error.message);
    res.status(500).json({ message: "Błąd podczas wysyłania emaila" });
  }
});

app.listen(PORT, () => {
  console.log(`Server działa na porcie ${PORT}`);
});
