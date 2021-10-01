
import React from 'react';

import Navs from './Navs';
import Banner from '../pages/Banner'

const MainPageLayout = ({ childern }) => {
  return (
    <div>
      <Navs />
      <Banner />


      {childern}
    </div>
  )
}

export default MainPageLayout
