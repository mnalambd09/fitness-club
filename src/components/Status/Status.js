import React, { useState } from 'react';
import './Status.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import noor from "../Status/noor.jpg";

const Status = (props) => {
    console.log(props)
    const [seconds, setSeconds] = useState([])


    const addBreakTime10 = () => {
        const display = document.getElementById('displaySeconds');
        const disValue = document.getElementById('seconds10').innerText
        display.innerText = disValue;
    }
    const addBreakTime20 = () => {
        const display = document.getElementById('displaySeconds');
        const disValue = document.getElementById('seconds20').innerText
        display.innerText = disValue;
    }
    const addBreakTime30 = () => {
        const display = document.getElementById('displaySeconds');
        const disValue = document.getElementById('seconds30').innerText
        display.innerText = disValue;
    }
    const addBreakTime40 = () => {
        const display = document.getElementById('displaySeconds');
        const disValue = document.getElementById('seconds40').innerText
        display.innerText = disValue;
    }

    return (
        <div>
            <div className='img-section'>
                <div className='my-img'>
                    <img src={noor} alt="" />
                </div>
                <div>
                    <h4 className='name'>Noor Alam</h4>
                    <p className='location'><FontAwesomeIcon icon={faLocationPin} />Bangladesh</p>
                </div>
            </div>
            <div className='body-status'>
                <div>
                    <h3>75<small>kg</small></h3>
                    <p className='headding'>Weight</p>
                </div>
                <div>
                    <h3>6.5</h3>
                    <p className='headding'>Height</p>
                </div>
                <div>
                    <h3>25<small>yrs</small></h3>
                    <p  className='headding'>Age</p>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className='break-section'>
                <div className='time' >
                    {/* <p className='seconds'>10<small>s</small></p> */}
                    <button onClick={()=>addBreakTime10()}  id='seconds10'  className='seconds'>10s</button>
                </div>
                <div >
                    {/* <p className='seconds'>20<small>s</small></p> */}
                    <button onClick={()=>addBreakTime20()} id='seconds20' className='seconds'>20s</button>
                </div>
                <div >
                    {/* <p className='seconds'>30<small>s</small></p> */}
                    <button onClick={()=>addBreakTime30()} id='seconds30' className='seconds'>30s</button>
                </div>
                <div >
                    {/* <p className='seconds'>40<small>s</small></p> */}
                    <button onClick={()=>addBreakTime40()} id='seconds40' className='seconds'>40s</button>
                </div>
            </div>
            <h3>Exercise Details</h3>
            <div className='exercise-time'>
                <div>
                    <h4>Exercise Time</h4>
                </div>
                <div className='exercise-seconds'>
                    <p>200 <small>seconds</small></p>
                </div>
            </div>
            <br />
            <div className='exercise-time'>
                <div>
                    <h4>Break Time</h4>
                </div>
                <div className='exercise-seconds'>
                    <p id='displaySeconds'>15 <small>seconds</small></p>
                </div>
            </div>

            <div>
                <button className='btn-activity'>Activity Completed</button>
            </div>
            
        </div>
    );
};

export default Status;