This project implements the required REST APIs for Qualifier 1 using Node.js and Express, with strict input validation, proper HTTP status codes, and external AI integration.

🔗 API Endpoints
GET /health
Health check endpoint.
{
  "is_success": true,
  "official_email": "sanchali1202.be23@chitkara.edu.in"
}

POST /bfhl
Accepts exactly one key per request and returns the corresponding output.

Supported keys:
fibonacci → Fibonacci series
prime → Filtered prime numbers
lcm → Least Common Multiple
hcf → Highest Common Factor
AI → Single-word AI response


🛠 Tech Stack
Node.js
Express.js
OpenAI API
dotenv

▶️ Run Locally
npm install
npm start


Server runs on:
http://localhost:3000

🔐 Environment Variables
Create a .env file:
OPENAI_API_KEY=your_api_key
