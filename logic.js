import axios from "axios";

export const fibonacci = (n) => {
  const result = [];
  if (n <= 0) return result;

  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    result.push(a);
    [a, b] = [b, a + b];
  }
  return result;
};

o
export const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};


const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
export const hcf = (arr) => arr.reduce((a, b) => gcd(a, b));


export const lcm = (arr) => arr.reduce((a, b) => (a * b) / gcd(a, b));


export const askAI = async (question) => {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      contents: [{ parts: [{ text: question }] }]
    }
  );

  return response.data.candidates[0].content.parts[0].text.split(" ")[0];
};
