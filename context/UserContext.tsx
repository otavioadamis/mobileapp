import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';
import { User } from '../models/user/User';

export type UserContextType = {
    user: User | null,
    setUser: (user: User | null) => void,
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>,
}

type UserContextProviderType = {
    children: React.ReactNode
}

const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return <UserContext.Provider value={{ 
        user, 
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        }}>
        {children}
    </UserContext.Provider>
}

export function useUserContext() {
    const userContext = useContext(UserContext);
    return userContext;
}