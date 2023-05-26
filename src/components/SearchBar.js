import { React, useRef, useState } from 'react'

const SearchBar = ({ onQuery, searchCocktail, showAll }) => {

    const inputValue = useRef()
    const [input, setInput] = useState('');


    const handleInput = (e) => {
        setInput(e.target.value)

        if (e.target.value === '') {
            showAll();
        }
    }

    const handleSubmit = () => {
        searchCocktail(input)
    }

    return (
        <nav className="navbar bg-body-tertiary w-100 m-auto" style={{ maxWidth: '768px' }}>
            <div className="container-fluid w-100 flex-nowrap">
                {/* <form className="d-flex w-100" role="search" > */}
                <input className="form-control me-2" type="search" placeholder="Cerca" aria-label="Search" ref={inputValue} onInput={handleInput} />
                <button className="btn btn-outline-success" onClick={handleSubmit}>Cerca</button>
                {/* </form> */}
            </div>
        </nav>
    )
}

export default SearchBar