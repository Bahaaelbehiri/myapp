var express = require('express');
var router=express.Router();

// mock some data
const pets = [
    {
        id: 21,
        name:"Tiny Terror Floof",
        bread: "Black Cat",
        notes:[
            "Is Deaf",
        ]
    },
    {
        id:13,
        name:"Taz",
        bread:"Black Tobby Cat",
        notes:[
            "Is a Jerk",
        ]
    },
    {
        id:42,
        name:"Rogue",
        bread:"Tobby Cat",
        notes:[
            "Is Fat Fat",
            "Sent me to the Hospital"
        ]
    },
];     
   // Get: read all 
router.get('/',(req,res)=>{
// Get: get all pets
res.status(200);
res.json(pets);
})
// GET: a single pet by id
router.get('/:id',(req,res)=>{
// GET a single pet
});
// define our pet endpoints

router.get('/',(req,res)=>{

// do api stuff
});
router.get('/', function(req,res,next){
    res.get('/',)
})
module.exports = router;

// DEFINE our pet endpoints

router.get('/',(req, res)=>{
    /// do api stuff
});


   // POST:create a new pet
router.post('/',(req,res)=>{
    res.status(501);
    res.json({});
});

    //PUT:update an existing pet
    router.put('/:id',(req,res)=>{
});
    // DELETE: delete a pet
    router.delete('/:id',(req,res)=>{
});
    


