const Cart = require("./cart");
const db = require("../util/database");

// const getProductsFromFile = (cb) => {
//   fs.readFile(p, (err, fileContent) => {
//     if (err) {
//       cb([]);
//     } else {
//       cb(JSON.parse(fileContent));
//     }
//   });
// };

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    //it should add data in db
    // db.execute("INSERT INTO products (title,price,imageUrl,description) VALUES()" ) //SELECT for selecting the data and for insert INSERT into products and important uneed to make sure that fields u define here  match the fields name we define in db table u don't need to specify id because that should be generated automatically by the db engine. VALUES() now to safely insert valuesand not faced the issue of sql injection which is an attack patternwhere users can insert special data into ur input fields on webpage that runs as sql queries, weshould using approach where we just use question mark one for each of the field the data into seperate with commas and there is second arg we passed to execute with values that will be injected instead of the question mark . and return the promise

    return db.execute(
      "INSERT INTO products (title,price,imageUrl,description) VALUES(?,?,?,?)",
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static deleteById(id) {
    // DELETE FROM table_name WHERE condition;
    return db.execute('DELETE FROM products WHERE products.id = ?',[id])
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products "); //* STANDS FOR EVERYTHINGS, this return a promise
  }

  static findById(id) {
    // find by id 
    return db.execute('SELECT * FROM products WHERE products.id = ?',[id])//everything here means not all rows but all fields but now we can restrict the no of rows with the where condition  
  }
};
