import { Button } from "react-bootstrap";

export default function Forms({state, dispatch}) {

    const convert = (rgb) => { 
        rgb = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/); 
        function hexCode(i) { 
            // Take the last 2 characters and convert 
            // them to Hexadecimal. 
            return ("0" + parseInt(i).toString(16)).slice(-2); 
        } 
        return "#" + hexCode(rgb[1]) + hexCode(rgb[2]) 
                        + hexCode(rgb[3]); 
    }
    const setColor = (e) => {
        e.preventDefault()
        const d = document.getElementById("main-div");
        d.style.background = state.colorName;
        const rbg = window.getComputedStyle(d).backgroundColor;
        const code = convert(rbg);
        dispatch({
            type: 'color-code',
            value: code
        })
        dispatch({
            type: 'color-name',
            value: ''
        });
    }
    return (
        <>
            <form onSubmit={(e) => (setColor(e))}>
                <input type="text" autoFocus required placeholder="Add color name"
                    onChange={e => dispatch({
                        type: 'color-name',
                        value: e.target.value
                    })}
                    value={state.colorName}
                />
            </form>
            <Button variant="danger" onClick={() => (dispatch({type: 'is-toggle', value:!state.isToggle}))}>Toggle Text Color</Button>
        </>
    );
}