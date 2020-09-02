import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BsPeopleFill } from 'react-icons/bs';

const SideNav = () => {
  const [activeItem, setActiveItem] = useState('patients');

  return (
    <SideNavWrapper>
      <Logo>ReactVet</Logo>
      <ul>
        <NavList>
          <NavLink to='/' activeClassName='selected'>
            <BsPeopleFill /> Patients
          </NavLink>
        </NavList>
        <NavList>
          <NavLink to='/'>
            <BsPeopleFill /> Something Else
          </NavLink>
        </NavList>
      </ul>
    </SideNavWrapper>
  )
}

const SideNavWrapper = styled.aside`
  background-color: var(--main-bg-color);
  height: 100vh;
  width: 15%;
  color: #fff;
`;

const Logo = styled.div`
  padding: 2rem 0;
  text-align:center;
`

const NavList = styled.li`
  margin: 1rem 0;
  padding-left: 2rem;

  a {
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 0 1rem 2rem;
  }

  .selected {
    font-weight:bold;
    background-color:var(--second-bg-color);
    display:block;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`

export default SideNav