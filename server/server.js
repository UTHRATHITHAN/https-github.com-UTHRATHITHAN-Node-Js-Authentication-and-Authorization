const express = require("express");
require("dotenv").config();
const Login = require("./models/loginModel");
const db = require("./db");
const cookieParser = require("cookie-parser");

const cors = require("cors");
const {register, login ,home} = require('./controllers/register')


const app = express();
app.use(cors({
  origin:'http://localhost:3001',
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());
// app.use(db);
db();

app.get("/", (req, res) => {
  res.send("Successful GET.");
});



app.post("/register",  register
// async (req, res) => {
//   try {
//     // get all the data from the body
//     const { name, email, password } = req.body;
//     console.log(
//       " name      : " + name,
//       " Email     : " + email,
//       " Password  : " + password
//     );

//     // All the data should exists
//     // I validate in the frontend
//     // if (!(name && email && password)) {
//     //   res.status(400).json();
//     // }

//     // Check if user already exists
//     const existing = await Login.findOne({ email });
//     console.log("existing : ", existing);
//     if (existing) {
//       res.status(400).json({ message: "User already exists" });
//     } else {
//       // Encrypt the password
//       const myHash = await bcrypt.hash(password, 10);

//       // Save the user in DB
//       const user = await Login.create({
//         name,
//         email,
//         password: myHash,
//       });

//       // Generate a token for user and send it
//       // const token = jwt.sign(
//       //   // {id:user._id, email: user.email, password:user.password}
//       //   // _id is getting from the above user because user is create in the mongodb and return the object in that object i have the _id field.
//       //   { id: user._id },
//       //   process.env.TOKEN_SECRET,
//       //   // press ctrl + space
//       //   {
//       //     expiresIn: "2h",
//       //   }
//       // );

//       // Appending the newly created token to the user object above created
//       // user.token = token;
//       // console.log(user.token);

//       // Here i dont want to send the password to the frontend so i set it to undefined
//       user.password = undefined;

//       console.log(user);
//       // Sending the entire user object to the frontend
//       res.status(200).json(user);
//     }
//   } catch (e) {
//     console.log("Something went wrong", e);
//   }}
);

app.post("/login",login
//  async (req, res) => {
//   try {
//     // Get all data from frontend
//     // Validation
//     // Find User in DB
//     // Match the password
//     // Send a token

//     // Get all data from frontend
//     const { email, password } = req.body;
//     console.log(email, password);

//     // Validation
//     // I done it in front end so dont need it
//     // if (!(email, password)) {
//     //   res.status(400).send("Credential is required");
//     // }

//     // Find User in DB
//     const user = await Login.findOne({ email });

//     // If user does not exist
//     // Match the password
//     // Doing the check email and doing comparing the password at a same line
//     // Below is a developer practice
//     if (user && (await bcrypt.compare(password, user.password))) {
//       const token = jwt.sign(
//         { id: user._id },
//         process.env.TOKEN_SECRET,
//         // press ctrl + space
//         {
//           expiresIn: "2h",
//         }
//       );
//       user.token = token;
//       user.password = undefined;

//       // Cookie
//       const now = new Date();
//       const options = {
//         maxAge: Date.now() + 2 * 60 * 60 * 1000,
//         httpOnly: true,
//       };
//       /// Name of the cookie is going to be token and the value is token
//       // we can send lot of detils
//       // Send a token

//       res.status(200).cookie("token", token, options).json({
//         success: true,
//         token,
//         user,
//       });
//     } else {
//       res.status(400).json({ message: "User not Exist" });
//     }
//   } catch (e) {
//     console.log("Error", e.message);
//   }}
);

app.get('/home', home)
app.listen(5000, () => console.log("App is listening on port 5000."));
