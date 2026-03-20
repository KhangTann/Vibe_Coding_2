const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
const readerRoutes = require('./routes/reader.routes');
app.use('/api/readers', readerRoutes);

app.get('/', (req, res) => {
    res.send('API is running...');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const borrowRoutes = require('./routes/borrow.routes');
app.use('/api/borrow', borrowRoutes);