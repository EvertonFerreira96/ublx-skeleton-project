import { EntityProfileModel } from '@/data/entities';
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface AuthenticationContextData {
    profile: EntityProfileModel | undefined;
    handleProfileSelected(profile: EntityProfileModel | undefined): void; 
}

interface AuthenticationProviderProps{ 
    children: ReactNode
}


const AuthenticationContext = createContext<AuthenticationContextData>({} as AuthenticationContextData); 

function useAuthenticationContext(): AuthenticationContextData{
    return useContext(AuthenticationContext); 
}

function AuthenticationProvider({children}: AuthenticationProviderProps){


  const [profile, setProfile] = useState<EntityProfileModel | undefined>(undefined);

  function handleProfileSelected(profile: EntityProfileModel | undefined){
    setProfile(profile);
    return;
  }

    return(
        <AuthenticationContext.Provider
            value={{
                profile, 
                handleProfileSelected
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}

export {
    useAuthenticationContext,
    AuthenticationProvider
}