import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import Featured from "../../component/Featured/Featured";
import PropertyList from "../../component/PropertyList/PropertyList";
import FeatureProperty from "../../component/FeatureProperty/FeatureProperty";
import Maillist from "../../component/MailList/Maillist";
import Footer from "../../component/Footer/Footer";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browser by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guest Love</h1>
       <FeatureProperty/>
      </div>
      <Maillist/>
      <Footer/>
    </div>
  );
};
export default Home;
