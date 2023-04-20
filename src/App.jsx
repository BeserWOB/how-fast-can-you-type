import React, {useState} from "react";

export default function App(){
  const [text, setText] = useState("")
  
  function handleChange(e){
      const {value} = e.target;
      setText(prevText => prevText = value);
  }

  function calculateWordCount(text) {
    return  text.split(' ').filter(function(num){return num != ''}).length;
}


  return(
    <main>
      <h1>How fast can you type?</h1>
      <textarea 
        value={text} 
        onChange={handleChange}/>
      <h4>Time remaining: ???</h4>
      <button onClick={() => calculateWordCount(text)}>Start Game</button>
      <h1>Word count: ???</h1>

    </main>
  )
}