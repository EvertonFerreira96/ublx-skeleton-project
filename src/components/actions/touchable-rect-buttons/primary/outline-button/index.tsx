import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { LoadingRemoteAnimatedPrimaryComponent } from '@/components/loadings/primary/remote';


import { Color } from 'react-native-svg';
import { useTheme } from 'styled-components';

import CalendarIcon from '@/assets/images/calendar.svg';
import MailIcon from '@/assets/images/mail.svg';

import { Container } from './styles';

interface PrimaryFilledButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  border?: string;
  color?: Color;
  type: "Mail" | "Calendar"; 

}

export const PrimaryTouchableRectOutlineButton:
  React.FC<PrimaryFilledButtonProps> =
  (
    {
        border
      , color
      , loading
      , type
      , ...rest
    }
  ) => {

    const theme = useTheme();
    
    const icons = {
      Mail: MailIcon,
      Calendar: CalendarIcon
    }

    const Icon = icons[type]; 
    
    return (
      <Container activeOpacity={0.7} {...rest} border={border} >
        {loading
          ? <LoadingRemoteAnimatedPrimaryComponent />
          : <Icon height={32} width={32} fill={color || theme.colors.typography.contrast.dark} />
        }
      </Container>
    );
  }