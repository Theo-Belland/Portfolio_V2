import React, {createContext, useContext, useState, useEffect} from "react";

const AppContext = createContext();
export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulate fetching user data
        const fetchUser = async () => {
            const userData = await new Promise((resolve) =>
                setTimeout(() => resolve({name: "John Doe", loggedIn: true}), 1000)
            );
            setUser(userData);
        };
        fetchUser();
    }, []);

    return (
        <AppContext.Provider value={{user, setUser}}>
            {children}
        </AppContext.Provider>
    )
};

export const useApp = () => useContext(AppContext);