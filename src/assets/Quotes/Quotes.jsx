import { useState } from "react";
import '../../App.css'
import quotes from './quotes.json'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


function QuoteList(props) {
    const { quotes } = props;
  
    return (
      <div>
        {quotes.map((quote) => (
          <Quote key={quote.id} data={quote} />
        ))}
      </div>
    );
  }
  function Quote(props) {
    const { data } = props;
  
    return (
      <div className="flex justify-center font-semibold flex-col items-center boxe m-10 p-10">
        
          <p className="text-2xl">{data.quote}</p>
          <footer>{data.author}</footer>
        
      </div>
    );
  }

  function Quotes (){
    return (
        <>
    <div className="flex justify-center"><QuoteList quotes={quotes.quotes} /></div>
    
    
        </>
    )
  }
  export default Quotes