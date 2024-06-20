const userSample = require("../models/user.model");


const signIn = (req, res) =>{
    res.send("this is thesign In page")
}

const postSignIn = (req,res) => {
    
    const {email, password} = req.body;
  
   userSample.findOne({email:email, password: password})
   .then( user =>{
      if(user){
         console.log('user found:',user);
         // res.send('Sign in succesful')
        //  res.redirect(`/dashboard?email=${user.email}`)
        res.send(user)
      }else{
         console.log('User not found');
         res.send('Invalid email or password');
      }
   })
   .catch(err =>{
      console.log('Error finding user:', err);
      res.send('Error during sign in');
   })
}

module.exports ={signIn, postSignIn}
