import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'contact@labolarochester.com',
    pass: process.env.EMAIL_PASSWORD
  },
});

export default async (req, res) => {
    console.log(process.env.RECV_ADDRESS)
  if (req.method === 'POST') {
    const {
      name,
      email,
      phone,
      date,
      eventDetails,
      budget,
      numOfPeople,
      eventType,
      eventLocation,
    } = req.body;

    try {
      const mailOptions = {
        from: 'donotreply@labolarochester.com',
        to: process.env.RECV_ADDRESS,
        subject: 'Event Booking Request',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Date of Event: ${date}
            Event Details: ${eventDetails}
            Budget: ${budget}
            Number of People: ${numOfPeople}
            Event Type: ${eventType}
            Event Location: ${eventLocation}

        Note: Please note that this email is generated automatically by our server. Kindly refrain from replying to this email. If you need to communicate with the event organizer, please use the email in the above message.
        `,
      };

      const mailOptions2 = {
        from: 'donotreply@labolarochester.com',
        to: email,
        subject: 'Event Booking Request',
        text: `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Date of Event: ${date}
            Event Details: ${eventDetails}
            Budget: ${budget}
            Number of People: ${numOfPeople}
            Event Type: ${eventType}
            Event Location: ${eventLocation}

            Please note: This email is generated automatically and is not monitored. Please refrain from replying directly to this email. Our team will respond to you within 24 hours.
        `,
      };
      transporter.sendMail(mailOptions2);
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
