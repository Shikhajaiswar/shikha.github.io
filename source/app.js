const express = require('express');
const app = express();

const path = require("path");
require("./db/conn")

const Register = require("./models/register");
const { json } = require('express')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;
const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/register", (req, res) => {
    res.render("register");
});

// Create a new user in our Database
app.post("/register", async (req, res) => {
    try {
        const password = req.body.password;
        const ConfirmPassword = req.body.ConfirmPassword;
        if (password == ConfirmPassword) {

            const data = new Register({
                name: req.body.name,
                Email: req.body.Email,
                Phone: req.body.Phone,
                password: password,
                ConfirmPassword: ConfirmPassword
            })
            const result = await data.save();
            res.status(201).redirect ('/'); 
        }
        else {
            res.send("Password is not matching");
        }


    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Our port is runnning at ${port}`);
})