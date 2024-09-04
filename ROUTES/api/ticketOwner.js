import express from 'express';

const router = express.Router();

const ticketOwners = [
  {
    id:1, firstName:'Ashley', lastName:'Sheppard', tickets:['Super Mario', 'Jenga']
  },
  {
    id:2, firstName:'Corbin', lastName:'Sheppard', tickets:['Super Mario', 'Connect Four']
  }
]
router.get('/list', (req, res) => {
  res.status(200).send(ticketOwners);
});

router.get('/:id', (req, res) => {
  const ticketOwner = ticketOwners.find(ticketOwner => ticketOwner.id === parseInt(req.params.id));
  if(!ticketOwner) res.status(404).send('The ticket owner is not found');
  res.status(200).send(ticketOwner);
});
router.post('/add', (req, res) => {
const ticketOwner = req.body;
if(!ticketOwner.firstName || !ticketOwner.lastName || !ticketOwner.tickets){
  res.status('400').send('Please enter all information needed and leave nothing blank');
}else{
  ticketOwner.id = ticketOwners.length + 1;
  ticketOwners.push(ticketOwner);
  res.status(200).send(`Ticket Owner added successfully`);
}


});
router.put('/update/:id', (req, res)=>{
  const ticketOwner = ticketOwners.find(ticketOwner => ticketOwner.id === parseInt(req.params.id));
if(!ticketOwner) {
  res.status(404).send('The ticket owner is not found');}
//const updateTicketOwner = {...ticketOwner, ...read.body}; //merge two object
else{
  const updatedTicketOwner = {...ticketOwner};
  if(req.body.firstName) updatedTicketOwner.firstName = req.body.firstName;
  if(req.body.lastName) updatedTicketOwner.lastName = req.body.lastName;
  if(req.body.tickets && ticketOwner.tickets){
    req.body.tickets.forEach(ticket => {
      updatedTicketOwner.tickets.push(ticket);
    });
}

ticketOwners[ticketOwners.indexOf(ticketOwner)] = updatedTicketOwner;
res.status(200).send('Ticket Owner added Successfully');

//console.table(req.body.tickets); test purposes

 
}

});
router.delete('/delete/:id', (req,res) =>{
  const ticketOwner = ticketOwners.find(ticketOwner => ticketOwner.id === parseInt(req.params.id));
  if(!dogOwner){
    res.status(404).send('The ticket owner does not exist');
  } else{
    ticketOwners.splice(ticketOwners.indexOf(ticketOwner),1);
    res.status(200).send(`Ticket Owner deleted successfully`);
  }
})
export {router as ticketOwnerRouter};