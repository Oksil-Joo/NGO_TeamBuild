import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

//set up the root directory reference
//find the global URL using fileURLTOPath
// and then turn that into the __dirname (something like Users/Desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/joo', (req, res) => {
    res.send(`this is joo's page`);
    // res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.get('/joe', (req, res) => {
    res.send(`this is joe's page`);
    // res.sendFile(path.join(__dirname, '../views/index.html'));
})

router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

export default router;