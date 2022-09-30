import React, {useState } from 'react';
import Status from '../Status/Status';
import './Card.css'

const Card = (props) => {
    const {exerciseTimeHandler} = props;
    // const [times, setTimes] = useState([props.exercis])
   console.log(props.exercis)
    const {name, img, Description, age, time} = props.exercis || '';
    return (
        <div className='card-section'>
            <img src={img} alt="" />
            <div className='card-content'>
                <h3>{name}</h3>
                <p>{Description} </p>
                <p>For Age : {age}</p>
                <p>Time Required : {time}s</p>
                
            </div>
            {/* <Status exercis={props.exercis}></Status> */}
            <button onClick={()=>exerciseTimeHandler(props.exercis)} className='btn'>Add to list</button>
        </div>
    );
};

export default Card;