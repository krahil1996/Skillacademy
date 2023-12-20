const express = require("express");
const app = express();
const port = 3500;
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
// var popup = require("popups");
const signupusers = require("./models/register");
const static_path = path.join(__dirname, "../Public");
const template_path = path.join(__dirname, "../Template/Views");
const partials_path = path.join(__dirname, "../Template/Partials");
hbs.registerPartials(partials_path);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  try {
    const { firstname, lastname, email, gender, password, confirmpassword } =
      req.body;
    // console.log('details', firstname);
    if (password === confirmpassword) {
      const signupusersDetails = new signupusers({
        firstname: firstname,
        lastname: lastname,
        email: email,
        gender: gender,
        password: password,
        confirmpassword: confirmpassword,
      });
      const savingsignupusersDetails = await signupusersDetails.save();
      console.log("after saving", savingsignupusersDetails);
      res.send("succesful");
    } 
    else {
      popup.alert({
        content: "Hello!",
      });popup.alert({
        content: "Hello!",
      });
        //console.log("ddhbhjdbjh")
        //alert('Hello! I am an alert box!!');
      
    }
  } catch (error) {
    console.log(error);
  }
});

// server start
app.listen(port, () => {
  console.log(`Server is Started at port ${port}`);
});
