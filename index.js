import express from 'express';
//import our environment varibles
import * as dotenv from 'dotenv';
import { ticketOwnerRouter } from './ROUTES/api/ticketOwner.js';
dotenv.config();
import debug from 'debug';
const debugIndex = debug('app:Index');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies to req body
app.use(express.static('frontend/dist'));
app.get('/', (req, res) => {
  res.send('Hello World! Jameshia Gross')
});

app.listen(port, () => {
  debugIndex(`Example app listening on port http://localhost: ${port}`)
});
app.use('/api/ticketOwner', ticketOwnerRouter);