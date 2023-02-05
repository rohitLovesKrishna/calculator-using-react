import React from 'react'
import styles from './Button.module.css'
export default function Button(props) {
  return (
      <button onClick={props.onClik} className={`${styles.cstmBtn} ${props.className}`} type='button'>{props.children}</button>
  )
}
