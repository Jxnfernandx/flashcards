import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'
import cardInfo from "./assets/cardInfo.js";

function Flashcard({card, flip, onClick}) {
    return (
        <>
            <div className="card"
                 onClick={onClick}>{flip ? card.back : card.front}
            </div>
        </>
    )
}

function App() {
    const[id, setID] = useState(0);
    const[flip, setFlip] = useState(false);

    const currentCard = cardInfo[id];

    const flipCard = () => {
        setFlip(!flip);
    }

    function handleClickRight(){
        setID(id + 1);
    }

    function handleClickLeft(){
        setID(id - 1);
    }

  return (
    <>
        <Flashcard card={currentCard}
                   flip={flip}
                   onClick={flipCard} />
        <Button onClick={handleClickLeft}/>
        <Button onClick={handleClickRight}/>

    </>
  )
}

export default App
