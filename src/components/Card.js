import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';
import FrontCard from './FrontCard';
import BackCard from './BackCard';

const Card = ({ props }) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='my-3 card-container'>

            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" className="h-100">
                <FrontCard handleClick={handleClick} name={props.name} ingredienti={props.ingredienti} src={props.src}>

                </FrontCard>

                <BackCard handleClick={handleClick} procedimento={props.procedimento}>

                </BackCard>
            </ReactCardFlip>

        </div>
    )
}

export default Card