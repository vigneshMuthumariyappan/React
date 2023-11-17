

export default function Container({state}) {
    return (
        <>
            <div className="color-text" id='main-div' style={{color: state.isToggle ?'#000000': '#ffff'}}>
                <h3 >{state.colorName}</h3>     
                <h4 >{state.colorCode}</h4>
            </div>
        </>
    );
}