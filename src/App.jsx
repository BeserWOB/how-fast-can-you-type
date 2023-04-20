import React, {useState, useEffect} from "react";

export default function App(){
  const startingTime = 5

  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isGameOn, setIsGameOn] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  
  function handleChange(e){
      const {value} = e.target;
      setText(prevText => prevText = value);
  }

  function calculateWordCount(text) {
    return  text.split(' ').filter(function(num){return num != ''}).length;
  }
  function startGame(){
    setIsGameOn(true);
    setTimeRemaining(startingTime);
    setWordCount(0);
    setText("");
  }

  function endGame(){
    setIsGameOn(false);
    setWordCount(calculateWordCount(text));
  }
  

  useEffect(() => {

    if(isGameOn && timeRemaining > 0){
      const timer = setTimeout(() => { 
          setTimeRemaining(prevState => prevState - 1)}, 1000);
        return () => clearTimeout(timer);
    } else if(timeRemaining === 0){
          endGame();
    }


    }, [timeRemaining, isGameOn]);


  return(
    <main>
      <h1>How fast can you type?</h1>
      <textarea 
        autoFocus={isGameOn}
        disabled={!isGameOn}
        value={text} 
        onChange={handleChange}/>
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isGameOn}>Start Game</button>
      <h1>Word count: {wordCount}</h1>

    </main>
  )
}