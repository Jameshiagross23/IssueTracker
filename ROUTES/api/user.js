import express from 'express'
const router = express.Router();

import debug from 'debug';
const debugUser = debug('app:UserRouter');

router.use(express.urlencoded({exteneded:false}));

//FIXME: use this array to store user data in for now
//we will replace this width a database in a later assignment
const userArray = [];
router.get('/list', (reg,res) => {
  res.json(userArray);
});

router.get("/:userId", (req,res) => {
  //Reads the userId from the URL and stores in a variable
  const userId = req.params.userId;
  //FIXME : Get the user from userArray and send response as JSON;

});
router.post('/register', (req,res) => {
  //FIXME: Register new user and send respond as JSON;

});
router.post('/login', (req,res) => {
  //FIXME:Check user's email and password and send respond as JSON;
  
});
router.put(':/userId', (req,res)=> {
  //FIXME: update existing user and send response JSON
});
router.delete('/:userId', (req,res) => {
  //FIXME: delete user and send response as JSON
});

export {router as UserRouter};