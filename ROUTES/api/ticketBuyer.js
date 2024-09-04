import express from 'express';

const router = express.Router();
router.get('/list', (req, res) => {
  res.send('List of ticket buyers');
});
export {router as ticketBuyerRouter};