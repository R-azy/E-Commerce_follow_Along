const express = require("express");
const app = express();

const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");

const bodyParser = require("body-parser");
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(cookieParser());
app.use("/",express.static("uploads"));

app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "backend/config/.env",
    });
}
const user = require("./controller/user");
app.use("/api/v2/user", user);
const product = require("./controller/product");
app.use("/api/v2/product", product);
app.use(ErrorHandler);

module.exports = app;