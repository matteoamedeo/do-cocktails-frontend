import { React, useState, useRef } from 'react'
import mojito from '../resources/mojito.jpg'
import { useEffect } from 'react';


const BackCard = ({ handleClick, procedimento }) => {

    // console.log(procedimento)
    const [procedimentoHtml, setProcedimentoHtml] = useState();
    const procedimentoRef = useRef()

    useEffect(() => {

        setProcedimentoHtml(procedimento.replaceAll('. ', '. <br/><br/>'))

        procedimentoRef.current.innerHTML = procedimentoHtml;

    }, [procedimento, procedimentoHtml])


    return (
        <div className="card my-0 m-auto h-100" onClick={handleClick}>
            <div className="row g-0">
                {/* <div className="col-md-4">
                    <img src={mojito} className="img-fluid rounded-start h-100" alt="..." />
                </div> */}
                <div className="col-md-12 ">
                    <div className="card-body ">
                        <h5 className="card-title">Procedimento</h5>
                        <div className="container text-center procedimento" ref={procedimentoRef}>

                            {procedimentoHtml}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackCard