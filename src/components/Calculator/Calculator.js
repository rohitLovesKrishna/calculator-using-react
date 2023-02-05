import React,{useState} from 'react'
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsBackspace, BsDot } from "react-icons/bs";
import { FaPercent, FaDivide, FaEquals } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdScreenRotation } from "react-icons/md";
import styles from './Calculator.module.css'
import { Button} from '../'

export default function Calculator(props) {
const [Value,setValue] = useState('0');


    const sumHandler = (value)=>{
         // eslint-disable-next-line
        setValue(eval(value))
    }
    const removeLast = ()=>{
        if (Value.length > 1 && Value !== '0') {
            setValue((prev) =>
                prev.substring(0, prev.length - 1)
            )}
            else if(Value.length > 0 && Value !== 0){
setValue('0');
            }
        }
    const val = (e)=>{
        if(Value === '0' && Value.length < 2){setValue('')}
        if(e.target.id === undefined){//Do Nothing
}else{setValue((prev) => prev += e.target.id)}
    }

    const screenMode = ()=>{
alert('Turn your mobile')
    }
    return (
   <div className = { styles.body__border }>
        <div className={styles.calculator__border}>
            <div className={styles.screenBox}>{Value}</div>
            <Button onClick={() => { setValue('0') }}><AiOutlineClear /></Button>
            <Button onClick={(s) => removeLast()}><BsBackspace /></Button>
            <Button id={'%'} onClick={(e) => val(e)}><FaPercent /></Button>
            <Button id={'/'} onClick={(e) => val(e)}><FaDivide /></Button>
            <Button id={7} onClick={(e) => val(e)}>7</Button>
            <Button id={8} onClick={(e) => val(e)}>8</Button>
            <Button id={9} onClick={(e) => val(e)}>9</Button>
            <Button id={'*'} onClick={(e) => val(e)}><ImCross /></Button>
            <Button id={4} onClick={(e) => val(e)}>4</Button>
            <Button id={5} onClick={(e) => val(e)}>5</Button>
            <Button id={6} onClick={(e) => val(e)}>6</Button>
            <Button id={'-'} onClick={(e) => val(e)}><AiOutlineMinus /></Button>
            <Button id={1} onClick={(e) => val(e)}>1</Button>
            <Button id={2} onClick={(e) => val(e)}>2</Button>
            <Button id={3} onClick={(e) => val(e)}>3</Button>
            <Button id={'+'} onClick={(e) => val(e)}><AiOutlinePlus /></Button>
            <Button onClick={() => screenMode()}><MdScreenRotation /></Button>
            <Button id={0} onClick={(e) => val(e)}>0</Button>
            <Button id={'.'} onClick={(e) => val(e)}><BsDot /></Button>
            <Button onClick={() => sumHandler(Value)}><FaEquals /></Button>
        </div>
        </div>
        )
}
