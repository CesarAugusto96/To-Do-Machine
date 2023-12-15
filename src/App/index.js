import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';


// Cuando el nombre de la función, empieza con letra
//mayúscula, se trata de un componente de React.

//La siguiente sintáxis corresponde a la extensión .jsx

/*
Cada fragmento de los componentes debe estar contenido dentro 
de la etiqueta <React.Fragment></React.Fragment> (Es necesario
importar: "import React from 'react';" ) o en su defecto, 
usando solo <> </> 
*/
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');



function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
