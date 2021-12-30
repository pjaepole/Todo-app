import {useState, useEffect} from 'react'
import shia from '../2c57918def091358224c7a482826f30f-removebg-preview.png'
import 'bootstrap/dist/css/bootstrap.min.css';
function Clock(){
    const [clock, setClock]=useState('')
    useEffect(()=>{
        setInterval(()=>{
            setClock(new Date().toLocaleTimeString())
        },1000)
    },[])
    return(
        <div  >
            <div className='clockDiv'>
                <div>
                    <img className='shiaImg' src={shia} alt='just do it shia'></img>
                </div>
                <div>
                <h1 className='clockTime'>{clock}</h1>
                </div>
            </div>
            
        </div>
    )
}
export default Clock