import { useEffect, useRef } from "react";
function RenderHtmlUseRef(){
    let createColorRef=useRef('red');
    console.log(createColorRef.current);
    
useEffect(()=>{
console.log(createColorRef.current)
createColorRef.current.style.color="blue"
},[])

    return(
        <>
        <h1 ref={createColorRef}>Set the Color of the Div</h1>
        <h1 ref={createColorRef}>Set the Colorw of the Div</h1>
        </>
    )
}
export default RenderHtmlUseRef


/*

      ## Useref is completely different from the useState because i Use State we can change the variable by function
         inUsref wecan't change vairable because and not able to trigger anything.
      ## Useref returns the Object with property cuurent  useRef('red')  ---> {'current','red'},
      ## Binding the HTML use ref attribute 

      ## we cannot use sameuseref for the multiple element is we do so only the last element will
       in the current position

 */