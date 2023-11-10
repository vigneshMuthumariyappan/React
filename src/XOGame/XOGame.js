import { useState } from "react";
import Status from "./Status";
import Row from "./Row";
let count = 0;
export default function XOGame() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [status, setStatus] = useState(()=>('start'));
    const success = [ '345', '678', '258', '036', '246', '048', '012', '147'];

    const selectWinner = (X, O) => {
        if (X.length >= 3 || O.length >= 3) {
            success.forEach(item => {
                const array = item.split('');
                if (X.includes(array[0]) && X.includes(array[1]) && X.includes(array[2])) {
                    count = 0;
                    setStatus('X');
                } else if (O.includes(array[0]) && O.includes(array[1]) && O.includes(array[2])) {
                    count = 0;
                    setStatus('O');
                }
            });
        }
    }
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (nextSquares[i])
            return;
        nextSquares[i] = count % 2 === 0 ? "X" : "O";
        count++
        setSquares(nextSquares);
        const keys = Object.keys(nextSquares);
        const O = keys.filter(key => (nextSquares[key] === "O"));
        const X = keys.filter(key => (nextSquares[key] === "X"));
        selectWinner(X, O);
        if (count === 9) {
            count = 0;
            return setStatus('Draw');
        }
    }
    return (
        <div className="board">
            {status === 'play' &&
                < Row 
                    squares = {squares}
                    handleClick = {handleClick}
                />
            }
            < Status 
                status = {status}
                setStatus = {setStatus}
                setSquares = {setSquares}
                count = {count}
            />
        </div>
    );
}