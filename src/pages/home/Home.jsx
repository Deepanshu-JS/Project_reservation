import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import Featured from "../../component/Featured/Featured";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browser by property type</h1>
      </div>
    </div>
  );
};
export default Home;
