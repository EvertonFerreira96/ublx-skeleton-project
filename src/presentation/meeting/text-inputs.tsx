import { FormPrimaryOutlineInputText } from '@/presentation/components/words/text-inputs/forms/primary-outline-text-input';
import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TextInput, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View, SafeAreaView } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'

// import { Container } from './styles';

export const TextInputs: React.FC = () => {
  
  const formRef = useRef<FormHandles>(null);
  const [ keyboardOpen, setKeyboardOpen ] = useState(false);
  
  const inputTextEnabledRef = useRef<TextInput>(null);
  


  useEffect(() => {

    (async () => {

      await formRef.current?.setErrors({
        error: "Error Text Example"
      });
      
      await formRef.current?.setData({
        default: 'Text Default Value Example',
        readonly: 'ReadOnly Text Default Value Example',
        error: 'Error Text Default Value Example',
        filled: 'Input With Correctly Text'
      })
    })()
  },[])

  return (
    <KeyboardAvoidingView behavior="position" enabled style={{ padding: 16, paddingTop: getBottomSpace(), backgroundColor: '#FAFAFA' }}>
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <Form ref={formRef} onSubmit={() => {}}>
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Outline | Enabled | With HelperText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="blur"
            label="Enabled"
            placeholder="Enabled"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            helperText="Helper Text"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Outline | Focused | Without HelperText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="focus"
            label="Focus"
            placeholder="Focus"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Outline | Filled | Without HelperText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="filled"
            label="Filled"
            placeholder="Placeholder"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Outline | Error | Without ErrorText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="error"
            label="Error"
            placeholder="Error"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Outline | Default Value - Disabled | Without Helper Text</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="default"
            label="Default Value"
            placeholder="Default Value"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            disabled
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Outline | Read Only  - Disabled | With Helper Text</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="readonly"
            label="Read Only"
            placeholder="Default"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            disabled
            readOnly
            helperText="Helper Text"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
            <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Flat | Enabled | With HelperText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="blur"
            mode="flat"
            label="Enabled"
            placeholder="Enabled"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            helperText="Helper Text"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Flat | Focused | Without HelperText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="focus"
            mode="flat"
            label="Focus"
            placeholder="Focus"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Flat | Filled | Without HelperText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="filled"
            mode="flat"
            label="Filled"
            placeholder="Placeholder"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Flat | Error | Without ErrorText</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="error"
            label="Error"
            mode="flat"
            placeholder="Error"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Flat | Default Value - Disabled | Without Helper Text</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="default"
            mode="flat"
            label="Default Value"
            placeholder="Default Value"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            disabled
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
          <Text style={{ marginHorizontal: 4, marginVertical:8 }}> Flat | Read Only  - Disabled | With Helper Text</Text>
          <FormPrimaryOutlineInputText                   
            ref={inputTextEnabledRef}
            name="readonly"
            mode="flat"
            label="Read Only"
            placeholder="Default"
            returnKeyType="next"
            autoCapitalize="words"
            keyboardType="default"
            disabled
            readOnly
            helperText="Helper Text"
            onSubmitEditing={() => inputTextEnabledRef.current?.focus()} 
            onFocus={() => setKeyboardOpen(true)}
            onBlur={() => setKeyboardOpen(false)}
            />
        </Form>
        </TouchableWithoutFeedback>
    </ScrollView>
      </KeyboardAvoidingView>
  )
}
