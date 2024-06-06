import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";



// const override = {
//     display: "block",
//     marigin: "0 auto"
//     border-color: "blue",
// }

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "purple",
  };

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [loading, setLoading] = useState(false);
    let [color, setColor] = useState("")


   const displayQuote = async (e) => {
    e.preventDefault();
    setLoading(true);

     const response  = await  fetch ("https://api.adviceslip.com/advice")
     const data = await response.json();
     setQuote(data.slip.advice);
     setLoading(false);
   }

    return(
        <div className="container">
            <h1>Get a new Quote anytime</h1>
            <p>Quote can  be generated anytime you want , click the button below to get one</p>

            <button onClick={displayQuote}>click me</button>
            {loading ? (
                <ClipLoader color={color} loading={loading} cssOverride={override} s ize={45} />
            ) : (

            <h2 >{quote}</h2>
        )}
    

        </div>
    )
}


export default Quote;