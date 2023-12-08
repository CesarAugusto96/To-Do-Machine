import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';

// Cuando el nombre de la función, empieza con letra
//mayúscula, se trata de un componente de React.
function TodoItem(props) {
    return (
    <li className="TodoItem">
        <CompleteIcon />
        <p 
            className={`TodoItem-p  
            ${props.completed && "TodoItem-p--complete"}`}>
            {props.text}
        </p>
        <DeleteIcon />
    </li>
    );
}

export { TodoItem };