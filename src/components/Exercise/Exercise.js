import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Exercise = () => {
    const [exercise, setExercise] = useState([])
    useEffect(()=> {
        fetch('fitnessData.json')
            .then(res => res.json())
            .then(data => setExercise(data))
    } ,[])
    return (
        
        <div className='product'>
            {
                exercise.map(exercis => <Card 
                    key={exercis.id}
                    exercis = {exercis}
                    ></Card>)
            }
        </div>
    );
};


export default Exercise;