import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import "./list.css";
import { useLocation } from "react-router-dom";

const List = () => {

  const location = useLocation()
  console.log(location)
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="ListContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label >Destination</label>
              <input type="text"></input>
            </div>
            <div className="lsItem">
              <label >Check-In-Date</label>
              <input type="text"></input>
            </div>
          </div>
          <div className="listResult"></div>
        </div>
      </div>
    </div>
  );
};

export default List;
