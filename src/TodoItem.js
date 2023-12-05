import './TodoItem.css';

// Cuando el nombre de la función, empieza con letra
//mayúscula, se trata de un componente de React.
function TodoItem(props) {
    return (
    <li className="TodoItem">
        <span className= "Icon Icon-check Icon-check-active">
            V
        </span>
        <p className="TodoItem-p TodoItem-p--complete">
            {props.text}
        </p>
        <span className="Icon Icon-delete">
            X
        </span>
    </li>
    );
}

export { TodoItem };