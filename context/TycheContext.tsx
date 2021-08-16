import { useState, createContext } from "react";

export const TycheContext = createContext(null)

export const TycheProvider = props => {
    const [darkMode, setDarkMode] = useState(true)



    return (
        <TycheContext.Provider value={[darkMode, setDarkMode]} >
            {props.children}
        </TycheContext.Provider>
    )
}