/*
Ce fichier permet de lancer une requête d’authentification, une méthode permet de vérifier 
si l’utilisateur est connecté à partir du localStorage.
*/


import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const burl = "http://localhost:8800";

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}/user/login`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
 

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  }
};