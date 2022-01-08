import { useState } from "react";
import ChallengeContent from "./ChallengeContent";
import ChallengeSearch from "./ChallengeSearch";
import AddItem from "./AddItem";
import Header from './Header';
import Content from './Content';
import SearchItem from "./SearchItem";
import Footer from './Footer';
function App() {

  // const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  // const [newItem, setNewItem] = useState('');
  // const [searchItem, setSearchItem] = useState('')

  // const setAndSaveItem =  (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem('shoppingList', JSON.stringify(newItems));
  // }
  // const handleCheck = (id) => {
  //   const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } : item);
  //   setAndSaveItem(listItems);
  // }
  // const handleDelete = (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   setAndSaveItem(listItems);
  // }
  // const addItem = (item) => {
  //   const id = items.length ? items[items.length-1].id + 1 : 1;
  //   const myNewItem = {id, checked:false, item};
  //   const listItems = [...items,myNewItem];
  //   setAndSaveItem(listItems);
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newItem) return;
  //   addItem(newItem);
  //   setNewItem('');
  // }

  const [color, setColor] = useState('');
  const [darkText, setDarkText] = useState(false);

  const handleColorSubmit = (e) => {
      e.preventDefault();
      var color = document.getElementById('inputColor').value;
      setColor(color);
  }
  return (
    <div className="App">
      <ChallengeContent 
        color = {color}
        darkText = {darkText}
      />
      <ChallengeSearch 
        handleColorSubmit = {handleColorSubmit}
        color = {color}
        setColor = {setColor}
        darkText = {darkText}
        setDarkText = {setDarkText}
      />
      {/* <Header/>
      <AddItem
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />
      <Content 
        items= {items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
        handleCheck = {handleCheck}
        handleDelete = {handleDelete}
      />
      <Footer 
        length={items.length}
      /> */}
    </div>
  );
}

export default App;
