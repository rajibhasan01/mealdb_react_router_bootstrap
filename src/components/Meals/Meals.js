import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [searchItem, setSearchItem] = useState('');
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals));

    }, [searchItem]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchItem(value);
    }

    return (
        <div>
            <InputGroup className="my-3 w-25 mx-auto">
                <FormControl
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
            </InputGroup>

            <Row xs={1} md={3} className="g-4">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    />)
                }
            </Row>
        </div>
    );
};

export default Meals;