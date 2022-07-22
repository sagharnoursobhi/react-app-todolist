
export default function TodoList(props) {

    return(
        <div className="w-6/12 ml-auto mr-auto text-white p-3 rounded bg-violet-600 mt-5">
            <div className="flex justify-start align-center gap-3">
                <h3 className="text-xl font-semibold">Name of User</h3>
                <h5>{ props.name }</h5>
            </div>
            <div className="flex justify-start align-center gap-3">
                <h3 className="text-xl font-semibold">Age of User</h3>
                <h5>{ props.age }</h5>
            </div>
            <button className="bg-blue-600 p-3 mt-2 text-white font-medium rounded" type="button" onClick={()=>{props.deleteItem(props.index)}}>Delete</button>
        </div>
    )
}