const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.sendgridAPIKey)

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email ,
        from: 'shahneel226@gmail.com',
        subject: `welcome to Task Manager , ${name}`,
        text: `Hello ${name} , Welcome to the Task manager App . Great to See you here`
    })
}

const sendCancelEmail = (email,name) => {
    sgMail.send({
        to: email ,
        from: 'shahneel226@gmail.com',
        subject: `GoodBye ${name} :(`,
        text: `Hello ${name} , We feel Sad that you are signing off from our platform.
         Could you share your reason for this`
    })
}

module.exports = { sendWelcomeEmail ,sendCancelEmail }