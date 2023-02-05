
const express = require('express');

const router = express.Router();



router.get('/user',(req, res, next)=>{

    res.send('<form onsubmit="localStorage.setItem(`name`, document.getElementById(`name`).value)" action="/user" method="POST" "><input type="text" name="name" id="name" placeholder="Enter your name"><br><button type="submit">Login</button></form>')
    

})


    router.post('/user', (req, res, next)=>{

        res.redirect('/');
        console.log(req.body);

       
            
    })



module.exports = router;