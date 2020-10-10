const functions = require("firebase-functions");
const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage } = require("./handlers/users");

const firebase = require("firebase");
const app = require("express")();

const FBAuth = require("./util/fbAuth");

// scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);

//user routs
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", FBAuth, uploadImage());

// https://api. baseurl/api/
// signup route

exports.api = functions.https.onRequest(app);
