const axios = require("axios");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

function getMockTemp(temp) {
  return Math.random() * (temp - (temp - 2)) + temp - 2;
}

app.get("/weatherData", async (req, res) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?lat={53.551086}&lon={9.993682}&appid={35783ee1758c7a5f69b3772f04cc1555}"
  );
  res.status(200).json(response);
});

app.get("/monitoring", async (req, res) => {
  const mockTemp = 20;
  const fieldSectors = [
    { sector: "1a" },
    { sector: "1b" },
    { sector: "1c" },
    { sector: "1d" },
    { sector: "1e" },
    { sector: "2a" },
    { sector: "2b" },
    { sector: "2c" },
    { sector: "2d" },
    { sector: "2e" },
    { sector: "3a" },
    { sector: "3b" },
    { sector: "3c" },
    { sector: "3d" },
    { sector: "3e" },
    { sector: "4a" },
    { sector: "4b" },
    { sector: "4c" },
    { sector: "4d" },
    { sector: "4e" },
    { sector: "5a" },
    { sector: "5b" },
    { sector: "5c" },
    { sector: "5d" },
    { sector: "5e" },
  ];

  const fieldTemp = fieldSectors.map((e) => {
    return { sector: e.sector, temperature: getMockTemp(mockTemp).toFixed(2) };
  });
  res.status(200).json(fieldTemp);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
