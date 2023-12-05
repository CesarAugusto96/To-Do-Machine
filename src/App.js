import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



//ToDos que aparecen por default en el interfaz de la app.
const defaultToDos = [
  { text: "Ir al Super", completed: false},
  { text: "Reunión de trabajo", completed: true},
  { text: "Ir al nether", completed: true},
  { text: "Recoger al michi de la estética", completed: false},
];


// Cuando el nombre de la función, empieza con letra
//mayúscula, se trata de un componente de React.

//La siguiente sintáxis corresponde a la extensión .jsx

/*
Cada fragmento de los componentes debe estar contenido dentro 
de la etiqueta <React.Fragment></React.Fragment> (Es necesario
importar: "import React from 'react';" ) o en su defecto, 
usando solo <> </> 
*/

function App() {
  return (


//Los componentes de React, se deben renderizar
//con los simbolos <></>
<>

{/*Añadiendo los componente de react al componente principal*/}

    <TodoCounter completed={3} total={5} />
    <TodoSearch/>

    <TodoList>
      {defaultToDos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text}
        completed={todo.completed} 
        />
      ))}
    </TodoList>
    
    <CreateTodoButton/>

</>

  );
}

export default App;
