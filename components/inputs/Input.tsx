import styled from 'styled-components/native'
import Colors from '../../constants/Colors'
import React from 'react';
import { TextInputProps } from 'react-native';

const Wrapper = styled.View`
  margin-bottom: 20px;
  width: 70%;
`

const StyledInput = styled.TextInput`
    border-color: ${(props: { isError: any }) => (props.isError ? Colors.red : Colors.gray)};
    border-width: 1px;
    background-color: ${Colors.white};
    border-radius: 30px;
    height: 45px;
    align-items: center;
    padding-left: 20px;
`

const Error = styled.Text`
  color: ${Colors.red};
`
type props = {
    error?: String;
}

export const Input = ({error, ...textInputProps }: props & TextInputProps) => {
  const isError = Boolean(error)

  return (
    <Wrapper>
      <StyledInput isError={isError} {...textInputProps} />
      {isError && <Error>{error}</Error>}
    </Wrapper>
  )
}