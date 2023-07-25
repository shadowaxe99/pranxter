const express = require('express');
const app = express();
const prankTemplates = require('./prank_templates');
const logic = require('./logic');

app.get('/', (req, res) => {
    const prankTemplate = logic.getRandomPrankTemplate();
    res.send(prankTemplate.content);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
