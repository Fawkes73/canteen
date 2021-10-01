
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Order from "./pages/Order";

import Navs from './Navs';

const MainPageLayout = ({ childern }) => {
  return (
    <div>
      <Navs />
      {childern}
    </div>
  )
}

export default MainPageLayout
