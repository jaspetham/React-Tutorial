import { useState, useEffect } from "react";
import Challenge2AnswerDataList from "./Challenge2AnswerDataList";
import Challenge2Content from "./Challenge2Content";
import Challenge2ContentAnswer from "./Challenge2ContentAnswer";
// import ChallengeContent from "./ChallengeContent";
// import ChallengeSearch from "./ChallengeSearch";

// import apiRequest from "./apiRequest";
// import AddItem from "./AddItem";
// import Header from './Header';
// import Content from './Content';
// import SearchItem from "./SearchItem";
// import Footer from './Footer';
function App() {

// Tutorial
  // const API_URL = 'http://localhost:3500/items';

  // const [items, setItems] = useState([]);
  // const [newItem, setNewItem] = useState('');
  // const [searchItem, setSearchItem] = useState('');
  // const [fetchError, setFetchError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true)
  
  // useEffect(() => {
  //   // localStorage.setItem('shoppingList', JSON.stringify(items));   
  //   const fetchItems = async () => {
  //     try{
  //       const response = await fetch(API_URL);
  //       if(!response.ok) throw Error('Did not receive expected data');
  //       const listItems = await response.json();
  //       setItems(listItems);
  //       setFetchError(null);
  //     } catch(err){
  //       setFetchError(err.message);
  //     } finally{
  //       setIsLoading(false);
  //     }
  //   }
  //   setTimeout(()=>{
  //     (async() => await fetchItems())();
  //   },2000)
  // },[])

  // const handleCheck = async (id) => {
  //   const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } : item);
  //   setItems(listItems);

  //   const myItem = listItems.filter((item) => item.id === id);
  //   const updateOptions = {
  //     method:'PATCH',
  //     headers:{
  //       'Content-Type':'application/json'
  //     },
  //     body:JSON.stringify({checked: myItem[0].checked})
  //   };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result =  await apiRequest(reqUrl,updateOptions);
  //   if(result) setFetchError(result);
  // }
  // const handleDelete = async (id) => {
  //   const listItems = items.filter((item) => item.id !== id);
  //   setItems(listItems);

  //   const deleteOptions = { method:'DELETE' };
  //   const reqUrl = `${API_URL}/${id}`;
  //   const result =  await apiRequest(reqUrl,deleteOptions);
  //   if(result) setFetchError(result);

  // }
  // const addItem = async (item) => {
  //   const id = items.length ? items[items.length-1].id + 1 : 1;
  //   const myNewItem = {id, checked:false, item};
  //   const listItems = [...items,myNewItem];
  //   setItems(listItems);

  //   const postOptions = {
  //     method:'POST',
  //     headers: {
  //       'Content-Type':'application/json'
  //     },
  //     body: JSON.stringify(myNewItem)
  //   }
  //   const result = await apiRequest(API_URL, postOptions);

  //   if(result) setFetchError(result);
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!newItem) return;
  //   addItem(newItem);
  //   setNewItem('');
  // }
// Tutorial END

// Challenge 1 
  // const [color, setColor] = useState('');
  // const [darkText, setDarkText] = useState(false);

  // const handleColorSubmit = (e) => {
  //     e.preventDefault();
  //     var color = document.getElementById('inputColor').value;
  //     setColor(color);
  // }

// Challenge 1 END

// Challenge 2
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [category, setCategory] = useState(1);
  const [apiType, setApiType] = useState('users')
  const [datas, setDatas] = useState([]);
  // useEffect(()=>{
  //   fetchDatas('users');
  // },[]);
  // const fetchDatas = async (apiType) => {
  //   try{
  //     const response = await fetch(`${API_URL}${apiType}`);
  //     if(!response.ok) throw Error('Did not receive expected data');
  //     const datas = await response.json();
  //     setDatas(datas);
  //   } catch(err){
  //     console.log(err);
  //   }
  // }
  // const checkItem = (id,item) => {
  //   setCategory(id);
  //   var i;
  //   const element = document.getElementsByClassName('cat-item');
  //   for (i = 0; i < element.length; i++) {
  //     element[i].classList.remove('active');
  //   }
  //   item.classList.add('active');

  //   const elementTarget = item.getAttribute('aria-controls');
  //   fetchDatas(elementTarget);
  // }

  // challenge 2 solution
  useEffect(()=>{
    const fetchDatas = async () => {
      try{
        const response = await fetch(`${API_URL}${apiType}`);
        if(!response.ok) throw Error('Did not receive expected data');
        const data = await response.json();
        setDatas(data);
      } catch(err){
        console.log(err);
      }
    }
    fetchDatas();
  },[apiType]);
// Challenge 2 END
  return (
    <div className="App">
      {/* Challenge 1  */}
      {/* <ChallengeContent 
        color = {color}
        darkText = {darkText}
      />
      <ChallengeSearch 
        handleColorSubmit = {handleColorSubmit}
        color = {color}
        setColor = {setColor}
        darkText = {darkText}
        setDarkText = {setDarkText}
      /> */}
      {/* Challenge 1 END */}
      {/* Challenge 2 */}
      <main>
        {/* <Challenge2Content
          category = {category}
          checkItem = {checkItem}
          datas = {datas}
        /> */}
        <Challenge2ContentAnswer
          apiType = {apiType}
          setApiType = {setApiType}
        />
        <Challenge2AnswerDataList
          datas = {datas}
        />
      </main>
      {/* Challenge 2 END */}
      {/* Tutorial */}
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
      <main>
        {isLoading && <p>Loading items..</p>}
        {fetchError && <p style={{color:'red'}}>{`Error : ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items= {items.filter(item => ((item.item).toLowerCase()).includes(searchItem.toLowerCase()))}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />}
      </main>
      <Footer 
        length={items.length}
      /> */}
      {/* Tutorial END */}
    </div>
  );
}

export default App;
