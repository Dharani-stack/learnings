const express = require('express');
const connectDB  = require('./src/db/db.js');
const router = require('./src/routes/index.js');

const app = express();

connectDB();
app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
