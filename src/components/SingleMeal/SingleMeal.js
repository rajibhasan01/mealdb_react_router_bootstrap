import React, { useEffect, useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const SingleMeal = () => {
    const { mealId } = useParams();
    const history = useHistory();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]));

    }, []);
    const { idMeal, strMeal, strInstructions, strMealThumb } = meal;

    const handleBack = () => {
        history.push('/meals');
    }

    return (
        <Col xs className="mx-auto">
            <Card className="border-0">
                <Col xs md="3" className=" mx-auto">
                    <Card.Img variant="top" src={strMealThumb} className=" mx-auto my-3" md="3" />
                </Col>
                <Card.Body>
                    <Card.Title>{strMeal} - {idMeal}</Card.Title>
                    <Card.Text> Instruction: <br />{strInstructions}
                    </Card.Text>
                    <Button variant="primary" onClick={handleBack}>Go Back</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleMeal;