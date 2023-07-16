import { DarkContext } from '@/context/DarkContext'
import React, { useContext } from 'react'

const DarkModeToggel = () => {
  
  const {mode  , toggel} = useContext(DarkContext)

  return (
    <div className="DarkModeToggel" onClick={toggel} > 
        <div className="icon">🔆</div>
        <div className="icon">🌙</div>
        <div className="ball" style={mode === "light" ? {right:"5px"} : {left:"5px"}}></div>
    </div>
  )
}

export default DarkModeToggel