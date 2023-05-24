import React from 'react'
import mojito from '../resources/mojito.jpg'


const BackCard = ({ handleClick }) => {

    return (
        <div className="card my-0 m-auto h-100" onClick={handleClick}>
            <div className="row g-0">
                {/* <div className="col-md-4">
                    <img src={mojito} className="img-fluid rounded-start h-100" alt="..." />
                </div> */}
                <div className="col-md-12 ">
                    <div className="card-body ">
                        <h5 className="card-title">Procedimento</h5>
                        <div className="container text-center procedimento">
                            In un cilindro graduato (jigger) misurate 4.5 cl (1 ½ oz) di rum e versateli in un tumbler alto. Ripetete l'operazione con 3 cl (1 oz) di succo di lime appena spremuto.
                            <br />
                            <br />
                            Unite 20 gr di zucchero bianco e 7 gr di menta fresca, mescolando successivamente il tutto con un cucchiaino a manico lungo.
                            <br />
                            <br />
                            Colmate il bicchiere con con ghiaccio spaccato grossolanamente o a cubetti e allungate fin quasi al bordo con 6 cl(2 oz) di soda water o acqua minerale gassata.
                            <br />
                            <br />
                            Date un'ulteriore mescolata e servite, decorando con 1 rametto di menta fresca e 2 cannucce lunghe
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackCard