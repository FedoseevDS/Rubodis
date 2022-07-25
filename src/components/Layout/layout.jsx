import React from "react";
import { NavLink, Outlet } from "react-router-dom"; /* - относится к Варианту 1 - 3 */
import './styles.scss';

// Link - позволяет пользователю перейти на другую страницу to - использутеся вместо href 
// NavLink -
// isActive - если элемент активирован, получает класс active-link или остается в обычном состоянии

const setActive = ({isActive}) => isActive ? 'active' : ''; /* - относится к Варианту № 2 */

const Layout = () => {
  return (
    <div className="common">
      <header className='header'>
        Веб шпаргалка "Рубодис"
      </header>
      <nav className='navbar'>
        <NavLink to="/" className={setActive}>Home</NavLink> 
        <NavLink to="/props" className={setActive}>Props</NavLink> 
       
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
