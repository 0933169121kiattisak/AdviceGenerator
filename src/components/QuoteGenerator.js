import React, { useEffect, useState } from "react";
import './QuoteGenerator.css'

const QuoteGenerator = () => {
    const [advice, setAvice] = useState("");
    
    const fetchQuote = async () => {
        try{
            const res = await fetch("https://api.adviceslip.com/advice");
            const data = await res.json();
            setAvice(data.slip.advice);
            
            console.log(data.slip.advice)
        } catch (err){
            console.log("Errror fetching quote:", err)
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return(
        <div className="card">
            <h1 className="title">Advice Generator</h1>
            <h3 className="advice">{advice}</h3>
            
            <button className="btn" onClick={fetchQuote}>Get Advice</button>
        </div>
    );

};

export default QuoteGenerator;