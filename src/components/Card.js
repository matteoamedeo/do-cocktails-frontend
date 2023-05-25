import React, { useState, useEffect } from 'react'
import mojito from '../resources/mojito.jpg'
import CocktailModal from './CocktailModal'
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const Card = ({ props }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    // console.log(props)

    const openModal = () => {
        setIsOpen(true)
    }

    const handleClick = (e) => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='my-3 card-container'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="h-100">
                <FrontCard handleClick={handleClick} name={props.name} ingredienti={props.ingredienti}>

                </FrontCard>

                <BackCard handleClick={handleClick} procedimento={props.procedimento}>

                </BackCard>
            </ReactCardFlip>
        </div>
    )
}

export default Card