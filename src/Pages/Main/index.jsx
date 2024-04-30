import React from 'react';
import { Flex, Layout, Menu } from 'antd';
// import { useNavigate } from "react-router-dom"

import CustomFooter from "../../Components/Footer"
import Navbar from "../../Components/Navbar"



const Main = (props) => {
  const { background_color } = props
  return (
    <>
    <Navbar/>
      {props.children}
      <CustomFooter />

    </>
  );
};
export default Main;
