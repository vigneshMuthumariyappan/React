import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function List(){
    const END_POINT = 'https://jsonplaceholder.typicode.com/';
    const [items, setItems] = useState([]);
    const [isActive, setIsActive] = useState('users');
    const active = {backgroundColor: "red"};
    const fetchData = async (type) => {
        try {
            const data = await fetch(END_POINT+`${type}`);
            if (!data.ok) throw Error("Please reload the app");
            const response = await data.json();
            setItems(response);
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(function (){
        (async () => fetchData('users'))();
    }, [])

    const dataSwitch = (value) => {
        setIsActive(value);
        (async () => fetchData(value))();
    }
    return (
        <>
            {/* <div className="container"> */}
                <div className="row">
                    <div className="col">
                        <Button className="w-100" style={isActive === 'users'? active:null} variant="dark" onClick={() => dataSwitch('users')}>Users</Button>
                    </div>
                    <div className="col">
                        <Button className="w-100" style={isActive === 'posts'? active:null} variant="dark" onClick={() => dataSwitch('posts')}>Posts</Button>
                    </div>
                    <div className="col">
                        <Button className="w-100" style={isActive === 'comments'? active:null} variant="dark" onClick={() => dataSwitch('comments')}>Comments</Button>
                    </div>
                </div>
            {/* </div> */}
            <div className="row">
                <ul className="list-unstyled">
                    { items.length !== 0 &&
                        items.map((item) => (
                        <li className="m-2">
                            {JSON.stringify(item)}
                        </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
}