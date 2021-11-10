const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5050;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    // We will be coding here
});

app.post('/book', (req, res) => {
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT}!`));