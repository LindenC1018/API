import express from "express";
import axios from "axios";

const app = express();
const port = 4000;
const API_URL = "http://localhost:4003"; 


app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(API_URL, {
      timeout: 10000
    });

    res.render("index.ejs", {
      randomQuote: result.data.quote
    });
  } catch (error) {
    console.log(error?.response?.data || error?.message || error);
    res.status(500).send("Unable to retrieve a quote");
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
