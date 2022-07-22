import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from 'react';
import ErrorModal from "../UI/ErrorModal";

//There are two important usages of useRef hook: accessing the dom element and keeping a mutable variable

export default function AddUser(props) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (name.trim().length === 0 || age.trim().length === 0 ) {//trim removes white spaces from both sides of a string
            setError({
                title:'Invalid Input',
                message:'Please enter a valid name and age (none-empty-values).'
            })
            return; 
        }

        if(+age < 1) {
            setError({
                title: 'Invalid age',
                message:'Please a valid age (>0).'
            })
            return;
        }
        
        props.addNew(name,age);
        setAge('');
        setName('');
    }

    const changeHandlerAge = (e) => {
        setAge(e.target.value);
    }

    const changeHandlerName = (e) => {
        setName(e.target.value);
    }

    const onConfirm = () => {
        setError(null);
    }

    //in order to close the modal we should return both title and message to their default values so modal
    //window will get disappeared.(undefined)
    return(
        <div>
            <Card>
                <form onSubmit={onSubmitHandler} className="w-4/12 h-4/12 p-3 bg-violet-300 rounded ml-auto mr-auto">
                    <div className="flex justify-center align-center flex-col gap-2">
                        <label htmlFor="username" className="mr-1 text-left">Add Username</label>
                        <input onChange={changeHandlerName} type="text" id="username" value={name} className="border-solid border-2 border-indigo-600 rounded "/>
                    </div>
                    <div className="flex justify-center align-center flex-col gap-2 mt-3">
                        <label htmlFor="age" className=" mr-1">Add Age</label>
                        <input onChange={changeHandlerAge} type="number" value={age} id="age" className="border-solid border-2 border-indigo-600 rounded "/>
                    </div>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
            {error && <ErrorModal onConfirm={onConfirm} title={error.title} message={error.message}/>}
        </div>
    )
}