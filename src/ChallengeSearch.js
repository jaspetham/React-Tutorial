const ChallengeSearch = ({color, setColor,darkText,setDarkText, handleColorSubmit}) => {
    return (
        <form className="inputColorForm" onSubmit={handleColorSubmit}>
            <input 
                type="text" 
                autoFocus
                id="inputColor"
                required
                placeholder="Input color name here please"
            />
            <button 
                type="submit"
            >
                Set Color
            </button>
            <button 
                type="button"
                onClick={() => setDarkText(!darkText)}
            >
                Dark?
            </button>
        </form>
    )
}

export default ChallengeSearch
