import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "";

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)
//text-davinci-003
//a piece of scrap
  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.9,
    max_tokens: 3500
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
