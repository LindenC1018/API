import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000"; 


app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}`);
    console.log(result);
    res.render("index.ejs", {
      randomQuote: result.data.quote
    });
  } catch (error) {
    console.log(error.response.data);
    res.status(500);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});