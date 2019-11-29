const mongoose = require("mongoose");

const app = require("./server");

// Connect to db
//Ici la base de données se nomme « users », si elle n'existe pas elle sera créée automatiquement si une insertion est faite.
mongoose
  // warning console DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
  .set("useCreateIndex", true)
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Définition et mise en place du port d'écoute
    const port = 8800;

    app.listen(port, err => {
      if (err) {
        console.error(err);
      }
      console.log("Express server listening on port 8800.");
    });
  })
  .catch(err => {
    console.error("Error DB connecting");
    console.error(err);
  });
