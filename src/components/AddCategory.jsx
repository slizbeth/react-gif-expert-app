import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
        <p>👇 Introduce un tema (mínimo 2 caracteres) y busca tu gif favorito 👇</p>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
        </>
    )
}