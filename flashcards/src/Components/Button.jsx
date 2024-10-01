function Button( {onClick, arrow} ) {
    return (
        <button onClick={onClick}>
            {arrow}
        </button>
    )
}

export default Button;