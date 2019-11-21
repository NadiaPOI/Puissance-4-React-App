const User = require("./user");
const bcrypt = require("bcryptjs");

exports.init = app => {
  app.get("/users", async (req, res) => {
    const users = await User.find();
    res.send(users);
  });

  app.post("/users", async (req, res) => {
    const { firstname, email, password } = req.body;

    const user = new User({
      firstname: firstname,
      email: email,
      password: password
    });

    await user.save(err => {
      if (err) {
        console.log("Error registering new user please try again.");
      }
      console.log(`User save : ${user}`);
      /* Ou await user.save(); // sauvegarde asynchrone du nouveau user
              res.json(userNew); */
      res.send(user);
    });
  });

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);

    if (!email || !password) {
      //Le cas où l'email ou bien le password ne serait pas soumit ou nul
      return res.status(400).send({
        text: "Requête invalide"
      });
    }
    try {
      // On check si l'utilisateur existe en base
      const findUser = await User.findOne({ email });
      const userPassw = findUser.password;
      console.log("findUser", findUser);

      findUser.authenticate(password, userPassw, (err, samePassword) => {
        console.log(samePassword);
        if (!samePassword) {
          return res.status(401).send({
            text: "Mot de passe incorrect"
          });
        }

        if (samePassword) {
          return res.status(200).send({
            token: findUser.getToken(),
            text: "Authentification réussi"
          });
        }
      });
    } catch (error) {
      return res.status(404).send({
        text: "L'utilisateur n'existe pas"
      });
    }
  });

  app.post("/signup", async (req, res) => {
    const { firstname, email, password } = req.body;
    if (!email || !firstname || !password) {
      //Le cas où l'email le password ou le firstname ne serait pas soumit ou null
      return res.status(400).send({
        text: "Requête invalide"
      });
    }
    // Création d'un objet user, dans lequel on hash le mot de passe
    const user = {
      firstname,
      email,
      password: password
    };
    // On check en base si l'utilisateur existe déjà
    try {
      const findUser = await User.findOne({
        email
      });
      if (findUser) {
        return res.status(400).send({
          text: "L'utilisateur existe déjà"
        });
      }
    } catch (error) {
      return res.status(500).send({ error });
    }
    try {
      // Sauvegarde de l'utilisateur en base
      const userData = new User(user);

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userData.password, salt, async function(
          err,
          hashedPassword
        ) {
          if (err) {
            console.log(err);
          }
          userData.password = hashedPassword;
          const userObject = await userData.save();
          return res.status(200).send({
            text: "Succès",
            token: userObject.getToken()
          });
        });
      });
    } catch (error) {
      return res.status(500).send({ error });
    }
  });
};
