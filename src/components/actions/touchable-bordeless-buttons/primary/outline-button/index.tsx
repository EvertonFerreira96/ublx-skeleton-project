import { LoadingRemoteAnimatedPrimaryComponent } from '@/components/loadings/primary/remote';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface PrimaryOutlineButtonProps extends TouchableOpacityProps{
    title: string;
    loading?: boolean;
}

export const PrimaryTouchableBordelessOutlineButton: React.FC<PrimaryOutlineButtonProps> = ({ title, loading, ...rest }) => {
  return (
      <Container activeOpacity={0.7} {...rest}>
          { loading 
            ? <LoadingRemoteAnimatedPrimaryComponent mode="dark" /> 
            : <Title>
                {title}
              </Title>
        }
      </Container>
  );
}
