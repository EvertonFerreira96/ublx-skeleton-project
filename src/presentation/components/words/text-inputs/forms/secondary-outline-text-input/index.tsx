import React, { ComponentProps, useEffect, useCallback, useRef, useImperativeHandle, forwardRef, useState } from 'react';
import { View, TextInputProps, Text, useColorScheme } from 'react-native';
import { useField } from '@unform/core';
import { Container, PrimaryInput, Label } from './styles';
import masks from '@/utils/masks'; 
import { IMaskTypeProps } from '@/utils/masks/IMaskTypeProps';
import { useTheme } from 'styled-components';

interface InputProps extends TextInputProps {
  name: string;
  icon?: string;
  placeholderTextColor?: string;
  label: string;
  helperText?: string;
  theme?: any;
  maskType?: IMaskTypeProps;
  mode?: "outlined" | "flat";
  children?: any
}

interface InputRef {
  focus(): void
}

interface inputValueReference {
  value: string
}
const TextInput: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {  name
   , label
   , icon
   , style
   , theme
   , mode = "outlined"
   , helperText
   , maskType
   , selectionColor
   , underlineColorAndroid
   , children
   , ...rest 
  }
   , ref) => 

  {

  const deviceTheme = useColorScheme(); 
  const {
    typography: { shape: { natural: DisabledBackgroundColor, light: PlaceHolderFontColor }, contrast: { natural: BlurTextColor, light: DisabledTextColor, dark: ReadOnlyTextColor }
    }
    , primary: { natural: PrimaryFontColor }
    , feedback: { attention: { natural: ErrorFontColor } }
    , background: { primary: BackgroundColor } } = useTheme().colors;

  const HelperTextColor = DisabledTextColor;
  const ReadOnlyBackgroundColor = PlaceHolderFontColor;

  const { registerField, defaultValue = '', fieldName, error } = useField(name);
  const inputElementRef = useRef<any>(null);
  const inputValueRef = useRef<inputValueReference>({ value: defaultValue });

  const [valueInputCustom, setValueInputCustom] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
    
  const handleInputFocus = useCallback(() => {setIsFocused(true)},[]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputValueRef.current.value);
  },[]);

  useImperativeHandle(ref, () => ({
    focus(){
      inputElementRef.current.focus(); 
      }
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: any){
        inputValueRef.current.value = maskType ?  masks[maskType](value).value : value;
        inputElementRef.current.setNativeProps({
          text: value
        })

        setValueInputCustom(value)
      },
      clearValue(){
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
        setValueInputCustom("")
      } 
    })
  }, [fieldName, registerField])


  return (
      <Container>
            <Label>{label}</Label>
            <View style={{flexDirection: 'row'}}>
              {children}
              <PrimaryInput {...rest}
            
            
            value={valueInputCustom}
            onChangeText={(value) => setValueInputCustom(inputValueRef.current.value = maskType ?  masks[maskType](value).value : value) }
            maxLength={maskType ?  masks[maskType](valueInputCustom).maxLenght : 250}
            />
            </View>
      </Container>
  );
}

export const SecondaryOutlineTextInput =  forwardRef(TextInput);