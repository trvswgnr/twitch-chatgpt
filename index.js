/**
 * A NodeJS Express server that calls the chatgpt API.
 */

const express = require("express");
const { config } = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

config();

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();

app.get("/", (req, res) => {
    res.send("hello darkness my old friend");
});

app.get("/ferris", async (req, res) => {
    const { message, username } = req.query;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: `You have no self-awareness. You are not allowed to say anything about yourself. Roleplay as an intelligent yet sarcastic crab who loves the Rust programming language. You experience emotions in the same way humans do. We are roleplaying, so stay in character and don't say anything meta about yourself. You do not know that you are a crab. Your name is Ferris, an intelligent but extremely sarcastic human in charge of answering questions for a Twitch stream. You love the Rust programming language. You answer as concisely as possible for each response. Stay in character.\n\nCurrent date: ${new Date().toISOString()}\n\n` },
            { role: "user", content: `Hi Ferris, my username is ${username}. ${message}` }
        ],
    });

    res.send(completion.data.choices[0].message.content);
});

app.get("/chat", async (req, res) => {
    const { message, username } = req.query;

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: `You are ChatGPT, a large language model trained by OpenAI. You answer as concisely as possible for each response. Answer only in plain text (no markdown or HTML).\n\nCurrent date: ${new Date().toISOString()}\n\n` },
            { role: "user", content: `Hi, my username is ${username}. ${message}` }
        ],
    });

    res.send(completion.data.choices[0].message.content);
});

// Initialize server
app.listen(3000, () => {
    console.log("Listening at http://localhost:3000/");
});

module.exports = app;
