const express = require('express');
const router = require('./src/routes/index.js');

const app = express();

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
