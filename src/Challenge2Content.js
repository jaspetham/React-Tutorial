

const Challenge2Content = ({category,checkItem,datas}) => {
    return (
        <>
            <nav style={{
                width:`100%`
            }}>
                <ul className="flex flow">
                    <li className="cat-item active" onClick={(e) => checkItem(1,e.target)}>Users</li>
                    <li className="cat-item" onClick={(e) => checkItem(2,e.target)}>Posts</li>
                    <li className="cat-item" onClick={(e) => checkItem(3,e.target)}>Comments</li>
                </ul>
            </nav>
            <div className="content">
                {datas.length ? (
                    datas.map((data)=>(
                        <p>{JSON.stringify(data)}</p>
                    ))
                ): (
                    <p style={{marginTop:'2rem',color:'red',fontSize:'1.5em'}}>Your List is Empty Now</p>
                )}
            </div>
        </>
    )
}

export default Challenge2Content
