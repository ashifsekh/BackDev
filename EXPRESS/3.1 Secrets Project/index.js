//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const __dirnaem = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirnaem + "/public/index.html");
});

app.post("/submit", (req, res) => {
    const password = req.body.password;
    if (password === "ILoveProgramming") {
        res.sendFile(__dirnaem + "/public/secret.html");
    } else {
        res.send('<h1>Wrong password! Try again.</h1><a href="/">Go back</a>');
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
