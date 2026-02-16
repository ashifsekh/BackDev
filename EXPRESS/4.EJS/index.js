import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

function getDay() {
  const today = new Date();
  const day = today.getDay();

  if (day === 0 || day === 6) {
    return "Weekend and its time to relax!";
  } else {
    return "Weekday and its time to work hard!";
  }
}

app.get("/", (req, res) => {
    const day = getDay();
    res.render("index.ejs", { day: day });
    });

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    });