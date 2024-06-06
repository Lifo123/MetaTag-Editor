import { createContext, useEffect } from "react"
import { useState } from "react";

function getInitialMetaTags() {
    const localStorageData = JSON.parse(localStorage.getItem('MetaTagEdit')) || {};
    return {
        title: localStorageData.title || document.head.querySelector('meta[property="og:title"]')?.content || '',
        description: localStorageData.description || document.head.querySelector('meta[property="og:description"]')?.content || '',
        url: localStorageData.url || document.head.querySelector('meta[property="og:url"]')?.content || '',
        image: localStorageData.image || document.head.querySelector('meta[property="og:image"]')?.content || '',
        siteName: localStorageData.siteName || document.head.querySelector('meta[property="og:site_name"]')?.content || ''
    };
}

export const GContext = createContext();

export default function GlobalContext({ children }) {
    //GlobalContext
    const [MetaTag, setMetaTags] = useState(getInitialMetaTags());

    useEffect(() => {
        localStorage.setItem('MetaTagEdit', JSON.stringify(MetaTag))
    }, [MetaTag])

    return (
        <GContext.Provider value={{
            MetaTag, setMetaTags,
        }}>
            {children}
        </GContext.Provider>
    )
}