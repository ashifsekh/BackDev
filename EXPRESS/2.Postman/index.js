import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Welcome to the Home page</h1>')
})
app.get("/about", (req, res) => {
    res.send('<h1>About me</h1> <p1>This is Ashis Sekh and I am a student</p>')
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});