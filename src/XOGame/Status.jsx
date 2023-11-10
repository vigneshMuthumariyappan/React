export default function Status({ status, setStatus, setSquares}) {
    
    const statusbar = (value) => {
        if (value === 'start')
            setStatus('play')
        if (value === 'Draw') {
            setSquares(Array(9).fill(null));
            setStatus('play')
        }
    }
    return (
        <>
            {status === "start" &&
                <div>
                    Game <button onClick={() => statusbar(status)}>{status}</button>
                </div>
            }

            {status.length === 1 &&
                <div>
                    <h3>Player {status} is winner</h3>
                    <button onClick={()=>statusbar('Draw')}>Restart</button>
                </div>
            }
            {status === "Draw" &&
                <div>
                    <h3>{status} <button onClick={() => statusbar(status)}>Restart</button></h3>
                </div>
            }
        </>
    );
}