// const { mongo } = require("./../connections");

// module.exports = {
//   getdata: (req, res) => {
//     const collection = mongo.db("belmongo").collection("users");
//     // select * from belmongo.users limit 10
//     collection
//       .find(
//         { usia: { $in: [29, 30] } }
//         // { projection: { username: 1, _id: 0 } }
//       )
//       .limit(10)
//       .toArray((err, result) => {
//         if (err) {
//           console.log(err);
//           return res.status(500).send(err);
//         }
//         // client.close();
//         // mongo.close();
//         res.send(result);
//       });
//   },
//   postInventory: (req, res) => {
//     const isArray = Array.isArray(req.body);
//     const collection = mongo.db("belmongo").collection("inventory");
//     if (isArray) {
//       collection
//         .insertMany(req.body)
//         .then((result) => {
//           console.log(result);
//           collection
//             .find()
//             .toArray()
//             .then((result1) => {
//               return res.send(result1);
//             })
//             .catch((err) => {
//               return res.status(500).send(err);
//             });
//         })
//         .cathc((err) => {
//           return res.status(500).send("error");
//         });
//     }
//   },
// };

// const MongoClient = require("mongodb").MongoClient;
// const uri =
//   "mongodb+srv://abdralghi:<abdurgrand8513>@cluster0.3ft7v.mongodb.net/belmongo?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// const collection = client.db("belmongo").collection("users");

// module.exports = client.connect((err) => {
//   console.log(collection);
//   collection
//     .find()
//     .limit(10)
//     .toArray((err, result) => {
//       if (err) {
//         return result.status(500).send(err);
//       } else {
//         client.close();
//         res.send(result);
//       }
//     });
//   // perform actions on the collection object
//   client.close();
// });
