const express = require('express')
const { welcome, postSignUp, signUp } = require('../controller/user.controller')
const { signIn, postSignIn } = require('../controller/signin.controller')
const ListOfStudent = require('../controller/ListOfStudent')
const router = express.Router()


router.get("/welcome", welcome)
router.get("/sign_in", signIn)
router.get("/sign_up", signUp)
router.post("/sign_in", postSignIn)
router.post("/sign_up", postSignUp)
router.get("/", ListOfStudent)


module.exports = router