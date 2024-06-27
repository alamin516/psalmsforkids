'use client'
import React, { useState } from 'react'
import '@/styles/preloader.css'

const Preloader = () => {
    const [display, setDisplay] = useState(false);

    setTimeout(()=> {
        setDisplay(true)
    }, 2000)


  return (
    <div className={`${display ? '' : 'preloader'}`}>
        <div className="spinner_wrap">
            <div className="spinner">

            </div>
        </div>
    </div>
  )
}

export default Preloader