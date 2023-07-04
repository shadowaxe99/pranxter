const openai = require('openai');

openai.apiKey = 'your-openai-api-key';

async function generateMessage(prompt) {
    const gptResponse = await openai.Completion.create({
        engine: 'davinci-codex',
        prompt: prompt,
        max_tokens: 100
    });

    return gptResponse.choices[0].text.trim();
}

module.exports = {
    generateMessage
};