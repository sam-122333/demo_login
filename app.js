// import modules and packages
const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

//set up express
const app = express();

//setup config path
dotenv.config({ path: "./config.env" });

//setup database
require("./DB/connection");

//
app.use(express.json());

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      scriptSrc: ["'self'", "cdn.jsdelivr.net"],
    },
  })
);
// app.use(
//   cors({
//     origin: true,
//     credentials: true,
//   })
// );

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' cdn.jsdelivr.net"
  );
  next();
});

// let’s you use the cookieParser in your application
app.use(cookieParser());
app.use(helmet());

// linked the routes in app.js
app.use(require("./routes/auth"));

//server the front end
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html")),
    function (err) {
      res.status(err);
    };
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, "localhost", () => {
  console.log(`server listen on port 4000`);
});
