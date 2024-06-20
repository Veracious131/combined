const userSample = require("../models/user.model");



const welcome = ('/', (req, res)  => {
    res.send('Hello World!')
})

const signUp = (req , res) =>{
  res.send("this is the sign up page")
}

const postSignUp = (req, res) =>{
  const {firstname, lastname, password,email} =req.body
  const signUpPost = new userSample({firstname:firstname, lastname:lastname, password:password, email:email})
 signUpPost.save()
 .then(() => {
    console.log('User saved:', req.body);
    res.send(req.body)
  //   res.redirect('/signIn'); will be handle from frontend
}) .catch(err => {
 console.log('Error saving user:', err);
 res.send('Error saving user');
 res.status(400).send("user not found")
});
}

module.exports= {welcome, postSignUp, signUp}