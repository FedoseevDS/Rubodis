import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PropsChannel1 from './pages/Props/Channel1/props.jsx'
import Layout from "./components/Layout/layout";
import Home from './pages/Home/home';
import ArrayChannel1 from "./pages/Array/ArrayChannel1/array";
import Children from "./pages/Props/Children/children";
import Props from "./pages/Props/props";
import Classname from './pages/Classname/classname';
import ReactLearn from './pages/React/react';
import Scss from "./pages/SCSS/scss";
import SCSSTransitionChannel1 from "./pages/SCSS/Transition/Channel1/transition";
import AnimationChannel1 from "./pages/React/Component/Animation/Channel1/animation";
import SCSSAnimationChannel1 from "./pages/SCSS/Animation/animation";

// TODO: почитать про Routes, Route, Link

// {Routes - при изменение местоположения Routes просматривает все его children <Route> элементы, чтобы найти
// наилучшее соответствие, и отображает эту ветвь пользовательского интерфейса}
// element - ссылка на функию внутри
// Route - указывает путь, path - URL отображение на странице "/" - homepage
// index - показывает, что эта страница будет запускаться первой из шаблона Layout

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path='react' element={<ReactLearn />} />
          <Route path='react/animation' element={<AnimationChannel1 />} />
          <Route path='props' element={<Props />} />
          <Route path="props/fourOptions" element={<PropsChannel1 />} />
          <Route path="props/children" element={<Children />} />
          <Route path='classname' element={<Classname />} />
          <Route path='Array' element={<ArrayChannel1 />} />
          <Route path='scss' element={<Scss />} />
          <Route path='scss/transition' element={<SCSSTransitionChannel1 />} />
          <Route path='scss/animation' element={<SCSSAnimationChannel1 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
