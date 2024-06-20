import React from 'react'

function Signup() {
    const [firstName, setFirstName] = useState("")
    const [lasttName, setLastName] = useState("")
    const [email, setemailName] = useState("")
    const [password, setPassword] = useState("")

    const register = () =>{

    }
  return ( 
    <>
        <form action="/signUp">
    <div class="form_box">
        <h2>sign up</h2>
        <input class="input" type="text" placeholder="firstname" id="firstName" name="firstname"/>
        <input class="input" type="text" placeholder="lastname" id="lastName" name="lastname"/>
        <input class="input" type="email" placeholder="email" id="email" name="email"/>
        <input class="input" type="password" placeholder="password" id="password" name="password" />
        <label for="date">Date of birth</label>
        <input type="date" id="date" class="input" name="date_of_Birth" />
    </div>
    <button type="submit">submit</button>
    </form>
      
    </>
)

}

export default Signup