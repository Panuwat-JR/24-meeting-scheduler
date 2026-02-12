const express = require('express');
const app = express();
app.use(express.json());

app.get('/meetings', (req, res) => {
    res.json([{ time: '10:00 AM' }]);
});

app.post('/meetings/book', (req, res) => {
    res.json({ message: 'Booked' });
});

app.post('/meetings/cancel', (req, res) => {
    res.json({ message: 'Cancelled' });
});

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
