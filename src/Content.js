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
                <p style={{marginTop:'2rem',color:'red',fontSize:'1.5em'}}>Your List is Empty Now</p>
            )}
        </main>
    )
}

export default Content
