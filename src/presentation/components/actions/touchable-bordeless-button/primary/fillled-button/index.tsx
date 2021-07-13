import { LoadingRemoteAnimatedPrimaryComponent } from '@/presentation/components/loadings/primary/remote';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface PrimaryFilledButtonProps extends TouchableOpacityProps{
    title: string;
    loading?: boolean;
}

export const PrimaryTouchableBordelessFilledButton: React.FC<PrimaryFilledButtonProps> = ({ title, loading, onPress, ...rest }) => {
  
  return (
      <Container testID="primary-touchable-bordelessfilled-button" activeOpacity={0.7} onPress={onPress} {...rest} >
          { loading 
            ? <LoadingRemoteAnimatedPrimaryComponent /> 
            : <Title>
                {title}
              </Title>
        }
      </Container>
  );
}