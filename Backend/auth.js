const { query, response } = require('express')
const { Pool, Client } = require('pg')
const connectionString = 'postgressql://postgres:sravani@localhost:5434/music_streaming_service'
const client = new Client({
    connectionString: connectionString
})
client.connect()
const bcrypt = require('bcrypt');
const saltRounds = 10;
//client.query('CREATE TABLE First(name varchar(20), age int)')
//function queries(req,res){

//console.log(list);     
async function validation(req, res) {
    var list = [];
    let abc = {}

    await client.query('SELECT * from USERS').then((response) => {
        console.log(response.rows);
       // abc.status = 200
        //abc.json = { message: "succesful", response: response }
        console.log(abc);
        for (i in response.rows) {
            list.push(response.rows[i]['email_id']);

        }
        var flag = 0
        for (i = 0; i < list.length; i++) {

            if (req.body.email == list[i]) {
                flag = 1;
                console.log("user found");
                password = req.body.password;
                bcrypt.genSalt(saltRounds, function (err, salt,abc) {
                    bcrypt.hash(password, salt, function (err, hash,abc) {

                        bcrypt.compare(password, response.rows[i]['password'], function (err, result) {
                            if (result == true) {
                                console.log('password matched');
                                abc.status = 200
                               abc.json = { message: "succesful", response: response }
                            } else {
                                console.log("password incorrect");
                                abc.status = 400
                                abc.json = { message: "failed", error: error }
                            }
                        });



                    });
                });

                return;
            }

        }
        if (flag == 0) {
            console.log("Invalid login details");
        }
      //  abc.status = 200
       // abc.json = { message: "succesful", response: response }

    }).

        catch((error) => {
            client.end();
            abc.status =400
            abc.json = { message: "failed", error: error }
        })
    return res.status(abc.status).json(abc.json)
}


function registration(req, res) {


    var namee;
    var email, password, mobile;
    namee = req.body.username;
    email = req.body.email;
    password = req.body.password;
    mobile = req.body.mobile;
    namee = String(namee);
    email = String(email);
    password = String(password);
    mobile = String(mobile);

    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            client.query("INSERT INTO USERS(name,email_id,password,mobile_no) VALUES ($1, $2, $3, $4)", [namee, email, hash, mobile],
                function (err, result) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('row inserted');
                    }
                });
        });
    });
}
module.exports = {
    validation, registration
}