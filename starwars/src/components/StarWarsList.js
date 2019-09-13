import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCards from '../components/CharacterCards'

export default function StarWarsList() {

    const [char, setChar] = useState([])


    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people`)
        .then(response => {
            const getChar = response.data.results;
            console.log('getChar', getChar)
            setChar (getChar);
        })
        .catch(error => {
            console.log('Uh oh, you got an error', error)
        })
    }, [])

    return(
        <div className='Container'>
            <div className='Character'>
                {char.map((item, index) => {
                    return (
                        <CharacterCards 
                            key={index}
                            name={item.name}
                            birth_year={item.birth_year}
                            height={item.height}
                            mass={item.mass}
                            vehicles={item.vehicles.length}
                            films={item.films.length}
                            starships={item.starships.length}
                        />
                    )
                })}
            </div>
        </div>
    )
}

