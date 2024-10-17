import { createContext, useState } from "react";

export const HomeContext = createContext(null)

export default  ContextfoeHomeData = function({ children }) {
    const [restorents,setRestorents] = useState({})
    return(
        <HomeContext.Provider value={{restorents,setRestorents}}>
            {children}
        </HomeContext.Provider>
    )
}