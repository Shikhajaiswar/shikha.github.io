const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ConfirmPassword: {
        type: String,
        required: true
    }
})

const Register = new mongoose.model("Register", employeeSchema);
module.exports = Register;