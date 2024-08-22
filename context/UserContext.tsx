import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';
import { User } from '../models/user/User';

export type UserContextType = {
    user: User | null,
    setUser: (user: User | null) => void,
}

type UserContextProviderType = {
    children: React.ReactNode
}


export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderType) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return <UserContext.Provider value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
}