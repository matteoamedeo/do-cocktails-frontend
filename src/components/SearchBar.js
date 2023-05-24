import React from 'react'

const SearchBar = () => {
    return (
        <nav className="navbar bg-body-tertiary w-100" style={{ maxWidth: '768px' }}>
            <div className="container-fluid w-100">
                <form className="d-flex w-100" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

export default SearchBar