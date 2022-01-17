const Challenge2AnswerButton = ({buttonText,apiType,setApiType}) => {
    return (
        <button
            className={buttonText === apiType ? "selected" : null}    
            type="button"
            onClick={() => setApiType(buttonText)}
        >
            {buttonText}
        </button>
    )
}

export default Challenge2AnswerButton
