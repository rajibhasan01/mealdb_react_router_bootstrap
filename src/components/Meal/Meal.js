import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb } = props.meal;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>Name: {strMeal}</Card.Title>
                    <Card.Text>
                        Category: {strCategory}
                    </Card.Text>
                    <Card.Text>
                        Area: {strArea}
                    </Card.Text>
                    <Card.Text>
                        {strInstructions.slice(0, 200)}
                    </Card.Text>
                    <Link to={`/meal/${idMeal}`}>Visit Details</Link>
                    <br />
                    <br />
                    <Button variant="primary">Buy Now</Button>
                    <br />

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Meal;