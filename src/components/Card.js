import React, { useState } from 'react'
import mojito from '../resources/mojito.jpg'
import CocktailModal from './CocktailModal'
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const Card = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const openModal = () => {
        setIsOpen(true)
    }

    const handleClick = (e) => {
        // e.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='my-3 card-container'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="h-100">
                <FrontCard handleClick={handleClick}>

                </FrontCard>

                <BackCard handleClick={handleClick}>

                </BackCard>
            </ReactCardFlip>
        </div>
    )
}

export default Card