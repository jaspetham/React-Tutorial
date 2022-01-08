const ChallengeContent = ({color,darkText}) => {
    return (
        <div className="challengeBox" style={{
            backgroundColor: color,
            color: darkText ? "#FFF" : "#000"
        }}>
            <p>{color ? color:'No color'}</p>
        </div>
    )
}
export default ChallengeContent
