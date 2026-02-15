import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Welcome to the Home page</h1>')
})

app.get("/about", (req, res) => {
    res.send('<h1>About me</h1> <p1>This is Ashis Sekh and I am a student</p>')
})

app.post("/register", (req, res) => {
    // will do something with the data and then send a response
    res.sendStatus(201).json({ message: "User registered successfully" });
})

app.put("/user/ashif", (req, res) => {
    res.sendStatus(200).json({ message: "User updated successfully" });
})

app.patch("/user/ashif", (req, res) => {
    res.sendStatus(200).json({ message: "User updated successfully" });
}

app.delete("/user/ashif", (req, res) => {
    res.sendStatus(200).json({ message: "User deleted successfully" });
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});