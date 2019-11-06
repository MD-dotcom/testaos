/*La fonction login prend en paramètre un email ainsi qu’un password et va appeler 
la méthode authenticate du schemaUser.js pour vérifier si le mot de passe 
correspond bien à celui de l’utilisateur*/

const User = require("../../schema/schemaUser.js");

async function login(req, res) {
  const { password, email } = req.body;
  if (!email || !password) {
    //Le cas où l'email ou bien le password ne serait pas soumit ou nul
    return res.status(400).json({
      text: "Requête invalide"
    });
  }
  try {
    // On check si l'utilisateur existe en base
    const findUser = await User.findOne({ email });
    if (!findUser)
      return res.status(401).json({
        text: "L'utilisateur n'existe pas"
      });
    if (!findUser.authenticate(password))
      return res.status(401).json({
        text: "Mot de passe incorrect"
      });
    return res.status(200).json({
      token: findUser.getToken(),
      text: "Authentification réussi"
    });
    
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
}

//On exporte notre fonction

exports.login = login;
