import React from 'react'
import styled from 'styled-components'

const FormInput = ({ label, input, otherProps }) => {
  return (
    <FormField>
      <Label>{label}</Label>
      <Input {...input} autoComplete='off' />
      {otherProps.error && otherProps.touched ? <div>{otherProps.error}</div> : null}
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
  border: 1px solid #DCDCDC;
  font-family: 'Poppins', sans-serif; 

  &:focus {
    border-radius:0.5rem;
    outline: none;
    border: 1px solid var(--second-bg-color);
  }
`

export default FormInput