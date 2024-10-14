const axios = require("axios");
const express = require("express");
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());

function getMockTemp(temp) {
  return Math.random() * (temp - (temp - 2)) + temp - 2;
}

app.get("/", async (req, res) => {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/forecast?lat={53.551086}&lon={9.993682}&appid={35783ee1758c7a5f69b3772f04cc1555}"
  );
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
