import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { LoadingRemoteAnimatedPrimaryComponent } from '@/presentation/components/loadings/primary/remote';

import { Color } from 'react-native-svg';
import { useTheme } from 'styled-components';

import MailIcon from '@/assets/images/mail.svg';
import CalendarIcon from '@/assets/images/calendar.svg';

import { Container } from './styles';

interface PrimaryFilledButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  background?: string;
  color?: Color;
  type: "Mail" | "Calendar"; 

}



export const PrimaryTouchableRectFilledButton:
  React.FC<PrimaryFilledButtonProps> =
  (
    {
        background
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
      <Container activeOpacity={0.7} {...rest} background={background} >
        {loading
          ? <LoadingRemoteAnimatedPrimaryComponent />
          : <Icon height={32} width={32} fill={color || theme.colors.typography.title.contrast} />
        }
      </Container>
    );
  }