import express from 'express';
import "dotenv/config"

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("APP ESCUCHANDO EN PUERTO:", PORT)
})