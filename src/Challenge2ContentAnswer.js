import Challenge2AnswerButton from "./Challenge2AnswerButton";

const Challenge2ContentAnswer = ({apiType,setApiType}) => {
    return (
        <form onSubmit={(e)=> e.preventDefault()}>
            <Challenge2AnswerButton
                buttonText = "users"
                apiType = {apiType}
                setApiType = {setApiType}
            />
            <Challenge2AnswerButton
                buttonText = "posts"
                apiType = {apiType}
                setApiType = {setApiType}
            />
            <Challenge2AnswerButton
                buttonText = "comments"
                apiType = {apiType}
                setApiType = {setApiType}
            />
        </form>
        
    )
}

export default Challenge2ContentAnswer
