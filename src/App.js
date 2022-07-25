import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import PropsChannel1 from './pages/Props/Channel1/props.jsx'
import Layout from "./components/Layout/layout";
import Home from './pages/Home/home';

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
          <Route path="props" element={<PropsChannel1 />} />
          {/* element - ссылка на функию внутри */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
