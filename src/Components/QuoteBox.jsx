import React, { useState } from 'react';
import quotes from '../quotes.json'


const QuoteBox = () => {


  const number = Math.floor(Math.random() * quotes.length)
  const [index, setindex] = useState(number) 
  
  //CHANGE COLOR

  const colors = ["#E91E63 ","#8E24AA ","#2196F3", "#26C6DA","#66FF33","#FFEB3B","#FF7043","#0000FF","#4A148C","#1B5E20"]

  const numberColors = Math.floor(Math.random() * colors.length)

  const [indexC, setindexC] = useState(numberColors) 
  
  
//CHANGE LATTER
  const letterType =["sans-serif","cursive"," fantasy","monospace","Arial","Calibri" ,"Candara"," Consolas","Courier New","Didot"]
  const numberLetter = Math.floor(Math.random() * letterType.length)

  const [indexL, setindexL] = useState(numberLetter) 


  //CHANGE ICONS
 
  const iconsChanges= ["snowflake","ghost" ,"quote-left" ,"bolt","tree","gift","feather","robot","fish","crown","user-shield"]
  const numbericons = Math.floor(Math.random() * iconsChanges.length)
  const [indexI, setindexI] = useState(numbericons) 
  const icons = `fa-solid fa-${iconsChanges[indexI]}`

  const changeBodyColors = document.body.style = `background:${colors[indexC]}` 


const change = () =>{
    setindex(Math.floor(Math.random() * quotes.length ))
    setindexI(Math.floor(Math.random() * iconsChanges.length ))
    setindexC(Math.floor(Math.random() * colors.length ))
    setindexL(Math.floor(Math.random() * letterType.length ))
  }


  return (
    
      
    <div className='container' style={{color:colors[indexC],fontFamily:letterType[indexL] }}>
      
        <article className='text-container' >
         <i className={icons}></i> <h1>{quotes[index].quote}</h1>
        </article>


       <div className='btn-container' >
        <h2>{quotes[index].author}</h2>
         <button style={{background:colors[indexC]}} onClick={change}><i className="fa-solid fa-arrow-right-arrow-left"></i></button>
          </div>
      </div>
   

  

  );
};

export default QuoteBox;