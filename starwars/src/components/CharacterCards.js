// import React from 'react';

// const CharacterCards = props => {
//     return(
//         <div className='character-card' key={props.index}>
//             <h2>Name: {props.name}</h2>
//             <p className='movies'>Present in {props.films} movies</p>
//             <p className='birth-year'>Birth Year: {props.birth_year}</p>
//             <p className='height'>Height: {props.height}</p>
//             <p className='mass'>Mass: {props.mass}</p>
//             <p className='vehicleNo'>Owns {props.vehicles} vehicles</p>
//             <p className='starships'>Owns {props.starships} starships</p>
//         </div>
//     )
// }

// export default CharacterCards;

import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';

const CharacterCards = props => {
  return (
    <div className='character-card' key={props.index}>
      <Card>
        <CardHeader>Name: {props.name}</CardHeader>
        <CardBody>
          <CardTitle>Birth Year: {props.birth_year}</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharacterCards;