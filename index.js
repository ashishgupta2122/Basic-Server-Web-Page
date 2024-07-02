const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/login', (req, res) => {
    res.send('Login page')
})

app.get('/signup', (req, res) => {
    res.send('Signup is Sucessfully')
})