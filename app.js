const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const db = require('./util/database'); //this will basically a pool , the pool which allows us to use connection and if i now use this in line no 17

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// db.execute //allowus to execute query 
// db.end //we wonna end it whenever our apk is is shut down but we don't shut our apk here 
db.execute('SELECT * FROM products ') //we can execute the command by writeing sql syntax as a string * means everything
// go in sql and write clik on table and create table name product and than u can add new schemas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
