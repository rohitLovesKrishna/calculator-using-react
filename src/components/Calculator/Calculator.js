import React,{useState} from 'react'
import { AiOutlineClear, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsBackspace, BsDot } from "react-icons/bs";
import { FaPercent, FaDivide, FaEquals } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdScreenRotation } from "react-icons/md";
import styles from './Calculator.module.css'
import { Button} from '../'

export default function Calculator() {
const [value,setValue] = useState('0')
    return (
        <div className={styles.body__border}>
            <div className={styles.calculator__border}>
                <input type='text' value={value} className={styles.screenBox}/>
                <Button><AiOutlineClear/></Button>
                <Button><BsBackspace/></Button>
                <Button><FaPercent/></Button>
                <Button><FaDivide/></Button>
                <Button>7</Button>
                <Button>8</Button>
                <Button>9</Button>
                <Button><ImCross/></Button>
                <Button>4</Button>
                <Button>5</Button>
                <Button>6</Button>
                <Button><AiOutlineMinus/></Button>
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button><AiOutlinePlus/></Button>
                <Button><MdScreenRotation/></Button>
                <Button>0</Button>
                <Button><BsDot/></Button>
                <Button><FaEquals/></Button>
            </div>
        </div>
    )
}
