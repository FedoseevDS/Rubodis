import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom"; 
import './styles.scss';

const setActive = ({isActive}) => isActive ? 'active' : ''; 

const Layout = () => {

  const [isState, setIsState] = useState(false)
  const toggle = () => {setIsState(!isState)}

  const [isState2, setIsState2] = useState(false)
  const toggle2 = () => {setIsState2(!isState2)}

  const [isState3, setIsState3] = useState(false)
  const toggle3 = () => {setIsState3(!isState3)}

  return (
    <div className="common">
      <header className="header">Проект "Рубодис"</header>
      <nav className="navbar">
        <NavLink to="/" className={setActive}>
          Home
        </NavLink>
        <NavLink to="react" className={setActive} onClick={toggle3}>
          React
          {isState3 && (
            <div className="animation">
              <NavLink to="/react/animation" className={setActive}>
                Анимация
              </NavLink>
            </div>
          )}
        </NavLink>
        <NavLink to="/props" className={setActive} onClick={toggle}>
          Props
          {isState && (
            <div className="props">
              <NavLink to="/props/fourOptions" className={setActive}>
                4 способа
              </NavLink>
              <NavLink to="/props/children" className={setActive}>
                Children
              </NavLink>
            </div>
          )}
        </NavLink>
        <NavLink to="classname" className={setActive}>
          Classname
        </NavLink>
        <NavLink to="array" className={setActive}>
          Array
        </NavLink>
        <NavLink to="scss" className={setActive} onClick={toggle2}>
          SCSS
          {isState2 && (
            <div className="transition">
              <NavLink to="scss/transition" className={setActive}>
                Transition
              </NavLink>
              <NavLink to="scss/animation1" className={setActive}>
                Animation (channel1)
              </NavLink>
              <NavLink to="scss/animation2" className={setActive}>
                Animation (channel2)
              </NavLink>
            </div>
          )}
        </NavLink>
      </nav>
      <div className="content">
        <Outlet /> {/* отображается контент страниц при переходе */}
      </div>
    </div>
  );
};

export default Layout;
