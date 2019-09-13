import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCards from '../components/CharacterCards'
import styled from 'styled-components'

const Container = styled.div`
    // border: 2px solid red;
    display: flex;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0);
    justify-content: center
`

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
        <Container>
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
        </Container>
    )
}

