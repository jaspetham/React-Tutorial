import Challenge2AnswerDataCell from "./Challenge2AnswerDataCell";

const Challenge2AnswerDataItem = ({data}) => {
    return (
        // <li>
        //     {JSON.stringify(data)}
        // </li>
        <tr>
            {Object.entries(data).map(([key,value]) =>{
                return(
                    <Challenge2AnswerDataCell
                        key={key}
                        cellData={JSON.stringify(value)}
                    />
                )
            })}
        </tr>
    )
}

export default Challenge2AnswerDataItem
