import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { AuthenticationProvider } from './authentications'; 
import { ThemeProvider } from './themes';

interface ApplicationContextProviderManagementProps{ 
    children: ReactNode
}


export const ApplicationContextProviderManagement: React.FC<ApplicationContextProviderManagementProps> = ({ 
    children
}) => {
  return (
      <ThemeProvider>
        <AuthenticationProvider>
            {children}
        </AuthenticationProvider>
      </ThemeProvider>
  )
}

