const express = require('express');
const path = require('path');
const productsRouter = require('./routes/products');
const logEvent = require('./middlewares/logEvents');

const PORT = process.env.PORT || 8080

const app = express();

app.use(express.urlencoded({extended: false}));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

// TODO: Need to move the logic to separate handler similar to errorHandler
app.use((req, res, next) => {
    logEvent(`${req.method}\t${req.headers.origin}\t${req.url}\n`, 'requestTracing.txt');
    console.log(`${req.method}\t${req.path}`);
    next();
});

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname});
});

app.get('/about(.html)?', (req, res) => {
    //throw(new Error('Something went wrong'));
    res.sendFile('./views/about.html', { root: __dirname});
});

app.get('/products(.html)?', (req, res) => {
    res.sendFile('./views/products.html', { root: __dirname});
});

app.get('/create(.html)?', (req, res) => {
    res.sendFile('./views/create.html', { root: __dirname});
});

// /api/products/4
app.use('/api/products', productsRouter);
app.use('/api/times', require('./routes/times'));

app.use(require('./middlewares/errorHandler'));//логування ошибок

app.listen(PORT, () => {
    logEvent(`Server starts listening on port ${PORT}`, 'ServerEvents.txt');
    console.log(`Server starts listening on port ${PORT}`);
});