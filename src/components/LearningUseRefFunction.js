import { useRef, useEffect } from "react";


export default function LearningUseRefnction() {
    const textInput = useRef();
    const count = useRef(0);

    useEffect(()=>{
        count.current = count.current + 1;
    })

    function clickHandler() {
        textInput.current.focus();
        console.log(textInput)
    }
    return(
        <div className='flex justify-center align-center mt-5'>
            <input type="text" ref={textInput}/>
            <button className='text-white' onClick={clickHandler}>Btn</button>
            <p className="text-white ml-6">{count.current}</p>
        </div>
    )
}