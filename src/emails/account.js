const sgMail = require('@sendgrid/mail')
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail
        .send({
            to: email,
            from: 'zaklas@centrum.cz',
            subject: 'Thanks for joining in!',
            text: `Welcome to the app, ${name}`
        })
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = {
    sendWelcomeEmail
}