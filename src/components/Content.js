import { React, useState, useEffect } from 'react'
import Card from './Card'
import CardSpinner from './CardSpinner'
import SearchBar from './SearchBar'
import {reducer, initialState} from '../utils/CheckLogin'

const Content = ({ query }) => {

    const [data, setData] = useState();
    const [cocktailList, setCocktailList] = useState();
    const [cocktailFound, setCocktailFound] = useState(false);

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:5000/api/cocktails/getAllCocktails", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                }
                )
            ).json();

            setData(data);
            setCocktailList(data);

        };

        dataFetch();

    }, []);


    const searchCocktail = (input) => {

        if (input) {
            setCocktailList(data.filter(cocktail => cocktail.name.toUpperCase().includes(input.toUpperCase()) || 
                                                    cocktail.ingredienti.toUpperCase().includes(input.toUpperCase())))
        }

    }

    const showAll = () => {

        if (data) {
            setCocktailList(data);
        }

    }

    /* IF NO RESULTS */
    useEffect(() => {

        if(cocktailList)
            setCocktailFound(cocktailList.length)

    }, [cocktailList]);


    return (
        <>
            <SearchBar searchCocktail={searchCocktail} showAll={showAll} />
            <div className="container-fluid">
                {
                    cocktailList ?
                        cocktailList.map(cocktail => {
                            return (
                                cocktail._id ?
                                    <Card key={cocktail._id} props={cocktail}></Card>
                                    : ''
                            )
                        })
                        : <CardSpinner />
                }
            </div>

            {/* RESULTS */}
            {
                !cocktailFound && cocktailList ? 

                <div className='cocktail-results m-5 text-light'>Nessun cocktail trovato</div>

                : ''
            }
        </>

    )
}

export default Content