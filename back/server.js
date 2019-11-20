const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const router = require("./router");

// warning console DeprecationWarning: collection.ensureIndex is deprecated.
// Use createIndexes instead.
mongoose.set("useCreateIndex", true);

const app = express();

// Connect to db
//Ici la base de données se nomme « users », si elle n'existe pas elle sera créée automatiquement si une insertion est faite.
mongoose
  .connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to MongoDB");

    // Middlewares
    const urlencodedParser = bodyParser.urlencoded({ extended: true });

    app.use(urlencodedParser);
    app.use(bodyParser.json());

    // Définition des CORS (setHeader()) a voir si necéssaire (erreur console sans)
    app.use((req, res, next) => {
      res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      next();
    });

    // Routes
    router.init(app);

    // Définition et mise en place du port d'écoute
    const port = 8800;
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch(err => {
    console.error("Error DB connecting");
    console.error(err);
  });
