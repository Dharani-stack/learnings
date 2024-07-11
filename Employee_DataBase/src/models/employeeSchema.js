const mongoose = require('mongoose');


const bloodGroupRegex = /^(A|B|AB|O)[+-]$/;
const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const empId = /^EMP\d{2}$/;


const employeeSchema = new mongoose.Schema({
    empId:{
        type: String,
        match:[empId, "Invalid Employee ID Eg: EMP12,EMP13"],
        unique:true

    },
    name: {
        type: String,
        unique: true,
        required: [true, 'Name is required'],
    },
    desig: {
        type: String,
        required: [true, 'Designation is required'],
        enum: ['Admin', 'Accountant', 'Assistant', 'Manager'], // Restrict to these values
    },
    dept: {
        type: String,
        required: [true, 'Department is required'],
        enum: ['Operations', 'Accounts', 'Management'], // Restrict to these values
    },
    bloodGroup: {
        type: String,
        required: [true, 'Blood group is required'],
        match: [bloodGroupRegex, 'Invalid blood group'],
    },
    email: {
        type: String,
        required: [true, 'Email ID is required'],
        match: [emailRegex, 'Please fill a valid email address'],
    },
    persDetails: [
        {
            phoneNo: {
                type: Number,
                required: [true, 'Phone number is required'],
                minlength:[10, 'Phone number must be 10-digits']
            },
            address: {
                type: String,
                maxlength: [50, 'Address must be at most 25 characters long'],
            },
        },
    ],
});

// Create model from schema
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
