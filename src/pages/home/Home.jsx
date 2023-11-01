import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import Featured from "../../component/Featured/Featured";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <Featured/>
      </div>
    </div>
  );
};
export default Home;
