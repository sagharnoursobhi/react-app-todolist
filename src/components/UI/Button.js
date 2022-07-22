
export default function Button(props) {
    return(
        <button onClick={props.onClickHandler} type={props.type} className="bg-blue-400 mt-3 font-medium rounded pt-1 pb-1 pl-3 pr-3 text-white">
            { props.children }
        </button>
    )
}