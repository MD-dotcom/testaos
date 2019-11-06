const account = require("./account/lib.js");

//ici on appelle la fonction login definie en lib.js

module.exports = function(app) {
  app.post("/login", account.login);
  
};