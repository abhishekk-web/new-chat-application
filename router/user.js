
const express = require('express');

const router = express.Router();



router.get('/login',(req, res, next)=>{

    res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login" method="POST" "><input type="text" name="username" id="username" placeholder="Enter your name"><br><button type="submit">Login</button></form>')
    

})


    router.post('/login', (req, res, next)=>{

        res.redirect('/');
        console.log(req.body);

       
            
    })



module.exports = router;