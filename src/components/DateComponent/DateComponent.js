import './DateComponent.css'
import {useState,useEffect} from 'react'

const DateComponent=()=>{

    let [currentDate,setCurrentDate]=useState([0,0,0]);
    
    useEffect(()=>{
        let time=new Date();
        setCurrentDate([time.getDate(),time.getMonth(),time.getFullYear()])
    },[])    

    return(
        <div className='dateComponent'>
            <div className='date'>
                    <p className='time'>{currentDate[0].toLocaleString('en-IN',{minimumIntegerDigits:2})}</p> <p> : </p>
                    <p className='time'>{currentDate[1].toLocaleString('en-IN',{minimumIntegerDigits:2})}</p> <p> : </p>
                    <p className='time'>{currentDate[2]}</p>
            </div>              
        </div>
    )
}

export default DateComponent;