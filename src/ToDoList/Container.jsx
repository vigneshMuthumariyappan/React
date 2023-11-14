import { FaTrashAlt } from "react-icons/fa";

export default function Container({items ,checkBoxValue, deleteId}){
    return (
        <>
           { items.length !== 0 &&
                items.map((item) => (
                    <li className="text d-flex align-items-center justify-content-between p-2" key={item.id}>
                        <input id={item.id} type="checkbox" checked = {item.checked} onChange = {() => (checkBoxValue(item.id))}  />
                        <label className={item.checked ? `align-content-center text-decoration-line-through`: `align-content-center`} htmlFor={item.id}>{item.item}</label>
                        <FaTrashAlt role="button" tabIndex="0" onClick={() => deleteId(item.id)} className="trash"/>
                    </li>
                ))
            }
        </>
    );
}