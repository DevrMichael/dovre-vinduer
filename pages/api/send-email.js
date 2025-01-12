import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    // Validate phone field
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Configure the email transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'bismics@gmail.com',
      pass: 'fuhv pevi salz pzxf',
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'bismics@gmail.com',
      subject: `Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
      <h2 style="color: #007bff;">Kontaktforespørsel</h2>
      <p style="margin: 0 0 10px;"><strong>Navn:</strong> ${name}</p>
      <p style="margin: 0 0 10px;"><strong>E-post:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
      <p style="margin: 0 0 10px;"><strong>Telefon:</strong> <a href="tel:${phone}" style="color: #007bff;">${phone}</a></p>
      <p style="margin: 20px 0;"><strong>Melding:</strong></p>
      <div style="padding: 15px; background-color: #f9f9f9; border: 1px solid #eee; border-radius: 5px;">
        ${message}
      </div>
      <p style="margin-top: 20px; font-size: 12px; color: #666;">
        Denne e-posten ble sendt fra kontaktskjemaet på nettsiden din.
      </p>
    </div>
  `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
