import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('hello from express!');
})

app.get('/joo', (req, res) => {
    res.send(`this is joo's page`);
})

app.get('/joe', (req, res) => {
    res.send(`this is joe's page`);
})

app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});