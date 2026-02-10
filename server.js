import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {
  fibonacci,
  isPrime,
  hcf,
  lcm,
  askAI
} from "./logic.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// /get/health
app.get("/health",(req,res)=>{
    res.status(200).json({
        is_success : true,
        official_email : "sanchali1202.be23@chitkara.edu.in"
    })
})
app.post("/bfhl", async (req, res) => {
  try {
    const body = req.body;

    //  Body must exist
    if (!body || typeof body !== "object") {
      return res.status(400).json({
        is_success: false,
        message: "Request body is required"
      });
    }

    //  Exactly one key required
    const keys = Object.keys(body);
    if (keys.length !== 1) {
      return res.status(400).json({
        is_success: false,
        message: "Exactly one key must be provided"
      });
    }

    const key = keys[0];
    let data;

    //  Handle each valid key
    if (key === "fibonacci") {
      if (!Number.isInteger(body[key]) || body[key] < 0) {
        return res.status(400).json({
          is_success: false,
          message: "fibonacci must be a non-negative integer"
        });
      }
      data = fibonacci(body[key]);
    }

    else if (key === "prime") {
      if (!Array.isArray(body[key])) {
        return res.status(400).json({
          is_success: false,
          message: "prime must be an array of integers"
        });
      }
      data = body[key].filter(isPrime);
    }

    else if (key === "lcm") {
      if (!Array.isArray(body[key]) || body[key].length === 0) {
        return res.status(400).json({
          is_success: false,
          message: "lcm must be a non-empty array"
        });
      }
      data = lcm(body[key]);
    }

    else if (key === "hcf") {
      if (!Array.isArray(body[key]) || body[key].length === 0) {
        return res.status(400).json({
          is_success: false,
          message: "hcf must be a non-empty array"
        });
      }
      data = hcf(body[key]);
    }

    else if (key === "AI") {
      if (typeof body[key] !== "string" || body[key].trim() === "") {
        return res.status(400).json({
          is_success: false,
          message: "AI must be a non-empty string"
        });
      }
      data = await askAI(body[key]);
    }

    // 4️⃣ Unsupported key
    else {
      return res.status(400).json({
        is_success: false,
        message: "Unsupported key provided"
      });
    }

    // ✅ SUCCESS RESPONSE (STRICT FORMAT)
    return res.status(200).json({
      is_success: true,
      official_email: EMAIL,
      data: data
    });

  } catch (error) {
    // ❌ SERVER ERROR
    return res.status(500).json({
      is_success: false,
      message: "Internal server error"
    });
  }
});

const PORT = 1234;
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})

