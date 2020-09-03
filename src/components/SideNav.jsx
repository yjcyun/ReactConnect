import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { BsPeopleFill } from 'react-icons/bs';
import { MdDashboard } from 'react-icons/md';

const SideNav = () => {

  const checkActive=(match, location) => {
    if(!location) return false;
    const {pathname} = location;
    return pathname === "/";
  }

  return (
    <SideNavWrapper>
      <Logo>ReactVet</Logo>
      <ul>
        <NavList>
          <NavLink to='/' activeClassName='selected' isActive={checkActive}>
            <MdDashboard /> Dashboard
          </NavLink>
        </NavList>
        <NavList>
          <NavLink to='/patients' activeClassName='selected'>
            <BsPeopleFill /> Patients
          </NavLink>
        </NavList>
        <NavList>
          <NavLink to='/calendar/' activeClassName='selected'>
            <BsPeopleFill /> Calendar
          </NavLink>
        </NavList>
      </ul>
    </SideNavWrapper>
  )
}

const SideNavWrapper = styled.aside`
  background-color: var(--main-bg-color);
  height: 100vh;
  width: 250px;
  color: #fff;
`;

const Logo = styled.div`
  padding: 2rem 0;
  text-align:center;
`

const NavList = styled.li`
  padding-left: 1rem;

  a {
    color: #fff;
    text-transform: uppercase;
    padding: 1rem 0 1rem 2rem;
    display:block;
  }

  .selected {
    background-color:var(--second-bg-color);
    display:block;
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
`

export default SideNav