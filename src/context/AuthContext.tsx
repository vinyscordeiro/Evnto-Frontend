import React, {createContext, useCallback} from 'react';
import api from '../services/api';

interface AuthContextObject {
    name: string;
    signIn({mail, password}:SignInObject): Promise<void>;
}
interface SignInObject {
    mail: string;
    password: string;
}

export const AuthContext = createContext<AuthContextObject>({} as AuthContextObject);

export const AuthProvider: React.FC = ({children}) => {

    const signIn = useCallback(async(data: SignInObject) => {
        const response = await api.post('sessions', data);
    }, []);

    return(
        <AuthContext.Provider value={{name:'Vinicius', signIn}}>
            {children}
        </AuthContext.Provider>
    );
};
