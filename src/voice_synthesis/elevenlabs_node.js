const elevenlabs = require('elevenlabs-node');

function synthesizeVoice(text) {
    return new Promise((resolve, reject) => {
        elevenlabs.synthesize({
            text: text,
            voice: 'en-US',
            format: 'mp3'
        }, (err, audioStream) => {
            if (err) {
                reject(err);
            } else {
                resolve(audioStream);
            }
        });
    });
}

module.exports = {
    synthesizeVoice: synthesizeVoice
};
