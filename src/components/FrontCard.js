import React from 'react'
import mojito from '../resources/mojito.jpg'


const FrontCard = ({ handleClick, ingredienti, name }) => {
    console.log(ingredienti)
    console.log(name)
    return (
        <div className="card my-0 m-auto" onClick={handleClick}>
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={mojito} className="img-fluid rounded-start h-100" alt="..." />
                </div>
                <div className="col-md-7">
                    <div className="card-body h-100">
                        <h5 className="card-title">Mojito</h5>
                        <div className="container text-center ingredienti">
                            <div className="row p-2">
                                <div className="col-6 p-2">3 cl lime</div>
                                <div className="col-6 p-2">7 gr menta fresca</div>
                                <div className="col-6 p-2">4.5 cl rum</div>
                                <div className="col-6 p-2">6 cl acqua gassata o soda</div>
                                <div className="col-6 p-2">ghiaccio</div>
                                <div className="col-6 p-2">ghiaccio</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FrontCard