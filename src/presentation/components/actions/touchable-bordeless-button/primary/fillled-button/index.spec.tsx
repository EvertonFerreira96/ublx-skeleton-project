import React from 'react'; 

import { render } from '@testing-library/react-native';

import { ApplicationContextProviderManagement } from '@/presentation/hooks';

import { PrimaryTouchableBordelessFilledButton } from './'; 


import { ThemeProvider } from 'styled-components/native';

import { themes } from '@/presentation/styles/themes';

const Provider: React.FC = ({children}) => (
    <ThemeProvider  theme={themes.light}>
        {children}
    </ThemeProvider>
);

describe('Component - Actions - Button | PrimaryTouchableBordelessFilledButton',
    () => {
       it('should be render without params that changing in styled.', () => {
        const { getByTestId } = render(
            <PrimaryTouchableBordelessFilledButton 
                title="title"
            />
        , {
            wrapper: Provider
        });
        const PrimaryTouchableBordelessFilledButtonComponentTest = getByTestId('primary-touchable-bordeless-filled-button');
        expect(PrimaryTouchableBordelessFilledButtonComponentTest.props.style.backgroundColor).toEqual(themes.light.colors.primary.natural);
       });
    });
