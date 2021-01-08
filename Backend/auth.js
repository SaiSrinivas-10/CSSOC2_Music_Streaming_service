const { query, response } = require('express') // this sql is to verify whether user is exist or not. get method in both postman , app.
const{Pool, Cilent, Client} = require('pg')
const connectionString = 'postgressql://postgres:srija@localhost:5432/postgres'
const client = new Client({
    connectionString:connectionString
})
client.connect()

function validation(req,res){
    var list = [];
    client.query('SELECT * from USERS').then((response)=>{
        console.log(response.rows);
        for (i in response.rows){
            list.push(response.rows[i]['email_id']);
            
        }
        var flag = 0
         for(i=0; i<list.length; i++){
             
            if(req.body.email == list[i]){
                flag = 1;
                console.log("details matched");
                return;
            }
            
         }
         if(flag == 0){
             console.log("Invalid login details");
         }
        return res.status(200).json({message:"succesful", response:response});
    }).catch((error)=>{client.end(); return res.status(400).json({message:"failed", error:error})})
}


function registration(req,res){

      
    var namee;
    var email,password,mobile;
    namee = req.body.username;
    email = req.body.email;
    password = req.body.password;
    mobile = req.body.mobile;
    namee = String(namee);
    email = String(email);
    password = String(password);
    mobile = String(mobile);
    
    //response.rows.push({'name':namee, 'age':agee});
    client.query("INSERT INTO USERS(name,email_id,password,mobile_no) VALUES ($1, $2, $3, $4)",[namee,email,password,mobile],
    function(err, result){
        if(err){
            console.log(err);
        }else{
            console.log('row inserted');
        }
    });

        
}

module.exports={
    validation, registration
}