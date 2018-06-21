// get all products
// name function assign req.app to get db
// fs example
const getAllProducts = (req, res) => {
  req.app
    .get("db")
    .products.getAllProducts()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};
module.exports = { getAllProducts };

// node 2
// getAll: (req, res, next) => {
//   const dbInstance = req.app.get("db");

//   dbInstance
//     .read_products()
//     .then(products => res.status(200).send(products))
//     .catch(() => res.status(500).send());
// },

// db.users.getAll users
// we call database object, users table, and run the get all users massive method

// make get call from front end using axios on component did mount
// return response to state and then map into a new array and render
// id - interger
// tpye - character varying
// price - money

// CREATE_TABLE test (
//   test1 int,
//   test2 varchar(255),
//   test3 varchar(255),
//   test4 varchar(255)
// );

// INSERT INTO test (column_name)
// VALUES (value1, value2, value3)

// INSERT INTO users

// CREATE TABLE TestPersons (
//   PersonId int,
//   LastName varchar(255),
//   Address varchar(255),
//   City varchar(255)
// );x

// INSERT INTO TestPersons
// VALUES (customerId, Jabroni, 10101 Test Circle, Dallas)

// INSERT INTO testpersons
// VALUES

// person id int
// last name var
// add var
// city var

// INSERT INTO testpersons
// VALUES (1, Jabroni, 10101 Test, Dallas);

// INSERT INTO testpersons

// INSERT INTO product
// VALUES (1, 'test', 10)

// INSERT INTO product
// values (2, 'hat', 10)

// INSERT INTO product
// values (3, 't-shirt', 15)

// INSERT INTO product
// values (4, 't-shirt', 15)

// INSERT INTO product
// values (5, 't-shirt', 15)

// INSERT INTO product
// values (6, 'shorts', 15)

// INSERT INTO product
// values (7, 'shorts', 10)

// INSERT INTO product
// values (8, 'shorts', 10)

// INSERT INTO product
// values (9, 'hat', 10)

// INSERT INTO product
// values (10, 'hat', 10)

// INSERT INTO product
// values (11, 'hat', 10)

// INSERT INTO product
// values (12, 'hat', 10)

// INSERT INTO product
// values (13, 'hat', 10)

// INSERT INTO product
// values (14, 'hat', 10)

// INSERT INTO product
// values (15, 'hat', 10)
