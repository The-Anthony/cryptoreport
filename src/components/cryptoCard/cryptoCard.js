import React from 'react';

import './cryptoCard.css';

const CryptoCard = (props) => {
    return(
        <div className='card'>
            <p className='index'>{props.number +1}</p>
            <h1 className='symbol'>{props.symbol}</h1>
            <div className="firstData">

                <h3 className='marketCap'>
                    {/* Formatto il numero grezzo per essere più gradevole da leggere */
                    // Nove zeri per i miliardi
                    Math.abs(Number(props.marketCap)) >= 1.0e+9

                    ? (Math.abs(Number(props.marketCap)) / 1.0e+9).toFixed(2) + " Mld"
                    // Sei zeri per i milioni
                    : Math.abs(Number(props.marketCap)) >= 1.0e+6

                    ? (Math.abs(Number(props.marketCap)) / 1.0e+6).toFixed(2) + " Mln"
                    // Tre zeri per le migliaia
                    : Math.abs(Number(props.marketCap)) >= 1.0e+3

                    ? (Math.abs(Number(props.marketCap)) / 1.0e+3).toFixed(2)+ " K"

                    :( Math.abs(Number(props.marketCap))).toFixed(2)}
                </h3>

                <h3 className='price'>$
                        
                    {/* Formatto il numero grezzo per essere più gradevole da leggere */
                    // Nove zeri per i miliardi
                    Math.abs(Number(props.price)) >= 1.0e+9

                    ? (Math.abs(Number(props.price)) / 1.0e+9).toFixed(2) + " Mld"
                    // Sei zeri per i milioni
                    : Math.abs(Number(props.price)) >= 1.0e+6

                    ? (Math.abs(Number(props.price)) / 1.0e+6).toFixed(2) + " Mln"
                    // Tre zeri per le migliaia
                    : Math.abs(Number(props.price)) >= 1.0e+3

                    ? (Math.abs(Number(props.price)) / 1.0e+3).toFixed(2)+ " K"

                    :( Math.abs(Number(props.price))).toFixed(2)}

                </h3>

            </div>
            
            <div className="secondData">

                <h3 className='volume24h'>

                    {/* Formatto il numero grezzo per essere più gradevole da leggere */
                    // Nove zeri per i miliardi
                    Math.abs(Number(props.volume24h)) >= 1.0e+9

                    ? (Math.abs(Number(props.volume24h)) / 1.0e+9).toFixed(2) + " Mld"
                    // Sei zeri per i milioni
                    : Math.abs(Number(props.volume24h)) >= 1.0e+6

                    ? (Math.abs(Number(props.volume24h)) / 1.0e+6).toFixed(2) + " Mln"
                    // Tre zeri per le migliaia
                    : Math.abs(Number(props.volume24h)) >= 1.0e+3

                    ? (Math.abs(Number(props.volume24h)) / 1.0e+3).toFixed(2)+ " K"

                    :( Math.abs(Number(props.volume24h))).toFixed(2)}

                </h3>

                {props.percentChange > 0 ? <h3 className='percentChangePlus'>{props.percentChange.toFixed(2)}%</h3> 
                : <h3 className='percentChangeLess'>{props.percentChange.toFixed(2)}%</h3>
                }
            </div>
            
        </div>
    )
}

export default CryptoCard;