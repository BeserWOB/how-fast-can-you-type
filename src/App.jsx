import React, {useState, useEffect} from "react";

export default function App(){
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)

  
  function handleChange(e){
      const {value} = e.target;
      setText(prevText => prevText = value);
  }

  function calculateWordCount(text) {
    return  text.split(' ').filter(function(num){return num != ''}).length;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      timeRemaining > 0 && setTimeRemaining(prevState => prevState - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeRemaining]);


  return(
    <main>
      <h1>How fast can you type?</h1>
      <textarea 
        value={text} 
        onChange={handleChange}/>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => calculateWordCount(text)}>Start Game</button>
      <h1>Word count: ???</h1>

    </main>
  )
}