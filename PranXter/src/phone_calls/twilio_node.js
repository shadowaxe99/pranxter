const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const TwilioNumber = process.env.TWILIO_NUMBER;

function transmitCall(to, message) {
    client.calls
        .create({
            twiml: `<Response><Say>${message}</Say></Response>`,
            to: to,
            from: TwilioNumber
        })
        .then(call => console.log(call.sid))
        .catch(err => console.error(err));
}

module.exports = {
    transmitCall
};