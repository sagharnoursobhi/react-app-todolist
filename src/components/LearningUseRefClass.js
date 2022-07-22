import { createRef } from 'react';
import React from 'react';

class LearningUseRef extends React.Component {

    textInput = createRef();

    clickHandler = (params) => {
        this.textInput.current.focus();
    }

    render(){
        return(
            <div className='flex justify-center align-center mt-5'>
                <input type="text" ref={this.textInput}/>
                <button className='text-white' onClick={this.clickHandler}>Btn</button>
            </div>
        )
    }
}  

export default LearningUseRef;