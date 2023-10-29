import React, { useState } from "react";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

import "./header.css";


const Header = () => {
  //for date
  const [opendate, setopendate] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  //for seat
  const [openOption, setopenOption] = useState(false);
  const [Options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });


  //for increaing no and decreasing no
  const handleOption=(name,operation)=>{
      setOptions(prev=>{return{
        ...prev,[name]: operation ==="i"? Options[name]-1:Options[name]+1
      }})
  }
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerlist">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxi</span>
          </div>
        </div>
        <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
          Get rewarded for your travels - unlock instant saving of 10% or more
          with a free booking Account
        </p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headersearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="headerSearchInput"
            />
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />

            {opendate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
            <span
              onClick={() => setopendate(!opendate)}
              className="headerSearchText"
            >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}</span>
          </div>

          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            < span onClick={() => setopenOption(!openOption)} className="headerSearchText">{`${Options.adult}adult ${Options.children}.children ${Options.room}.room`}</span>
            {openOption && <div className="option">
              <div className="optionItem">
                <span className="optionText">Adult</span>
                <div className="optionCount">
                <button className="optionCounterButton"  onClick={()=>handleOption("adult","i")}>-</button>
                <span className="optionTextNumber">{Options.adult}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("adult","d")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Children</span>
                <div className="optionCount">
                <button className="optionCounterButton" onClick={()=>handleOption("children","i")}>-</button>
                <span className="optionTextNumber">{Options.children}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("children","d")}>+</button>
                </div>
              </div>
              <div className="optionItem">
                <span className="optionText">Room</span>
                <div className="optionCount">
                <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>-</button>
                <span className="optionTextNumber">{Options.room}</span>
                <button className="optionCounterButton" onClick={()=>handleOption("room","d")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
//28:52
