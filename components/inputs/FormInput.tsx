import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { Input } from './Input'

type props = {
    name: string;
    rules: any;
    defaultValue: string
}

export const FormInput = ({ name, rules, defaultValue = '', ...inputProps }: props & TextInputProps) => {

  const formContext = useFormContext();
  const { control, errors } = formContext;

  const { field } = useController({ name, control, rules, defaultValue });

  return (
    <Input 
    {...inputProps} 
    error={errors[name]?.message} 
    onChangeText={field.onChange}
    onBlur={field.onBlur}
    value={field.value}/>
  );
}