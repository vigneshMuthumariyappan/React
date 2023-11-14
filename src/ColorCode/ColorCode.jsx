import { useState } from "react";
import Container from "./Container";
import Forms from "./Forms";

export default function ColorCode() {

    const [colorName, setColorName] = useState('');
    const [colorCode, setColorCode] = useState('Empty value');
    const [isToggle, setIsToggle] = useState(true);
    
    return (<div className="color-code d-flex align-items-center justify-content-center container-all">
        <div className="w-auto h-auto">
            <Container 
                colorName={colorName}
                colorCode={colorCode}
                isToggle = {isToggle}
            />
            <Forms 
                setColorName = {setColorName}
                setColorCode = {setColorCode}
                colorName = {colorName}
                isToggle = {isToggle}
                setIsToggle = {setIsToggle}
            />
        </div>
    </div>);
}