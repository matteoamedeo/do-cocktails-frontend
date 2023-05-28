import { React, useEffect, useState } from 'react'
import CardSpinner from './CardSpinner'

const FrontCard = ({ handleClick, ingredienti, name, src }) => {

    const [ingredientiArr, setIngredientiArr] = useState();

    useEffect(() => {

        setIngredientiArr(ingredienti.split(';'))

    }, [ingredienti])


    return (
        <div className="card my-0 m-auto" onClick={handleClick}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={src} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body h-100">
                        <h5 className="card-title">{name}</h5>
                        <div className="container text-center ingredienti">
                            <div className="row p-2">

                                {
                                    ingredientiArr ?
                                        ingredientiArr.map(ingrediente => {
                                            return (
                                                <div className="col-6 p-2" key={ingrediente}>{ingrediente}</div>
                                            )
                                        })
                                        : <CardSpinner />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontCard