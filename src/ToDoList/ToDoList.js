import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { Button } from "react-bootstrap";
import ApiOperation from "./ApiOperation";

const ToDoList = () => {
    const API_URL = 'http://localhost:3600/items';
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();  
    useEffect(function () {
        const fetchData = async () => {
            try {
                const data = await fetch(API_URL);
                if (!data.ok) throw Error("Please reload the app");
                const response = await data.json();
                setItems(response);
            } catch (error) {
                console.error(error.message)
            }
                      
        }
        (async () => fetchData())();
    }, [])

    const checkBoxValue = async(id) => {
        const newItem = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        const objectApi = {
            "method" : 'PATCH',
            "headers" : {
                'Content-Type': 'application/json'
            },
            "body" : JSON.stringify({checked: newItem.filter((item) => item.id === id)[0].checked})
        }
        const result = await ApiOperation(API_URL+`/${id}`, objectApi);
        if (result) console.error(result);
        setItems(newItem);
    }
    const deleteId = async (id) => {
        const deleteItem = items.filter((item) => item.id !== id);
        const objectApi = {
            "method" : 'DELETE'
        }
        const result = await ApiOperation(API_URL+`/${id}`, objectApi);
        if (result) console.error(result);
        setItems(deleteItem);
    }
    const Add = async (e) => {
        e.preventDefault();
        const formItems = [...items];
        const newItem = { id: items[items.length -1].id+1, checked: false, item: inputValue };
        formItems.push(newItem);
        setItems(formItems);
        const objectApi = {
            "method" : 'POST',
            "headers" : {
                'Content-Type': 'application/json'
            },
            "body" : JSON.stringify(newItem)
        }
        const result = await ApiOperation(API_URL, objectApi);
        if (result) console.error(result);
        setInputValue('');
    }
    return (
        <>
            <main className="m-3 d-flex justify-content-center w-100 overflow-hidden">
                <div className="w-auto">
                    <form className="w-auto" onSubmit={(e) => (Add(e))}>
                        <p className="h2 align-content-center">To Do List</p>
                        <div className="input-group">
                            <input className="form-control me-1" ref={inputRef} type="text" placeholder="work list" value={inputValue} onChange={e => setInputValue(e.target.value)}
                                autoFocus required />
                            <Button onClick={() => { inputRef.current.focus() }} type="submit" className="add ps-1">Add</Button>
                        </div>
                    </form>
                    <section>
                        <ul className="list-unstyled">
                            <Container
                                items={items}
                                checkBoxValue={checkBoxValue}
                                deleteId={deleteId}
                            />
                        </ul>
                    </section>
                </div>
            </main>
        </>
    )
}

export default ToDoList;