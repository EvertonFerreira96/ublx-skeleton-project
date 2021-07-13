import React from 'react';
import { ScrollView, View } from 'react-native';

import { SignInProviderButton } from '@/presentation/components/actions/touchable-bordeless-button/sign-in';
import { PrimaryTouchableBordelessFilledButton } from '@/presentation/components/actions/touchable-bordeless-button/primary/fillled-button';
import { PrimaryTouchableBordelessOutlineButton } from '@/presentation/components/actions/touchable-bordeless-button/primary/outline-button';
import { PrimaryTouchableRectOutlineButton } from '@/presentation/components/actions/touchable-rect-buttons/primary/outline-button';
import { RequestOrderButtonGrouper } from '@/presentation/components/wrappers/button-groupers/request-order-button-grouper';
import { StackButtonGrouper } from '@/presentation/components/wrappers/button-groupers/stack-button-grouper';
import { TouchableInputSpinnerButton } from '@/presentation/components/actions/touchable-spinner-button';

export const Buttons: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={{
        paddingVertical: 64,
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

      </ScrollView>
  );
}