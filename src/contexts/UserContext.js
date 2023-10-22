import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [ userData, setUserData ] = useState({});

    const setUser = (data) => {

        setUserData(data);
    }

    return(
        <UserContext.Provider value={{userData, setUser}}>
            {children}
        </UserContext.Provider>
    );
}
