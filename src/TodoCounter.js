import  './TodoCounter.css';

/*
El elemento contenido dentro del componente TodoCounter()
Se llama propiedad y se abrevia props. 
O en su defecto, ya que las propiedades son un Objeto de 
JavaScript, puedes desempaquetarlo con {} dentro de los
paréntesis del componente.
*/
function TodoCounter({total, completed}) {
    return (
        <h1 className ="TodoCounter">
            Haz completado <span>{completed}</span> 
            de <span>{total}</span> To-Do´s
        </h1>
    );
}

export { TodoCounter };