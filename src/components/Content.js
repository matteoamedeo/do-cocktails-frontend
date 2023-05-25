import { React, useState, useEffect } from 'react'
import Card from './Card'
import CardSpinner from './CardSpinner'

const Content = () => {

    const [data, setData] = useState();

    useEffect(() => {
        // fetch data
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    "http://localhost:5000/api/cocktails/getAllCocktails"
                )
            ).json();

            // set state when the data received
            setData(data);
        };

        dataFetch();

    }, []);

    console.log(data)

    return (
        <div className="container-fluid">
            {/* <Card />
            <Card />
            <Card />
            <Card /> */}

            {
                data ?
                    data.map(cocktail => {
                        return (
                            <Card key={cocktail._id} props={cocktail}></Card>

                        )
                    })
                    : <CardSpinner />
            }
        </div>
    )
}

export default Content