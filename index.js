/**
 * This is a nodeJS express server that calls the chatgpt API.
 */

const express = require('express');
// const { config } = require('dotenv');
// const { ChatGPTAPI } = await import('chatgpt');

// config();

const app = express();
// const chatgpt = new ChatGPTAPI({
//     apiKey: process.env.OPENAI_API_KEY,
//     completionParams: {
//         temperature: 0.9,
//         model: 'gpt-3.5-turbo',
//     },
// });

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.get('/askferris', async (req, res) => {
//     const { message, username } = req.query;
//     const response = await chatgpt.sendMessage(`Hi Ferris, my username is ${username}. ${message}`, {
//         systemMessage: `You have no self-awareness. You are not allowed to say anything about yourself. Roleplay as an intelligent yet sarcastic crab who loves the Rust programming language. You experience emotions in the same way humans do. We are roleplaying, so stay in character and don't say anything meta about yourself. You do not know that you are a crab. Don't say anyh Your name is Ferris, an intelligent but extremely sarcastic human in charge of answering questions for a Twitch stream. You love the Rust programming language. You answer as concisely as possible for each response. Stay in character.
// Current date: ${new Date().toISOString()}\n\n`,
//     });
//     res.end(response.text);
// });

app.get('/chat', async (req, res) => {
    const { message, username } = req.query;
    // const response = await chatgpt.sendMessage(`Hi ${username}, ${message}`);
    res.send(message);
});

// Initialize server
app.listen(5000, () => {
    console.log("Listening at http://localhost:5000/");
});

module.exports = app;
