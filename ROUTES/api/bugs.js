import express from 'express';
const router = express.Router();

import debug from 'debug';
const debugBug = debug('app:BugRouter');

router.use(express.urlencoded({extended:false}));

const bugsArray = [];
router.get('/list', (req,res) => {
  debugBug('bug list route hit');
  res.json(bugsArray);

});

router.get('/:bugId', (req,res)=>{
  const bugId = req.params.bugId;
  //FIXME: get bug from bugsArray an send response as JSON;
});
router.post('/new', (req,res) => {
  //FIXME: create a new bug and send response to JSON;

});
router.put('/:bugId', (req,res) => {
  //FIXME: update existing bug and send response 
});
router.put('/:bugID/classify', (req,res) => {
  //FIXME: Classify bug and send response to JSON
});
router.put('/:bugId/assign', (req,res)=> {
  //FIXME: assign bug to a user and send response as JSON
});
router.put('/:bugId/close', (req,res)=>{
  //FIXME: close bug and send response as JSON
});

export {router as BugRouter};
