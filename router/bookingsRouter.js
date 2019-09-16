var express = require('express');
var bookingsRouter = express.Router();

let {protectRoute} = require("../controller/authController");

let {getCheckout} = require("../controller/bookingController");

bookingsRouter.route("/checkout-session/:id").get(protectRoute,getCheckout);

module.exports = bookingsRouter;