
const SearchItem = ({searchItem, setSearchItem}) => {
    return (
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchItem">Add Item</label>
            <input 
                type="text" 
                autoFocus
                id="searchItem"
                role='searchbox'
                placeholder="Search Item"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
        </form>    
    )
}

export default SearchItem
