if(process.env.NODE_ENV != "production"){
  require('dotenv').config();
}
const express = require("express");
const app = express();
const { default: axios } = require("axios");
const cheerio = require("cheerio");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const methodOverride = require('method-override');
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const expressHendler= require( "./utils/expressHendler" );
const multer  = require('multer');
const {storage}=require("./cloudConfig");
const upload = multer({ dest: storage });

// Models
const User = require("./models/user");
const Farmer = require("./models/Farmer");
const Crop = require("./models/Crops");

//DB connection
main2()
  .then((res) => {
    console.log("DB connect successfully...");
  })
  .catch((err) => {
    console.log(err);
  });
async function main2() {
  mongoose.connect("mongodb://127.0.0.1:27017/Farmers");
}

const expressHandler = require("./utils/expressHendler");

// App Config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
const engine = require('ejs-mate');
app.engine('ejs', engine);

// Session Config
const sessionOptions = {
  secret: "farmersTradeO",
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 3 * 24 * 60 * 60 * 1000,
    maxAge: 3 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport Config
const LocalStrategy=require("passport-local");

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Farmer.authenticate()));
passport.serializeUser(Farmer.serializeUser());
passport.deserializeUser(Farmer.deserializeUser());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Custom Middleware
// app.use((req, res, next) => {
//   res.locals.curruser = req.user;
//   next();
// });

const categoryRoutes = require("./routes/categoryRoutes");
const cropRoutes = require("./routes/cropRoutes");
const farmerRoutes = require("./routes/farmerRoutes");
const marketRoutes = require("./routes/marketRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const rootRoutes = require("./routes/rootRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/", rootRoutes);
app.use("/category", categoryRoutes);
app.use("/crops", cropRoutes);
app.use("/farmers", farmerRoutes);
app.use("/market", marketRoutes);
app.use("/payment", paymentRoutes);
app.use("/users", userRoutes);

// Error Handling
app.all("*", (req, res, next) => {
  next(new expressHendler(404, "page not found !"));
});

//Error Handling
app.use((err, req, res, next) => {

  let { status = 500, message = "something went wrong !" } = err;
  
  res.status(status).render("error.ejs", { message });

});

// Start Server
app.listen(8080, () => console.log("Server is listening on port 8080"));
