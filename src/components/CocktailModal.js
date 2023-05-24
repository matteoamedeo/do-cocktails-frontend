import React from 'react'

const CocktailModal = ({ isOpen }) => {

    console.log(isOpen)
    return (
        <div style={{ display: isOpen ? 'block' : 'none' }}>
            modal
        </div>
    )
}

export default CocktailModal