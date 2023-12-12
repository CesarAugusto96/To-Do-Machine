import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';

// Cuando el nombre de la función, empieza con letra
//mayúscula, se trata de un componente de React.

//La siguiente sintáxis corresponde a la extensión .jsx

/*
Cada fragmento de los componentes debe estar contenido dentro 
de la etiqueta <React.Fragment></React.Fragment> (Es necesario
importar: "import React from 'react';" ) o en su defecto, 
usando solo <> </> 
*/

//CUSTOM HOOK



function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
//Los componentes de React, se deben renderizar
//con los simbolos <></>
<>

{/*Añadiendo los componente de react al componente principal*/}

    <TodoCounter 
      completed={completedTodos} 
      total={totalTodos} 
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>
      {searchedTodos.map(todo => (
        <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
        />
      ))}
    </TodoList>
    
    <CreateTodoButton/>

</>

  );
}

export default App;
