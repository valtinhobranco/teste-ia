const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_TOKEN,
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(express.json());

app.post('/api/openai', async (req, res) => {
  const { context, question } = req.body;
  try {
    const gptResponse = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "assistant", "content": context},
            {"role": "user", "content": question}
        ]
      });
  
    res.json({ result: gptResponse.data });
  } catch (error) {

    res.status(500).json({ error: 'An error occurred in the OpenAI integration' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server up and running on port:  ${port}`);
});
