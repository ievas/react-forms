import { useState } from "react"


function Authenticate({token}){

    let [successMessage, setSuccesMessage] = useState(null)

    let [errorMessage, setErrorMessage] = useState(null)

    let [isAuthenticated, setIsAuthenticated] = useState(false)

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
    
            setSuccesMessage(result.message);
            setIsAuthenticated(true)

        } catch (e) {
            setErrorMessage(e.message)
        }
       
    }

    return <>


        {/* <h2>Authenticate</h2> */}
        {!isAuthenticated && <button onClick={handleClick}>authenticate token</button>}
        
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
    </>
}

export default Authenticate