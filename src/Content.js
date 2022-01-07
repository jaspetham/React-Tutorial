import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa";

const Content = () => {
    const [items, setItems] = useState([
        {
            id:1,
            checked:false,
            item:' item 1 dude'
        },
        {
            id:2,
            checked:true,
            item:' item 2 lol'
        },
        {
            id:3,
            checked:false,
            item:' item 3 hehe'
        }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem('shoppingList', JSON.stringify(listItems));
    }
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map((item) => (
                        <li className="item" key={item.id}>
                            <input 
                                onChange={() => handleCheck(item.id)}
                                type="checkbox" 
                                checked={item.checked} 
                            />
                            <label 
                                style={(item.checked) ? {textDecoration:'line-through'} : {textDecoration:'none'}}
                                onDoubleClick={() => handleCheck(item.id)}
                            >
                                {item.item}
                            </label>
                            <FaTrashAlt 
                                onClick={() => handleDelete(item.id)}
                                className="icon"
                                role="button" 
                                tabIndex="0"
                            />
                        </li>
                    ))}
                </ul>
            ): (
                <p style={{marginTop:'2rem',color:'red'}}>Your List is Empty Now</p>
            )}
        </main>
    )
}

export default Content
