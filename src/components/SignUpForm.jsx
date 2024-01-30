import { useState } from "react"


function SignUpForm(){


    let [username, setUsername] = useState('')
    let [password, setPassword] = useState('')
    let [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e){
        e.preventDefault();
       
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
        } catch(e) {
            setErrorMessage(e.message)
        }
    }


    return <>
    <h2>Sign Up</h2>
    {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
            <label >
                Username: <input value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            
            <label >
                Password: <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            
            <button>Submit</button>
        </form>

    </>
}

export default SignUpForm