import Challenge2AnswerDataItem from "./Challenge2AnswerDataItem"

const Challenge2AnswerDataList = ({datas}) => {
    return (
        // <ul className="listStyle">
        //     {datas.map(data =>(
        //         <Challenge2AnswerDataItem
        //             key={data.id}
        //             data={data}
        //         />
        //     ))}
        // </ul>
        <table style={{
            marginTop:'2rem'
        }}>
            <tbody>
                {datas.map((data) =>(
                    <Challenge2AnswerDataItem
                        key={data.id}
                        data={data}
                    />
                ))}
            </tbody>
        </table>
    )
}

export default Challenge2AnswerDataList
