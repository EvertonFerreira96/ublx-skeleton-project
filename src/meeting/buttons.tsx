import React from 'react';
import { View } from 'react-native';

import { SignInProviderButton } from '@/components/actions/touchable-bordeless-buttons/sign-in';
import { PrimaryTouchableBordelessFilledButton } from '@/components/actions/touchable-bordeless-buttons/primary/fillled-button';
import { PrimaryTouchableBordelessOutlineButton } from '@/components/actions/touchable-bordeless-buttons/primary/outline-button';
import { PrimaryTouchableRectOutlineButton } from '@/components/actions/touchable-rect-buttons/primary/outline-button';
import { RequestOrderButtonGrouper } from '@/components/wrappers/button-groupers/request-order-button-grouper';
import { StackButtonGrouper } from '@/components/wrappers/button-groupers/stack-button-grouper';
import { TouchableInputSpinnerButton } from '@/components/actions/touchable-spinner-button';

export const Buttons: React.FC = () => {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FDFDFD'
      }}>
        <RequestOrderButtonGrouper>
          <PrimaryTouchableBordelessOutlineButton title="Recusar" />
          <PrimaryTouchableBordelessFilledButton title="Aceitar" />
        </RequestOrderButtonGrouper>

        <RequestOrderButtonGrouper>
          <TouchableInputSpinnerButton />
          <PrimaryTouchableBordelessFilledButton title="Fazer Pedido" />
        </RequestOrderButtonGrouper>

        <RequestOrderButtonGrouper>
          <PrimaryTouchableRectOutlineButton type="Calendar" />
          <PrimaryTouchableBordelessFilledButton title="Buscar o melhor preço" disabled loading/>
        </RequestOrderButtonGrouper>

        <StackButtonGrouper>
          <PrimaryTouchableBordelessFilledButton title="Buscar o melhor preço" />
          <PrimaryTouchableBordelessOutlineButton title="Buscar o melhor preço" />
          <PrimaryTouchableBordelessOutlineButton title="Buscar o melhor preço"disabled loading/>
        </StackButtonGrouper>

        <StackButtonGrouper>
          <SignInProviderButton  title="Continuar com a Apple" type="Apple" mode="dark"/>
          <SignInProviderButton  title="Continuar com a Apple" type="Apple" mode="dark" disabled loading  />
          <SignInProviderButton  title="Entrar com o Google" type="Google" />
          <SignInProviderButton  title="Entrar com o E-mail" type="Mail" />
          <SignInProviderButton  title="Entrar com o Telefone" type="Phone" />
        </StackButtonGrouper>

      </View>
  );
}