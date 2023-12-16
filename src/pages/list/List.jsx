import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Header from "../../component/header/Header";
import SearchItem from "../../component/searchItem/searchitem.jsx";
import "./list.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";

const List = () => {
  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [opendate, setopendate] = useState(false);
  const [Options, setOptions] = useState(location.state.Options);

  return (
    <div>
      <Navbar />

      {/*yellow Box left side */}
      <Header type="list" />
      <div className="ListContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text"></input>
            </div>
            {/* DATE (yellow Box left side) */}
            <div className="lsItem">
              <label>Check-In-Date</label>
              <span
                className="datess"
                onClick={() => setopendate(!opendate)}
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {opendate && (
                <DateRange
                  onChange={(item) => setdate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>

            {/* Option (yellow Box left side) */}
            <div className="lsItem">
              <label>Options</label>

              {/* div for all option */}
              <div className="lsoption">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min Price <small>per night</small>
                  </span>

                  <input type="number" className="lsOptionInput"></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max Price <small>per night</small>
                  </span>

                  <input type="number" className="lsOptionInput"></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>

                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={Options.adult}
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>

                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={Options.children}
                  ></input>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={Options.room}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className="listResult">
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
