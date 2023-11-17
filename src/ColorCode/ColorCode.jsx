import { useReducer } from "react";
import Container from "./Container";
import Forms from "./Forms";

const reducer = (state, action) => {
    if (action.type === 'color-code') {
        return {
            ...state,
            colorCode: action.value
        }
    }

    if (action.type === 'color-name') {
        return {
            ...state,
            colorName: action.value
        }
    }

    if (action.type === 'is-toggle') {
        return {
            ...state,
            isToggle: action.value
        }
    }
    return state;
}
export default function ColorCode() {

    const [state, dispatch] = useReducer(reducer, {
        colorName: '',
        colorCode: 'Empty value',
        isToggle: true
    });
    return (<div className="color-code d-flex align-items-center justify-content-center container-all">
        <div className="w-auto h-auto">
            <Container 
                state = {state}
            />
            <Forms 
                state = {state}
                dispatch = {dispatch}
            />
        </div>
    </div>);
}