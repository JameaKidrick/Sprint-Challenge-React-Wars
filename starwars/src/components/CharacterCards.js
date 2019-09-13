import React from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';
import styled from 'styled-components'

const Contain = styled.div`
    width: 25%;
    margin: 5px;
    border: 2px solid black;
    border-radius: 10px;
`

const CharacterCards = props => {
    return (
        <Contain>
            <Card className='character-card' key={props.index}>
                <CardHeader tag="h4">{props.name}</CardHeader>
                <CardBody color="dark">
                    <CardTitle>Birth Year: {props.birth_year}</CardTitle>
                    <CardText>Present in {props.films} movie(s)</CardText>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Mass: {props.mass}</CardText>
                    <CardText>Owns {props.vehicles} vehicle(s)</CardText>
                    <CardText>Owns {props.starships} starship(s)</CardText>
                </CardBody>
            </Card>
        </Contain>
    );
};

export default CharacterCards;