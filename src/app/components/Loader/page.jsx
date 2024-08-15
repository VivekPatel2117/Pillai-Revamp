import React from 'react'
import style from "./loader.module.css"

export default function page() {
  return (
    <div className='h-screen overflow-hidden'>
      <div className={style.skeleton}></div>
     <div className={style.skeleton}></div>
     </div>
  )
}
