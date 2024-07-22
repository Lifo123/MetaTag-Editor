import { createContext, useEffect } from "react"
import { useState } from "react";

export const GContext = createContext();

const MetagData = {
    OG: {
        SiteName: '',
        Tittle: '',
        URL: '',
        Description: '',
        ImgURL: ''
    },
    Twitter: {
        SiteName: '',
        Tittle: '',
        URL: '',
        Description: '',
        ImgURL: ''
    }
}

export default function GlobalContext({ children }) {
    //GlobalContext
    const [MetaTag, setMetaTags] = useState(MetagData);

    //Functions
    const ManageData = (section, key, value) => {
        setMetaTags(prevMetaTags => ({
            ...prevMetaTags,
            [section]: {
                ...prevMetaTags[section],
                [key]: value
            }
        }));
    }

    return (
        <GContext.Provider value={{
            MetaTag, ManageData
        }}>
            {children}
        </GContext.Provider>
    )
}