import { createContext } from "react"
import { useState } from "react";


export const GContext = createContext();

export default function GlobalContext({ children }) {
    //GlobalContext
    const [MetaTag, setMetaTag] = useState(null);
    const [CodeWidth, setCodeWidth] = useState(60);

    return (
        <GContext.Provider value={{
            MetaTag, setMetaTag,
            CodeWidth, setCodeWidth
        }}>
            {children}
        </GContext.Provider>
    )
}