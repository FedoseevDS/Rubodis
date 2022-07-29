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
        <NavLink to="react" className={setActive}>React
          <div>
            <NavLink to="react/modules" className={setActive}>Модули
          <div>
            <NavLink to="react/modules/create-react-app" className={setActive}>Установка React</NavLink>
          </div>
          </NavLink>
          </div>
        </NavLink>
        <NavLink to="/props" className={setActive} onClick={toggle}>Props 
          {state && (
            <div className="dropDownProps">
            <NavLink to='/props/fourOptions' className={setActive}>4 способа</NavLink>
            <NavLink to='/props/children' className={setActive}>Children</NavLink>
            </div>)}
        </NavLink>
        <NavLink to='classname' className={setActive}>Classname</NavLink>
        <NavLink to='/array' className={setActive}>Array</NavLink>
      </nav>
      <div className='content'>
      <Outlet /> {/* отображается контент страниц при переходе */}
      </div>
    </div>
  );
};

export default Layout;
