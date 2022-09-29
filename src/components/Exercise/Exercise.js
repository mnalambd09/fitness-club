import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './Exercise.css'

const Exercise = () => {
    const [exercise, setExercise] = useState([])
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