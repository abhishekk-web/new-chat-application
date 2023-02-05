const express = require('express');
const fs = require('fs');

const router = express.Router();



    router.get('/', (req, res, next)=>{
       
        fs.readFile('messages.txt', (err, data)=>{

            if(err){

                console.log(err);
                data = 'There is no data'

            }
            res.send(`${data}<form action="/" onsubmit="document.getElementById('name').value=localStorage.getItem('name')"  method="POST" ><input type="text" name="message" id="message" placeholder="write a message"><input name="name" id="name"><br><br><button type="submit">Send</button></form>`) 

        })

        
    })
    
    


    router.post('/', (req, res, next)=>{

        console.log(`${req.body.name}:${req.body.message}`);
        fs.writeFile("messages.txt", `${req.body.name}: ${req.body.message}`, {flag: 'a'},(err)=>{
            if(err){
                console.log(err);
            }
            else{
            res.redirect('/');
            }
        })

    })

    module.exports = router;