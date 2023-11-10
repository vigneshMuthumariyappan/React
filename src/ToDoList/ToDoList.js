import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import './todolist.css';

const ToDoList = () => {
    const [items, setItems] = useState(localStorage.getItem('ITEMS')??[]);
    const [inputValue, setInputValue] = useState(()=>(''));
    useEffect(function(){
        localStorage.setItem('ITEMS', items);
    }, [items])

    const checkBoxValue = (id) => {
        const newItem = items.map((item) => item.id === id ? {...item, checked: !item.checked}: item);
        setItems(newItem);
    }
    const deleteId = (id) => {
        const deleteItem = items.filter((item) => item.id !== id);
        setItems(deleteItem);
    }
    const Add = () => {
        const formItems = [...items];
        formItems.push({ id: items.length, checked: false, item: inputValue});
        setItems(formItems);
        setInputValue('');
    }
    return (
        <main>
            <p className="title">To Do List</p>
            <div className="block">
                <input type="text" placeholder="work list" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button onClick={() => Add()} className="primary">Add</button>
            </div>
            <ul>
                { items.length &&
                    items.map((item) => (
                        <li className="item" key={item.id}>
                            <input id={item.id} type="checkbox" checked = {item.checked} onChange = {() => (checkBoxValue(item.id))}  />
                            <label htmlFor={item.id}>{item.item}</label>
                            <FaTrashAlt role="button" tabIndex="0" onClick={() => deleteId(item.id)} className="trash"/>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}

export default ToDoList;