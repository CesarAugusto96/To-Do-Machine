import './TodoItem.css';

// Cuando el nombre de la función, empieza con letra
//mayúscula, se trata de un componente de React.
function TodoItem(props) {
    return (
    <li className="TodoItem">
        <span 
            className={`Icon Icon-check 
            ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}
        > {/*La sentencia se cumplirá si el el estado es "completed" (&&)*/}
            V
        </span>
        <p 
            className={`TodoItem-p  
            ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={props.onComplete}
        >
            X
        </span>
    </li>
    );
}

export { TodoItem };