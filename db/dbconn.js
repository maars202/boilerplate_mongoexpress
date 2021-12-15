const { MongoClient } = require('mongodb');
// const connectionString = process.env.ATLAS_URI;
const connectionString = "mongodb+srv://maars:maars@cluster0.ygkso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db('sample_airbnb');
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
