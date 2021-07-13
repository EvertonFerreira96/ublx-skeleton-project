import React, { MutableRefObject, RefObject, useEffect, useRef, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
import { Keyboard, TouchableWithoutFeedback, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

import { HeaderBackComponent } from '@/presentation/components/headers/back';
import { PrimaryTouchableBordelessFilledButton } from '@/presentation/components/actions/touchable-bordeless-button/primary/fillled-button';
import { PrimaryTouchableBordelessOutlineButton } from '@/presentation/components/actions/touchable-bordeless-button/primary/outline-button';

import { Container
       , Header
       , Content
       , Description
       , ButtonContainer
       , OneTimePasswordComponent
       , OneTimePasswordContent
       , OneTimePasswordTextInput
       , OneTimePasswordButtonTextInput } from './styles';

export interface IOneTimePasswordNavigationParamsProps {
  oneTimePassword: {
    account: string;
    sendBy: 'mail' | 'phone';
  }
} 

export const OneTimePassword: React.FC = () => {
  const { params } = useRoute(); 
  const { navigate } = useNavigation();
  
  const { oneTimePassword: { account, sendBy } } = params as IOneTimePasswordNavigationParamsProps; 

  let clockCall: NodeJS.Timeout;
  const defaultCountdown = 5;
  const lengthInput = 4;

  
  const [countdown, setCountdown] = useState(defaultCountdown)
  
  const [enableConfirmOneTimePasswordButton, setEnableConfirmOneTimePasswordButton] = useState(false); 
  const [enableResendOneTimePasswordButton, setEnableResendOneTimePasswordButton] = useState(false); 
  
  const countdownFormatTime = (new Date(new Date().setHours(0, 0, countdown)).toISOString().substr(14, 5))
  const oneTimePasswordTextInputRefs: MutableRefObject<RefObject<TextInput>[]> = useRef(Array(lengthInput).fill(null).map(() => React.createRef<TextInput>())); 
  const oneTimePasswordTextInputValues = Array(lengthInput).fill(null).map(() => useState(""));
  


  function handleResendOneTimePassword() {
    if (enableResendOneTimePasswordButton) {
      setCountdown(defaultCountdown);
      setEnableResendOneTimePasswordButton(false);
      clearInterval(clockCall)
      clockCall = setInterval(() => {
        decrementClock();
      }, 1000)
    }

  }

  function decrementClock() {
    if (countdown <= 1) {
      setCountdown(0);
      setEnableResendOneTimePasswordButton(true);
      clearInterval(clockCall);
    }
    else {
      setCountdown(countdown - 1);
    }
  }
  
  function handleSignIn() {

    console.log(oneTimePasswordTextInputValues.map(i => i[0]).join(""))
    /* navigate(""); */
  }

  function handleOneTimePasswordTextChanged(index: number, e: NativeSyntheticEvent<TextInputKeyPressEventData>): void {
    setEnableConfirmOneTimePasswordButton(false);
    
    let i = e.nativeEvent.key === 'Backspace' ? -1 : 1;
      
    if (!!oneTimePasswordTextInputRefs.current[index + i]){
      oneTimePasswordTextInputRefs.current[index + i].current?.focus();
    }
    
    if (index + i === lengthInput)
      setEnableConfirmOneTimePasswordButton(true);
  }

  useEffect(() => {
    clockCall = setInterval(() => {
      decrementClock();
    }, 1000)
    return () => clearInterval(clockCall) });

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header>
          <HeaderBackComponent />
        </Header>
        <Content>
          <Description>
            {
            `Digite o código de 4 dígitos que${`\n`}enviamos para o ${sendBy == "mail" ? 'e-mail' : 'sms'}${`\n`}${account}`
            }
          </Description>
          <OneTimePasswordComponent>
            <OneTimePasswordContent>
              {
                Array(lengthInput).fill(null).map((_, index) => 
                {
                  const [value, setValue] = oneTimePasswordTextInputValues[index]
                return(
                  <OneTimePasswordButtonTextInput
                    key={index}
                    onPress={() => oneTimePasswordTextInputRefs.current[index].current?.focus()}>
                    <OneTimePasswordTextInput
                      ref={oneTimePasswordTextInputRefs.current[index]}
                      value={value}
                      onChangeText={(e) => setValue(e)}
                      onKeyPress={(e) => handleOneTimePasswordTextChanged(index, e)}>
                    </OneTimePasswordTextInput>
                  </OneTimePasswordButtonTextInput> )
                })
              }
            </OneTimePasswordContent>
          </OneTimePasswordComponent>
          <ButtonContainer>
            <PrimaryTouchableBordelessFilledButton title="Continuar" disabled={!enableConfirmOneTimePasswordButton} onPress={() => handleSignIn()} />
            <PrimaryTouchableBordelessOutlineButton title={`Reenviar Código ${!enableResendOneTimePasswordButton ? countdownFormatTime : ''}`} disabled={!enableResendOneTimePasswordButton} onPress={() => handleResendOneTimePassword()} >
            </PrimaryTouchableBordelessOutlineButton>
          </ButtonContainer>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}