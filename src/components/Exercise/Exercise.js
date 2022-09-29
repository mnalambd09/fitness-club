import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Exercise.css'

const Exercise = () => {
    const [exercise, setExercise] = useState([])
    const [seconds, setSeconds] = useState([])
    const addToCartHandler = (exercis) => {
        // console.log(exercis)
        // cart.push(product);
        // const newCart = [...seconds]
        setSeconds(exercis);
    }
    useEffect(()=> {
        fetch('fitnessData.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    } ,[])
    return (
        <div className='title'>
            <div className="product">
            {
                exercise.map(exercis => <Card 
                    key={exercis.id}
                    exercis = {exercis}
                    addToCartHandler = {()=>addToCartHandler(exercis)}
                    ></Card>)
            }
        </div>
            <div className='statusBar'>
                <h1></h1>
            </div>
        </div>
        
    );
};


export default Exercise;