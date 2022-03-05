const sgMail = require('@sendgrid/mail')
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name) => {
    await sgMail
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

const sendCancelationEmail = async (email, name) => {
    await sgMail
        .send({
            to: email,
            from: 'zaklas@centrum.cz',
            subject: 'Sorry to see you go!',
            text: `Goodbye, ${name}. I hope to see you back sometime soon.`
        })
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}