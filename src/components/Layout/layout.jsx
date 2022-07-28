import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; 
import './styles.scss';

const setActive = ({isActive}) => isActive ? 'active' : ''; 

const Layout = () => {

  const [state, setState] = useState(false)
  const toggle = () => {setState(!state)}

  return (
    <div className="common">
      <header className='header'>
        Проект "Рубодис"
      </header>
      <nav className='navbar'>
        <NavLink to="/" className={setActive}>Home</NavLink> 
        <NavLink to="/props" className={setActive} onClick={toggle}>Props 
          {state && (
            <div className="dropDownProps">
            <NavLink to='/props/fourOptions' className={setActive}>4 способа</NavLink>
            <NavLink to='/props/children' className={setActive}>Children</NavLink>
            </div>)}
        </NavLink>
        <NavLink to='classname' className={setActive}>Classname</NavLink>
        <NavLink to='/array' className={setActive}>Array</NavLink>
        
        
        {/* <NavLink to="/" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Home</NavLink> - Вариант № 3
        <NavLink to="/posts" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>Blog</NavLink> 
        <NavLink to="/about" style={({isActive}) => ({color: isActive ? 'var(--color-active)' : 'white'})}>About</NavLink> */}

        {/* <NavLink to="/" className={({isActive}) => isActive ? 'active-link' : '' }> Home</NavLink> - Вариант № 1
        <NavLink to="/posts" className={({isActive}) => isActive ? 'active-link' : '' }>Blog</NavLink> 
        <NavLink to="/about" className={({isActive}) => isActive ? 'active-link' : '' }>About</NavLink> */}
      </nav>
      <div className='content'>
      <Outlet /> {/* отображается контент страниц при переходе */}
      </div>
    </div>
  );
};

export default Layout;
