import './TimeComponent.css'
import {useState, useEffect} from 'react'

const TimeComponent=()=>{

    let time=new Date();
    let initialState={am:"labels",pm:"labels",hrs:"labels"};
    let [is24Hour,setIs24Hour]=useState(true);
    let [currentTime,setCurrentTime]=useState([0,0,0,{am:"labels",pm:"labels",hrs:"labels"}]);

    useEffect(()=>{
        setTimeout(updateTime,1000);

    })
  

    function updateTime(){
        if(is24Hour){
            setCurrentTime([time.getHours(),time.getMinutes(),time.getSeconds(),{...initialState,hrs:"selection"}])
        }
        else{
            if(time.getHours()>12){
                setCurrentTime([(time.getHours()-12),time.getMinutes(),time.getSeconds(),{...initialState,pm:"selection"}])
            }
            else{
                setCurrentTime([time.getHours(),time.getMinutes(),time.getSeconds(),{...initialState,am:"selection"}])
            }
        }
        
        
    }
    
    return(

        <div className='timeComponent'>
            <div className='timeFormat'>
                <div className='clock'>
                    <p>{currentTime[0].toLocaleString('en-IN',{minimumIntegerDigits:2})}</p> <p> : </p>
                    <p>{currentTime[1].toLocaleString('en-IN',{minimumIntegerDigits:2})}</p> <p> : </p>
                    <p>{currentTime[2].toLocaleString('en-IN',{minimumIntegerDigits:2})}</p>
                </div>
                <div className='timeM'>
                    <h4 className={currentTime[3].am}>A.M</h4>
                    <h4 className={currentTime[3].pm}>P.M</h4>
                    <h4 className={currentTime[3].hrs}>hrs</h4>
                </div>
            </div>

            <div className='timeControl'>
                <p className='toggleInfo'>Switch to 12 hour clock</p>
                <input type="checkbox" id="switch" value={currentTime[3]} onChange={()=>setIs24Hour(!is24Hour)}/><label htmlFor="switch"></label>
            </div>
        </div>
    )
}

export default TimeComponent;