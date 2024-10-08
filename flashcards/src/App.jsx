import { useState } from 'react';
import cardInfo from "./assets/cardInfo.js";
import Button from "./components/Button.jsx";
import "./App.css"
import Search from "./Components/Search.jsx";

function Flashcard({ card, flip, onClick }) {
    return (
        <>
            <h1>Art Cards</h1>
            <h2>Can you guess the name of the painting?</h2>
            <div className="card" onClick={onClick}>
                {flip ? card.back : (<img src={card.front} alt="Art card front" />)}
            </div>
        </>
    );
}

function App() {
    const [id, setID] = useState(0);          // Index for current card
    const [flip, setFlip] = useState(false);  // Controls flipping
    const [inputValue, setInputValue] = useState("");  // Holds user input

    const currentCard = cardInfo[id];  // Selects the current card based on id

    // Flip the card if the answer is correct
    function checkAnswer() {
        if (inputValue.trim().toLowerCase() === currentCard.back.toLowerCase()) {
            setFlip(true);  // Flips the card to show the back if correct
        }
    }

    // Function to flip the card
    const flipCard = () => {
        setFlip(!flip);
    };

    // Handles moving to the next card (ensuring not to go out of bounds)
    function handleClickRight() {
        if (id < cardInfo.length - 1) {
            setID(id + 1);
            setFlip(false);  // Resets the flip state
            setInputValue("");  // Clears the input field
        }
    }

    // Handles moving to the previous card (ensuring not to go out of bounds)
    function handleClickLeft() {
        if (id > 0) {
            setID(id - 1);
            setFlip(false);  // Resets the flip state
            setInputValue("");  // Clears the input field
        }
    }

    return (
        <>
            {/* Flashcard Component */}
            <Flashcard card={currentCard} flip={flip} onClick={flipCard} />

            {/* Left navigation button */}
            <Button onClick={handleClickLeft} arrow={"LEFT"} />

            {/* Input field for user answer */}
            <Search value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />

            {/* Button to check the answer */}
            <Button onClick={checkAnswer} arrow={"CHECK"} />

            {/* Right navigation button */}
            <Button onClick={handleClickRight} arrow={"RIGHT"} />
        </>
    );
}


export default App;



