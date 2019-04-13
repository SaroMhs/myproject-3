const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const ensureLogin = require("connect-ensure-login");
const mongoose = require('mongoose');


router.get("/users/:id", ensureLogin.ensureLoggedIn(),(req,res,next)=>{
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({message: "This userId is not valid"})
  }
  User.findById(req.params.id)
  .then(response => {
    res.json(response)
  })
})

module.exports = router;
