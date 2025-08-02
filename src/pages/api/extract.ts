import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Ти експерт з парсингу чеків" },
          { role: "user", content: prompt },
        ],
        temperature: 0,
      }),
    });

    const json = await openaiRes.json();
    console.log(json)
    const result = json.choices[0].message.content;
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: "Failed to extract fields" });
  }
}
