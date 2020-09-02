import React from 'react'
import GoogleAuth from './GoogleAuth'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <h2>Patients</h2>
      </div>
      <GoogleAuth />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.nav`
  width: 100%;
  display:flex;
  justify-content:space-between;
  padding: 1.5rem 2rem;
`;

export default Header