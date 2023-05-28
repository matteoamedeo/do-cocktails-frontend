import { React, useState, useEffect } from 'react'
import Card from './Card'
import CardSpinner from './CardSpinner'
import SearchBar from './SearchBar'

const Content = ({ query }) => {

    const [data, setData] = useState();
    const [cocktailList, setCocktailList] = useState();
    const [fetchStatus, setFetchStatus] = useState()
    // const [cocktailFound, setCocktailFound] = useState(false);

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
            setCocktailList(data.filter(cocktail => cocktail.name.toUpperCase().includes(input.toUpperCase())))
        }

        console.log(cocktailList)

    }

    const showAll = () => {

        if (data) {
            setCocktailList(data);
        }

    }

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
                { }
            </div>
        </>

    )
}

export default Content