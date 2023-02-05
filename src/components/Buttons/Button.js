import React from 'react'
import styles from './Button.module.css'
export default function Button(props) {
  return (
      <button onClick={props.onClick} id={props.id} value={props.value} className={`${styles.cstmBtn} ${props.className}`} type='button'>{props.children}</button>
  )
}
