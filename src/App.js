import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PropsChannel1 from './pages/Props/Channel1/props.jsx'
import Layout from "./components/Layout/layout";
import Home from './pages/Home/home';
import ArrayChannel1 from "./pages/Array/ArrayChannel1/array";
import Children from "./pages/Props/Children/children";
import Props from "./pages/Props/props";
import Classname from './pages/Classname/classname'

// TODO: почитать про Routes, Route, Link

function App() {
  return (
    <>
      <Routes>
        {/* Routes - при изменение местоположения Routes просматривает все его children <Route> элементы, чтобы найти
      наилучшее соответствие, и отображает эту ветвь пользовательского интерфейса */}
        <Route path='/' element={<Layout />}>
          {/* Route - указывает путь, path - URL отображение на странице "/" - homepage */}
          <Route index element={<Home />} /> 
          {/* index - показывает, что эта страница будет запускаться первой из шаблона Layout */}
          <Route path='props' element={<Props />} />
          <Route path="props/fourOptions" element={<PropsChannel1 />} />
          <Route path="props/children" element={<Children />} />
          <Route path='classname' element={<Classname />} />
          <Route path='scss' element={<SCSS />} />
          <Route path='scss/textdiv' element={<divTextCnannel1 />}
          {/* element - ссылка на функию внутри */}
          <Route path='Array' element={<ArrayChannel1 />} />


        </Route>
      </Routes>
    </>
  );
}

export default App;
