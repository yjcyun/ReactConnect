import React from 'react'
import styled from 'styled-components'

const FormInput = (props) => {
  const { label, input, meta } = props
  const errorInput = meta.error && meta.touched;

  return (

    <FormField>
      <Label>{label}</Label>
      <InputWrapper>
        <Input error={errorInput} {...input} autoComplete='off' />
        {errorInput
          ? <Error>{meta.error}</Error>
          : null}
      </InputWrapper>
    </FormField>
  )
}

const FormField = styled.div`
  display:flex;
  padding-bottom:1rem;
`

const Label = styled.label`
  margin-right: 0.5rem;
  display:flex;
  width: 10rem;
  justify-content: flex-end;
`

const Input = styled.input`
  width: 20rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: ${props => props.error ? '1px solid tomato' : '1px solid var(--grey-color)'};
  font-family: 'Poppins', sans-serif; 

  &:focus {
    border-radius:0.5rem;
    outline: none;
    border: 1px solid var(--second-bg-color);
  }
`

const Error = styled.span`
  color: tomato;
  position:absolute;
  bottom: -1.1rem;
  left: 0;
  font-size: 80%;
`

const InputWrapper = styled.div`
  position:relative;
`

export default FormInput