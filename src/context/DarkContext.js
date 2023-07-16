"use client"
const { createContext, useState } = require("react");


export const DarkContext = createContext()

export const Provider = ({children})=>{ 



    const [mode , setmode] = useState("dark")
    const toggel = ()=>{ setmode(prev => prev === "dark" ? "light" : "dark")}

    return <DarkContext.Provider value={{mode , toggel}} >
        <main className={`theme ${mode}`} >{children}</main>
    </DarkContext.Provider>
}