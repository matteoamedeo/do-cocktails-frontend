import { React, useEffect, useRef, useState, useReducer } from 'react'
import initialState from '../utils/CheckLogin'
import reducer from '../utils/reducer'

const SearchBar = ({ onQuery, searchCocktail, showAll }) => {

    const inputValue = useRef()
    const [ input, setInput ] = useState('');

    const [ state, dispatch ] = useReducer(reducer, initialState)
    console.log('is logged => ', state.isLogged);


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
        <nav className="navbar bg-body-color w-100 m-auto" style={{ maxWidth: '768px' }}>

            <div className="container-fluid w-100 flex-wrap d-flex justify-content-center">
                <input className="form-control" type="search" placeholder="Cerca" aria-label="Search" ref={inputValue} onInput={handleInput} />
                {
                    !state.isLogged ?
                        <>
                            <button className="btn btn-outline-success m-3 buttons" onClick={() => {
                                dispatch({ type: 'auth/doLogin' })
                            }}>
                                Login
                            </button>
                        </>
                        :
                        <>
                            <button className="btn btn-outline-success m-3 buttons">Aggiungi</button>
                            <button className="btn btn-outline-success m-3 buttons" onClick={() => {
                                dispatch({ type: 'auth/doLogout' })
                            }}>
                                Logout
                            </button>
                        </>
                }

                <button className="btn btn-outline-success m-3 buttons" onClick={handleSubmit}>Cerca</button>

            </div>
        </nav>
    )
}

export default SearchBar