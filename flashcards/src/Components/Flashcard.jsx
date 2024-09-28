function Flashcard({card, flip, flipCard}) {
    return (
        <>
            <div className="card"
                 onClick={flipCard}>{flip ? card.back : card.front}
            </div>
        </>
    )
}
export default Flashcard;