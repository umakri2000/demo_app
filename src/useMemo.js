import { useEffect, useMemo, useState } from "react";
import GuessNumber from "./guessNumber";

function UseMemoExample() {
    let [name, changeState] = useState(1);
    let [positon, moveState] = useState(false);
    let [isGenerated, generateOtp] = useState(false);

    let checkRenderFN = () => {
        console.log('fn call works');
        let getThePosition = document.getElementsByClassName('positiondiv');
        Array.from(getThePosition).forEach(element => {
            let x_ycordinates = element.getBoundingClientRect();
            element.style.left = x_ycordinates.left + 10 + 'px';
            moveState(false);
        });
    };
    // generateOtp=()=>{
    //     return true
    // }
    let avoidRender = useMemo(() => checkRenderFN(), [positon]);
    // useEffect(() => {
    //     if (positon) {
        
    //         avoidRender();
    //     }
    // }, [positon, avoidRender]);

    return (
        <>
            <div className="positiondiv absolute">
                <h1>{name}</h1>
                
                <button className="button rmar-10" onClick={() => generateOtp(true)}>Generate OTP</button>
                <button className="button rmar-10" onClick={() => changeState(name + 1)}>Click Me</button>
                <button className="button" onClick={() => moveState(true)}>Change Position</button>
                <GuessNumber isgenerate={isGenerated} falseCallback={() => generateOtp(false)} />
                
            </div>
        </>
    );
}

export default UseMemoExample;
