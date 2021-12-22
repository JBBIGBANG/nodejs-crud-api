const express = require('express')
const router = express.Router()

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Popular Diagonostic',
        description: 'best is barisal',
        creator: 'u1'
    }
];

router.get('/:id', (req, res, next) =>{
   const placeId = req.params.id;
   const place = DUMMY_PLACES.find(p =>{
       return p.id === placeId;
   })
   res.json(place);
});

 router.get('/user/:uid',(req,res,next)=>{
      const userId = req.params.uid;
      const place = DUMMY_PLACES.find(p => {
          return p.creator === userId;
      });
      res.json(place);
 })


module.exports = router;