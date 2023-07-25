const express = require('express');
const twilio = require('twilio');

const app = express();

// Twilio credentials
const accountSid = 'YOUR_ACCOUNT_SID';
const authToken = 'YOUR_AUTH_TOKEN';
const client = twilio(accountSid, authToken);

// Handle voice call
app.post('/call', (req, res) => {
  const voiceResponse = new twilio.twiml.VoiceResponse();
  voiceResponse.say('Hello, this is the voice call.');
  res.set('Content-Type', 'text/xml');
  res.send(voiceResponse.toString());
});

// Generate MP3
app.get('/generate-mp3', (req, res) => {
  const text = 'This is the generated MP3.';
  const fileName = 'generated.mp3';
  client.calls.create({
    url: 'http://localhost:3000/call',
    to: 'YOUR_PHONE_NUMBER',
    from: 'YOUR_TWILIO_PHONE_NUMBER',
    method: 'GET',
    statusCallback: 'http://localhost:3000/save-mp3',
    statusCallbackMethod: 'POST',
    statusCallbackEvent: ['completed'],
  }).then(call => {
    setTimeout(() => {
      client.calls(call.sid).recordings.list().then(recordings => {
        const recording = recordings[0];
        client.recordings(recording.sid).fetch().then(recording => {
          const audioUrl = recording.uri;
          res.set('Content-Disposition', `attachment; filename=${fileName}`);
          res.set('Content-Type', 'audio/mpeg');
          res.redirect(audioUrl);
        });
      });
    }, 5000);
  });
});

// Save MP3
app.post('/save-mp3', (req, res) => {
  const recordingUrl = req.body.RecordingUrl;
  // Logic to save the MP3 file
  res.sendStatus(200);
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});