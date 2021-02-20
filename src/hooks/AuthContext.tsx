import React, {createContext, useCallback, useContext, useState} from 'react';
import api from '../services/api';

interface AuthContextObject {
    user: object;
    signIn({mail, password}:SignInObject): Promise<void>;
    signOut(): Promise<void>;
}
interface SignInObject {
    mail: string;
    password: string;
}
interface AuthState {
    token: string;
    user: object;
}

const AuthContext = createContext<AuthContextObject>({} as AuthContextObject);

export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    
    return context;
}

export const AuthProvider: React.FC = ({children}) => {
    const [data,setData] = useState<AuthState>(() => {
        const token = localStorage.getItem("@Evnto:token");
        const user = localStorage.getItem("@Evnto:user");

        if(token && user) {
            return {token, user: JSON.parse(user)};
        }else{
            return {} as AuthState;
        }
    });

    const signIn = useCallback(async(data: SignInObject) => {
        const response = await api.post('sessions', data);
        const {token, user}=response.data;

        localStorage.setItem("@Evnto:token", token);
        localStorage.setItem("@Evnto:user", JSON.stringify(user));

        setData({token, user});
    }, []);

    const signOut = useCallback(async() => {
        
        localStorage.removeItem("@Evnto:token");
        localStorage.removeItem("@Evnto:user");

        setData({} as AuthState);
    }, []);

    return(
        <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    );
};
