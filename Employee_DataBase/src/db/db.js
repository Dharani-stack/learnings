const mongoose = require("mongoose");
const {config} = require('dotenv');

config();
const dbLink = process.env.DATABASE_URL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbLink, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
