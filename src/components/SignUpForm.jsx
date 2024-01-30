import { useState } from "react"
import Authenticate from './Authenticate'


function SignUpForm({token, setToken}){


    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState(null)
    // let [signUpMessage, setSignUpMessage] = useState(null)
    let [isSignedUp, setIsSignedUp] = useState(false)

    async function handleSubmit(e){
        
        e.preventDefault();

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long");
            return;
        }

        if (username.length < 4) {
            setErrorMessage("Username must be at least 4 characters long");
            return;
        }
       
        try {
            let response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup', 
              { 
                method: "POST", 
                headers: { 
                  "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                  username: {username}, 
                  password: {password}
                }) 
              })
            let result = await response.json();
            console.log(result);
      
            setToken(result.token);
            setUsername('');
            setPassword('');
            setErrorMessage('');
            setIsSignedUp(true);

        } catch(e) {
            setErrorMessage(e.message)
            
        }
    }


    return <>
        
        {errorMessage && <><p>{errorMessage}</p></>}
        {/* {signUpMessage && <h3>{signUpMessage}</h3>} */}
        
           {!isSignedUp &&
           
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label >
                    Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>
                
                <label >
                    Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>
                
                <button>Submit</button>
            </form>
           } 

           {isSignedUp && <Authenticate token={token} setToken={setToken}/>}
        
    </>
}

export default SignUpForm