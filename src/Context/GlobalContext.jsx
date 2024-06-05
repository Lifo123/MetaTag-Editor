import { createContext } from "react"
import { useState } from "react";


export const GContext = createContext();

export default function GlobalContext({ children }) {
    //GlobalContext
    const [MetaTag, setMetaTag] = useState(null);


    return (
        <GContext.Provider value={{
            MetaTag, setMetaTag
        }}>
            {children}
        </GContext.Provider>
    )
}