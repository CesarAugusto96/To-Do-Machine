import React from 'react';
import './TodoSearch.css';

function TodoSearch({
    searchValue,
    setSearchValue,
}) {

//El Código JS a contitnuación es para crear un actualizador
//Del estado del valor "searchValue".

    return (
        <input 
        placeholder="Ir al Super" 
        className="TodoSearch"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
        }}
        />
    );
}

export { TodoSearch };