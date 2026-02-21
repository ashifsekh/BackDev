// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
    try {
        const response = await axios.get("https://secrets-api.appbrewery.com/random");
        console.log(response.data);
        res.render("index.ejs", { secret: response.data.secret, user: response.data.username });
    } catch (error) {
        console.error("Error fetching secret:", error);
        res.render("index.ejs", { secret: "Error fetching secret", username: "" });
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});
