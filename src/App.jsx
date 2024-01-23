import { useState } from "react";

import logoIcon from "./assets/logo.svg";
import squareMenuIcon from "./assets/Square menu.svg";
import salesIcon from "./assets/sales icon.svg";
import peopleIcon from "./assets/people icon.svg";
import boxIcon from "./assets/box icon.svg";
import percentageIcon from "./assets/percentage icon.svg";
import cautionIcon from "./assets/caution icon.svg";
import sunIcon from "./assets/sun icon.svg";
import moonIcon from "./assets/moon icon.svg";
import leftArrowIcon from "./assets/arrow left icon.svg";
import rightArrowIcon from "./assets/arrow right icon.svg";
import settingsIcon from "./assets/settings icon.svg";

import searchIcon from "./assets/search icon.svg";
import calendarIcon from "./assets/calendar icon.svg";
import downIcon from "./assets/down arrow icon.svg";

import justinBergson from "./assets/justin bergson.png";

import totalOrdersIcon from "./assets/total order icon.svg";
import chartUp from "./assets/total orders chart.svg";
import chartDown from "./assets/chart down.svg";
import trendingUp from "./assets/trending-up.svg";
import trendingDown from "./assets/trending-down.svg";

function App() {
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const [todaysDate, setTodaysDate] = useState("November ,15 2023");
  const [profileName, setProfileName] = useState(`Justin Bergson`);
  const [profileEmail, setProfileEmail] = useState("Justin@gmail.com");

  return (
    <div className="App">
      <div id="sidebar">
        <div className="flex flex-col  items-center gap-2 mt-3">
          <img src={logoIcon} alt="logoIcon" className="sidebarIcon" />
          <img
            src={squareMenuIcon}
            alt="squareMenuIcon"
            className="sidebarIcon"
          />
          <img src={salesIcon} alt="salesIcon" className="sidebarIcon" />
          <img src={peopleIcon} alt="peopleIcon" className="sidebarIcon" />
          <img src={boxIcon} alt="boxIcon" className="sidebarIcon" />
          <img
            src={percentageIcon}
            alt="percentageIcon"
            className="sidebarIcon"
          />
          <img src={cautionIcon} alt="cautionIcon" className="sidebarIcon" />

          <div className="flex flex-col items-center gap-2 bg-white px-1 py-2 rounded-full">
            <img src={sunIcon} alt="sunIcon" className="cursor-pointer" />
            <img src={moonIcon} alt="moonIcon" className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col  items-center gap-2">
          <img
            src={leftArrowIcon}
            alt="leftArrowIcon"
            className="sidebarIcon"
          />
          <img src={settingsIcon} alt="settingsIcon" className="sidebarIcon" />
          <img
            src={rightArrowIcon}
            alt="rightArrowIcon"
            className="sidebarIcon"
          />
        </div>
      </div>

      <main className="w-full p-2">
        <header>
          <h1 className="font-semibold text-lg">Dashboard</h1>

          <div className="flex flex-row items-center justify-end gap-10 text-sm">
            <div className="searchAndProfile">
              <div className="searchBar">
                <img src={searchIcon} alt="searchIcon" />

                <input
                  type="text"
                  placeholder="Search..."
                  className="w-44 focus:outline-0"
                />
              </div>
            </div>

            <div className="dateGrp">
              <img src={calendarIcon} alt="calendarIcon" />
              <p>{todaysDate}</p>
            </div>

            <div className="profileGrp">
              <img src={justinBergson} alt="justinBergson" />

              <div className="flex flex-row items-center gap-2">
                <div>
                  <p className="capitalize text-end">{profileName}</p>
                  <p className=" text-slate-400">{profileEmail}</p>
                </div>

                <img src={downIcon} alt="downIcon" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-5 py-3">
          <section className="salesTrends">
            <div className="salesGraph">
              <h1 className="sectionHeading">Sales Trends</h1>
            </div>

            <div className="salesChartGrp">
              <div className="salesChartBody">
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartUp} alt="totalOrdersChart" />
                </div>

                <h1 className="subHeading">Total Order</h1>
                <p className="totalNumber">350</p>

                <div className="flex flex-row justify-between items-center ">
                  <div className="flex flex-row items-center gap-1 bg-green-100 px-1 py-0.5 rounded-full">
                    <img src={trendingUp} alt="trendingUp" />
                    <p className="trendingUpText">%23.5</p>
                  </div>

                  <p className="text-xs">vs. previous month</p>
                </div>
              </div>

              <div className="salesChartBody">
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartDown} alt="totalOrdersChart" />
                </div>

                <h1 className="subHeading">Total Refund</h1>
                <p className="totalNumber">270</p>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-1 bg-red-100 px-1 py-0.5 rounded-full">
                    <img src={trendingDown} alt="trendingUp" />
                    <p className="trendingDownText">%23.5</p>
                  </div>

                  <p className="text-xs">vs. previous month</p>
                </div>
              </div>

              <div className="salesChartBody">
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartDown} alt="totalOrdersChart" />
                </div>

                <h1 className="subHeading">Average Sales</h1>
                <p className="totalNumber">1567</p>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-1 bg-red-100 px-1 py-0.5 rounded-full">
                    <img src={trendingDown} alt="trendingUp" />
                    <p className="trendingDownText">%23.5</p>
                  </div>

                  <p className="text-xs">vs. previous month</p>
                </div>
              </div>

              <div className="salesChartBody">
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartUp} alt="totalOrdersChart" />
                </div>

                <h1 className="subHeading">Total Income</h1>
                <p className="totalNumber">$350.00</p>

                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row items-center gap-1 bg-green-100 px-1 py-0.5 rounded-full">
                    <img src={trendingUp} alt="trendingUp" />
                    <p className="trendingUpText">%23.5</p>
                  </div>

                  <p className="text-xs">vs. previous month</p>
                </div>
              </div>
            </div>
          </section>

          <section className="lastOrders">
            <div className="lastOrdersTable">
              <h1 className="sectionHeading">Last Orders</h1>

              <div className="lastOrdersGrp">
                <div className="lastOrdersColumn">
                  <h1 className="columnHeading">Name</h1>
                  <div className="columnNameGrp">
                    <img
                      src={justinBergson}
                      alt="justinBergson"
                      className="columnAvatar"
                    />
                    <p className="columnName">Marcus Bergson</p>
                  </div>
                  <div className="columnNameGrp">
                    <img
                      src={justinBergson}
                      alt="justinBergson"
                      className="columnAvatar"
                    />
                    <p className="columnName">Marcus Bergson</p>
                  </div>
                  <div className="columnNameGrp">
                    <img
                      src={justinBergson}
                      alt="justinBergson"
                      className="columnAvatar"
                    />
                    <p className="columnName">Marcus Bergson</p>
                  </div>
                  <div className="columnNameGrp">
                    <img
                      src={justinBergson}
                      alt="justinBergson"
                      className="columnAvatar"
                    />
                    <p className="columnName">Marcus Bergson</p>
                  </div>
                  <div className="columnNameGrp">
                    <img
                      src={justinBergson}
                      alt="justinBergson"
                      className="columnAvatar"
                    />
                    <p className="columnName">Marcus Bergson</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="topPlatforms"></div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
