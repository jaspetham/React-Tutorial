import ItemList from "./ItemList";
const Content = ({items,handleCheck,handleDelete}) => {
    return (
        <main>
            {items.length ? (
                <ItemList 
                    items = {items}
                    handleCheck = {handleCheck}
                    handleDelete = {handleDelete}
                />
            ): (
                <p style={{marginTop:'2rem',color:'red'}}>Your List is Empty Now</p>
            )}
        </main>
    )
}

export default Content
