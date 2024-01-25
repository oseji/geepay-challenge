import { useState, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

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
import coreySchleifer from "./assets/corey schleifer.png";
import jadonVarraco from "./assets/jaydon vaccaro.png";
import cooperPress from "./assets/cooper press.png";
import philipLubin from "./assets/philip lubin.png";

import totalOrdersIcon from "./assets/total order icon.svg";
import chartUp from "./assets/total orders chart.svg";
import chartDown from "./assets/chart down.svg";
import trendingUp from "./assets/trending-up.svg";
import trendingDown from "./assets/trending-down.svg";
import invoiceIcon from "./assets/invoice icon.svg";

function App() {
  const [isThemeToggled, setIsThemeToggled] = useState(false);

  const [todaysDate, setTodaysDate] = useState("November ,15 2023");
  const [profileName, setProfileName] = useState(`Justin Bergson`);
  const [profileImg, setProfileImg] = useState(justinBergson);
  const [profileEmail, setProfileEmail] = useState("Justin@gmail.com");

  const profileMenuRef = useRef(null);

  const data = [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Apr",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "May",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Jun",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Jul",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Aug",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sept",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Oct",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Nov",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Dec",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const toggleProfileMenu = () => {
    const profileMenu = profileMenuRef.current;
    profileMenu.classList.toggle("hideProfileMenu");
    console.log("clicked");
  };

  const toggleProfile = (e) => {
    const clicked = e.target.dataset.value;

    if (clicked === "justin") {
      setProfileName("Justin Bergson");
      setProfileImg(justinBergson);
      setProfileEmail("Justin@gmail.com");
    }
    if (clicked === "jaydon") {
      setProfileName("Jaydon Varraco");
      setProfileImg(jadonVarraco);
      setProfileEmail("Jaydon@gmail.com");
    }
    if (clicked === "corey") {
      setProfileName("Corey Schleifer");
      setProfileImg(coreySchleifer);
      setProfileEmail("Corey@gmail.com");
    }
    if (clicked === "cooper") {
      setProfileName("Cooper Press");
      setProfileImg(cooperPress);
      setProfileEmail("Cooper@gmail.com");
    }
    if (clicked === "philip") {
      setProfileName("Philip Lubin");
      setProfileImg(philipLubin);
      setProfileEmail("Philip@gmail.com");
    }
  };

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

          <div className="flex flex-col items-center gap-2 bg-white py-2 mr-3 px-1 rounded-full">
            <img
              src={sunIcon}
              alt="sunIcon"
              className="cursor-pointer  hover:scale-110 transition ease-in-out duration-200"
            />
            <img
              src={moonIcon}
              alt="moonIcon"
              className="cursor-pointer  hover:scale-110 transition ease-in-out duration-200"
            />
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
                  className="w-44 focus:outline-0 bg-transparent"
                />
              </div>
            </div>

            <div className="dateGrp">
              <img src={calendarIcon} alt="calendarIcon" />
              <p>{todaysDate}</p>
            </div>

            <div className="profileGrp">
              <img src={profileImg} alt="justinBergson" />

              <div className="relative">
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <p className="capitalize text-end">{profileName}</p>
                    <p className=" text-slate-400">{profileEmail}</p>
                  </div>

                  <img
                    src={downIcon}
                    alt="downIcon"
                    className="cursor-pointer"
                    onClick={toggleProfileMenu}
                  />
                </div>

                <div
                  className="selectProfile hideProfileMenu"
                  ref={profileMenuRef}
                >
                  <p
                    className="selectName"
                    data-value="justin"
                    onClick={toggleProfile}
                  >
                    Justin
                  </p>
                  <p
                    className="selectName"
                    data-value="jaydon"
                    onClick={toggleProfile}
                  >
                    Jaydon
                  </p>
                  <p
                    className="selectName"
                    data-value="corey"
                    onClick={toggleProfile}
                  >
                    Corey
                  </p>
                  <p
                    className="selectName"
                    data-value="cooper"
                    onClick={toggleProfile}
                  >
                    Cooper
                  </p>
                  <p
                    className="selectName"
                    data-value="philip"
                    onClick={toggleProfile}
                  >
                    Philip
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-col gap-5 py-3">
          <section className="salesTrends">
            <div className="salesGraph">
              <div className="flex flex-row justify-between items-center">
                <h1 className="sectionHeading">Sales Trends</h1>

                <div className="sortingGrp">
                  <p>Sort by:</p>

                  <select className="border border-slate-950 rounded-full px-3 py-1 cursor-pointer text-sm outline-0">
                    <option value="weekly">Weekly</option>
                    <option value="weekly">Monthly</option>
                  </select>
                </div>
              </div>

              <BarChart
                className="w-full mt-5"
                width={700}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
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
                  <div className="trendingNumGrp bg-green-100">
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
                  <div className="trendingNumGrp bg-red-100">
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
                  <div className="trendingNumGrp bg-red-100">
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
                  <div className="trendingNumGrp bg-green-100">
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

              <table className="lastOrdersTableGrp">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Invoice</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div className="columnNameGrp">
                        <img src={justinBergson} alt="avatar" />
                        <p>Justin Bergson</p>
                      </div>
                    </td>

                    <td>
                      <p>Nov 15, 2023</p>
                    </td>

                    <td>
                      <p>$80,000</p>
                    </td>

                    <td>
                      <p className="text-hoverHighlight">Paid</p>
                    </td>
                    <td>
                      <div className="invoiceGrp">
                        <img src={invoiceIcon} alt="invoiceIcon" />

                        <p>View</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="columnNameGrp">
                        <img src={jadonVarraco} alt="avatar" />
                        <p>Jaydon Varraco</p>
                      </div>
                    </td>

                    <td>
                      <p>Nov 15, 2023</p>
                    </td>

                    <td>
                      <p>$150,000</p>
                    </td>

                    <td>
                      <p className="text-red-400">Refund</p>
                    </td>
                    <td>
                      <div className="invoiceGrp">
                        <img src={invoiceIcon} alt="invoiceIcon" />

                        <p>View</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="columnNameGrp">
                        <img src={coreySchleifer} alt="avatar" />
                        <p>Corey Schleifer</p>
                      </div>
                    </td>

                    <td>
                      <p>Nov 14, 2023</p>
                    </td>

                    <td>
                      <p>$87,000</p>
                    </td>

                    <td>
                      <p className="text-green-400">Paid</p>
                    </td>
                    <td>
                      <div className="invoiceGrp">
                        <img src={invoiceIcon} alt="invoiceIcon" />

                        <p>View</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="columnNameGrp">
                        <img src={cooperPress} alt="avatar" />
                        <p>Cooper Press</p>
                      </div>
                    </td>

                    <td>
                      <p>Nov 14, 2023</p>
                    </td>

                    <td>
                      <p>$100,000</p>
                    </td>

                    <td>
                      <p className="text-red-400">Refund</p>
                    </td>
                    <td>
                      <div className="invoiceGrp">
                        <img src={invoiceIcon} alt="invoiceIcon" />

                        <p>View</p>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div className="columnNameGrp">
                        <img src={philipLubin} alt="avatar" />
                        <p>Philip Lubin</p>
                      </div>
                    </td>

                    <td>
                      <p>Nov 13, 2023</p>
                    </td>

                    <td>
                      <p>$78,000</p>
                    </td>

                    <td>
                      <p className="text-text-hoverHighlight">Paid</p>
                    </td>
                    <td>
                      <div className="invoiceGrp">
                        <img src={invoiceIcon} alt="invoiceIcon" />

                        <p>View</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="topPlatforms">
              <div className="flex flex-row justify-between items-center">
                <h1 className="sectionHeading">Top Platform</h1>
                <p className="text-green-400">See all</p>
              </div>

              <div className="mt-5 flex flex-col gap-5 ">
                <div className="platformItem">
                  <h1 className="platformName">Book Bazaar</h1>

                  <div className="ratingBar">
                    <div className="barColor bg-bookBazaar w-2/3"></div>
                  </div>

                  <div className="platformMoneyGrp">
                    <p className="platformMoney">$2,500,000</p>

                    <p className="platformPercentage">+15%</p>
                  </div>
                </div>

                <div className="platformItem">
                  <h1 className="platformName">Artisan Aisle</h1>

                  <div className="ratingBar">
                    <div className="barColor bg-artisanAisle w-1/2"></div>
                  </div>

                  <div className="platformMoneyGrp">
                    <p className="platformMoney">$1,800,000</p>
                    <p className="platformPercentage">+10%</p>
                  </div>
                </div>

                <div className="platformItem">
                  <h1 className="platformName">Toy Troop</h1>

                  <div className="ratingBar">
                    <div className="barColor bg-toyTroop w-1/3"></div>
                  </div>

                  <div className="platformMoneyGrp">
                    <p className="platformMoney">$1,200,000</p>
                    <p className="platformPercentage">+8%</p>
                  </div>
                </div>

                <div className="platformItem">
                  <h1 className="platformName">X Store</h1>

                  <div className="ratingBar">
                    <div className="barColor bg-xStore w-1/4"></div>
                  </div>

                  <div className="platformMoneyGrp">
                    <p className="platformMoney">$2,500,000</p>
                    <p className="platformPercentage">+15%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
