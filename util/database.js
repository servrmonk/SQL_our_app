const mysql = require('mysql2');

//there is 2 way to connect with sql db 
// 1. is to setup one connectoin that we use to run query  we should always close the connnction once we done with the query the downside is we need to reexecute the code to create the connection to every new query  there are a lot of query like be fetch data create data etc
// 2. creating new connection all the time is quickly become very inefficient  both in our code and connection to the db so a better way is to create a so called connection pool
// to create a pool 
// const pool = mysql.createPool() //pool of connectionwhich will allows us to always reach out to it whenever we have a query to run  and then we get a new connection from that pool which manages multiple connection so that we can run multiple query similtanously bc each query needs a own connection once the query is done the connectin is handle back into the pool and it's a available again for a new query and the pool will finish once the apk shuts down . and need to pass js object with some info about dbengine or db host we are connected to  for that 
// i will first ofall define the host we are connecting to server where code is running here localhost . than i will define the username and that by default is root thta was givento us during conguration. i also need to define the exact db name because this gives us to the db serverbut that server typically have multiple db
// here our db is our schemas
// so will take node_complete db here that we named in sql and password 

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'whyUwonnaKnow'
}) 

// and than i will export it in diff way i will call promise here bc this willallows us to use promises when working with the connection which ofcourse handle async tasks async data and instead of callbacksbc promises allows us to write code in structured way 

module.exports  = pool.promise();
// and go and import in app.js