import React, {useState, useContext} from 'react'

const AppContext = React.createContext(); 






export const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [ loading, setLoading ] = useState(true);

    const timeOutID = () => setTimeout(() => setLoading(false), 1000);


    
    
        
    



    const openSidebar = () => {
        setIsSidebarOpen(true)
    }


    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }


  

    return (
        <AppContext.Provider value={{isSidebarOpen, closeSidebar, openSidebar, loading, setLoading, timeOutID,  }}>
            {children}

        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}


