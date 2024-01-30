import { useState } from "react"


function Authenticate({token}){

    let [successMessage, setSuccessMessage] = useState(null)

    let [errorMessage, setErrorMessage] = useState(null)

    let [isAuthenticated, setIsAuthenticated] = useState(false)

    let [username, setUsername] = useState('')

    async function handleClick (){

        try {

            let response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', 
            { 
              method: "GET", 
              headers: { 
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` 
              }
            })
    
            let result = await response.json();
    
            setSuccessMessage(result.message);
            setIsAuthenticated(true);
            setUsername(result.data.username.username);

        } catch (e) {
            setErrorMessage(e.message)
        }
       
    }

    return <>


        {/* <h2>Authenticate</h2> */}
        {!isAuthenticated && <button onClick={handleClick}>authenticate token</button>}
        {username && <h3>Hi, <span className="greeting">{username}</span>!</h3>}
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
    </>
}

export default Authenticate