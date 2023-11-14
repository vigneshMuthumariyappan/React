

export default function Container({colorName, colorCode, isToggle}) {
    return (
        <>
            <div className="color-text" style={{color: isToggle ?'#000000': '#ffff'}}>
                <h3 >{colorName}</h3>     
                <h4 >{colorCode}</h4>
            </div>
        </>
    );
}