import React, { ComponentProps, useEffect, useCallback, useRef, useImperativeHandle, forwardRef, useState, memo } from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { PaperTextInputConatiner, PaperTextLabel } from './styles';
import masks from '@/utils/masks';
import { IMaskTypeProps } from '@/utils/masks/IMaskTypeProps';

import { TextInput } from 'react-native-paper';
import { useTheme } from 'styled-components';
interface InputProps extends TextInputProps {
  icon?: string;
  helperText?: string;
  label: string;
  name: string;
  placeholderTextColor?: string;
  maskType?: IMaskTypeProps;
  mode?: "outlined" | "flat";
  disabled?: boolean;
  readOnly?: boolean;
}

interface InputRef {
  focus(): void
}

interface inputValueReference {
  value: string
}
const FormInputText: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name
    , icon
    , style
    , mode = "outlined"
    , helperText
    , maskType
    , disabled = false
    , readOnly = false
    , selectionColor
    , underlineColorAndroid
    , ...rest
  }
  , ref) => {


  const theme = useTheme();
  const {
    typography: { shape: { natural: DisabledBackgroundColor, light: PlaceHolderFontColor }, contrast: { natural: BlurTextColor, light: DisabledTextColor, dark: ReadOnlyTextColor }
    }
    , primary: { natural: PrimaryFontColor }
    , feedback: { attention: { natural: ErrorFontColor } }
    , background: { primary: BackgroundColor } } = useTheme().colors;

  const HelperTextColor = DisabledTextColor;
  const ReadOnlyBackgroundColor = PlaceHolderFontColor;

  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = '', fieldName, error } = useField(name);

  const inputValueRef = useRef<inputValueReference>({ value: defaultValue });

  const [valueInputCustom, setValueInputCustom] = useState("");

  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => { setIsFocused(true); }, []);

  const handleInputBlur = useCallback(() => { setIsFocused(false); }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    }
  }));

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: any) {
        inputValueRef.current.value = maskType ? masks[maskType](value).value : value;
        inputElementRef.current.setNativeProps({
          text: value
        })
        setValueInputCustom(value)
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
        setValueInputCustom("")
      }
    })
  }, [fieldName, registerField])

  const currentInputColor = isFocused ? PrimaryFontColor : !!error ? ErrorFontColor : !!inputValueRef.current.value ? PrimaryFontColor : BlurTextColor;

  return (
    <PaperTextInputConatiner>
      <TextInput
        ref={inputElementRef}
        mode={mode}
        keyboardAppearance="default"
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        value={valueInputCustom}
        defaultValue={defaultValue}
        underlineColor={PlaceHolderFontColor}
        selectionColor={PlaceHolderFontColor}
        underlineColorAndroid={PlaceHolderFontColor}
        placeholderTextColor={PlaceHolderFontColor}
        onChangeText={(value) => setValueInputCustom(inputValueRef.current.value = maskType ? masks[maskType](value).value : value)}
        error={!!error}
        maxLength={maskType ? masks[maskType](valueInputCustom).maxLenght : 250}
        disabled={disabled}
        style={[{ width: '100%' }, theme.typography.small.natural]}
        {...rest}
        theme={{
          colors: {
            primary: readOnly ? ReadOnlyTextColor : disabled ? DisabledTextColor : currentInputColor,
            placeholder: readOnly ? ReadOnlyTextColor : disabled ? DisabledTextColor : currentInputColor,
            background: readOnly ? ReadOnlyBackgroundColor : disabled ? DisabledBackgroundColor : BackgroundColor,
            error: ErrorFontColor

          }
        }}
      />
      {(!!helperText || !!error) && <PaperTextLabel style={{ color: error ? ErrorFontColor : HelperTextColor }}>{!!error ? error : helperText}</PaperTextLabel>}
    </PaperTextInputConatiner>
  );
}

export const FormPrimaryOutlineInputText = forwardRef(FormInputText);