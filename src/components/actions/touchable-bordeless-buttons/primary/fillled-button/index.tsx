import { LoadingRemoteAnimatedPrimaryComponent } from '@/components/loadings/primary/remote';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface PrimaryFilledButtonProps extends TouchableOpacityProps{
    title: string;
    loading?: boolean;
}

export const PrimaryTouchableBordelessFilledButton: React.FC<PrimaryFilledButtonProps> = ({ title, loading, ...rest }) => {
  return (
      <Container activeOpacity={0.7} {...rest}>
          { loading 
            ? <LoadingRemoteAnimatedPrimaryComponent /> 
            : <Title>
                {title}
              </Title>
        }
      </Container>
  );
}