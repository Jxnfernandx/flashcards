function Search({value, onChange}) {
    return(
        <>
            <input type="text"
                   placeholder="Answer"
                   value={value}
                   onChange={onChange}>
            </input>
        </>
    )
}

export default Search;