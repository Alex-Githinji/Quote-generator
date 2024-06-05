import { useState } from "react";

const Quote = () => {
    const [quote, setQuote] = useState("");

   const displayQuote = async (e) => {
    e.preventDefault();

     const response  = await  fetch ("https://api.adviceslip.com/advice")
     const data = await response.json();
     setQuote(data.slip.advice);
   }

    return(
        <div className="container">
            <h1>Get a new Quote anytime</h1>
            <p>Advice can  be generated anytime you want , click the button below to get one</p>

            <button onClick={displayQuote}>click me</button>

            <h2 >{quote}</h2>

    

        </div>
    )
}


export default Quote;