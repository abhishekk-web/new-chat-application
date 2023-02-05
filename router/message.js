const express = require('express');
const fs = require('fs');

const router = express.Router();

router.get('/', (req, res)=> {

    fs.readFile("message.txt", (err,data)=> {

        if(err){
            console.log(err);
        }
        else{
            res.send(
                `${data}<form action="/message"  onsubmit='document.getElementById("name").value = localStorage.getItem("name")' method="POST" )><label>Enter the message</label><input type='text' name='message' id='messsage'><input type="hidden" id='name' name='name'><button type='submit'>Send</button></form>`
            )
        }
        

    })

    


})

router.post("/message", (req, res)=> {

    console.log(req.body);
    const username = req.body.name;
    console.log("the username is"+username);
    const message = req.body.message;
    console.log(message);
    fs.writeFile("message.txt",`${req.body.name}: ${req.body.message}`, {flag: 'a'}, (err) => {
        if(err){
            console.log(err);
        }
        else{
            res.redirect('/');
        }
    } )


   

})



module.exports = router;




