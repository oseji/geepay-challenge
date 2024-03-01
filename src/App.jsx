import { useState, useRef, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { motion } from "framer-motion";

import mobileMenu from "./assets/mobileMenu.svg";
import iconClose from "./assets/close.svg";
import logoIcon from "./assets/logo.svg";
import squareMenuIcon from "./assets/Square menu.svg";
import salesIcon from "./assets/sales icon.svg";
import peopleIcon from "./assets/people icon.svg";
import boxIcon from "./assets/box icon.svg";
import percentageIcon from "./assets/percentage icon.svg";
import cautionIcon from "./assets/caution icon.svg";
import sunnnn from "./assets/sun icon.svg";
import moonIcon from "./assets/moon icon.svg";
import leftArrowIcon from "./assets/arrow left icon.svg";
import rightArrowIcon from "./assets/arrow right icon.svg";
import settingsIcon from "./assets/settings icon.svg";

import searchIcon from "./assets/search icon.svg";
import calendarIcon from "./assets/calendar icon.svg";
import bellIcon from "./assets/bell.svg";
import downIcon from "./assets/down arrow icon.svg";

import justinBergson from "./assets/justin bergson.png";
import marcusBergson from "./assets/marcus bergson.png";
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
  const dataMonthly = [
    {
      name: "Jan",
      Amount: 6000,
    },
    {
      name: "Feb",
      Amount: 11000,
    },
    {
      name: "Mar",
      Amount: 3000,
    },
    {
      name: "Apr",
      Amount: 27000,
    },
    {
      name: "May",
      Amount: 9000,
    },
    {
      name: "Jun",
      Amount: 45000,
    },
    {
      name: "Jul",
      Amount: 8000,
    },
    {
      name: "Aug",
      Amount: 25000,
    },
    {
      name: "Sept",
      Amount: 33000,
    },
    {
      name: "Oct",
      Amount: 4000,
    },
    {
      name: "Nov",
      Amount: 30000,
    },
    {
      name: "Dec",
      Amount: 26000,
    },
  ];
  const dataWeekly = [
    {
      name: "Mon",
      Amount: 300,
    },
    {
      name: "Tue",
      Amount: 700,
    },
    {
      name: "Wed",
      Amount: 3000,
    },
    {
      name: "Thur",
      Amount: 500,
    },
    {
      name: "Fri",
      Amount: 1400,
    },
    {
      name: "Sat",
      Amount: 2300,
    },
    {
      name: "Sun",
      Amount: 270,
    },
  ];

  const topPlatformItems = [
    {
      name: "Book Bazaar",
      color: "bg-bookBazaar",
      width: "66.6666%",
      money: "$2,500,000",
      percent: "+15%",
    },
    {
      name: "Artisan Aisle",
      color: "bg-artisanAisle",
      width: "57%",
      money: "$1,800,000",
      percent: "+10%",
    },
    {
      name: "Toy Troop",
      color: "bg-toyTroop",
      width: "40%",
      money: "$1,200,000",
      percent: "+8%",
    },
    {
      name: "xStore",
      color: "bg-xStore",
      width: "66.6666%",
      money: "$2,500,000",
      percent: "+11%",
    },
    {
      name: "Food Quest",
      color: "bg-purple-700",
      width: "33.3333%",
      money: "$1,100,000",
      percent: "+6%",
    },
    {
      name: "Gamzz",
      color: "bg-red-800",
      width: "60%",
      money: "$2,100,000",
      percent: "+8%",
    },
    {
      name: "FinanceOR",
      color: "bg-emerald-800",
      width: "45%",
      money: "$1,600,000",
      percent: "+13%",
    },
  ];
  const filteredPlatforms = topPlatformItems.slice(0, 3);

  const [topPlatformData, setTopPlatformData] = useState(topPlatformItems);
  const [togglePlatformItems, setTogglePlatformItems] = useState(true);

  const [isThemeToggled, setIsThemeToggled] = useState(false);
  const [profileName, setProfileName] = useState(`Justin Bergson`);
  const [profileImg, setProfileImg] = useState(justinBergson);
  const [profileEmail, setProfileEmail] = useState("Justin@gmail.com");
  const [barChartData, setBarChartData] = useState(dataMonthly);

  const [invoiceName, setInvoiceName] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState("");

  const invoiceBoxRef = useRef(null);
  const sideBarRef = useRef(null);
  const profileMenuRef = useRef(null);

  const currentDate = new Date();
  const monthNames = [
    "Janurary",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  //toggle platform items
  useEffect(() => {
    togglePlatformItems
      ? setTopPlatformData(filteredPlatforms)
      : setTopPlatformData(topPlatformItems);
  }, [togglePlatformItems]);

  const toggleProfileMenu = () => {
    const profileMenu = profileMenuRef.current;
    profileMenu.classList.toggle("hideProfileMenu");
  };

  const toggleProfile = (e) => {
    const clicked = e.target.dataset.value;
    const profileMenu = profileMenuRef.current;

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

    profileMenu.classList.toggle("hideProfileMenu");
  };

  const toggleSideBar = () => {
    const sidebar = sideBarRef.current;
    sidebar.classList.toggle("hideSidebar");
  };

  const toggleInvoice = (e) => {
    const invoiceBox = invoiceBoxRef.current;
    invoiceBox.classList.remove("hidden");

    const tr = e.target.closest("tr");
    if (tr) {
      const userName = tr.querySelector(".userName").textContent;
      const amount = tr.querySelector(".amount").textContent;
      const date = tr.querySelector(".date").textContent;
      const status = tr.querySelector(".status").textContent;

      setInvoiceName(userName);
      setInvoiceDate(date);
      setInvoiceAmount(amount);
      setInvoiceStatus(status);
    }
  };

  const toggleBarChart = (e) => {
    if (e.target.value === "weekly") {
      setBarChartData(dataWeekly);
    }

    if (e.target.value === "monthly") {
      setBarChartData(dataMonthly);
    }
  };

  return (
    <div
      className={`App ${
        isThemeToggled ? "bg-black text-white" : "bg-appBG text-black"
      }`}
    >
      <div
        id="sidebar"
        className={`hideSidebar ${
          isThemeToggled
            ? "bg-black text-white border-slate-500"
            : "bg-white lg:bg-appBG border-appBorders text-black"
        }`}
        ref={sideBarRef}
      >
        <div className="flex flex-col  items-center gap-2 mt-9 lg:mt-3">
          <img src={logoIcon} alt="logoIcon" className="logo" />

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

          <div className="flex flex-col items-center gap-2 bg-white py-2 px-1 my-5 lg:my-0 rounded-full">
            <img
              onClick={() => {
                setIsThemeToggled(false);
                console.log(isThemeToggled);
              }}
              src={sunnnn}
              alt="sunIcon"
              className="cursor-pointer  hover:scale-125 transition ease-in-out duration-200"
            />

            <img
              onClick={() => {
                setIsThemeToggled(true);
                console.log(isThemeToggled);
              }}
              src={moonIcon}
              alt="moonIcon"
              className="cursor-pointer  hover:scale-125 transition ease-in-out duration-200"
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

      <main className="w-full p-4 lg:p-2">
        <header
          className={isThemeToggled ? "border-slate-500" : "border-appBorders"}
        >
          <div className="w-full lg:w-auto flex flex-row justify-between items-center">
            <h1 className="font-semibold text-lg mr-auto">Dashboard</h1>

            <img
              src={mobileMenu}
              alt="mobileMenu"
              onClick={toggleSideBar}
              className="lg:hidden"
            />
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-end gap-5 lg:gap-10 text-sm">
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
              <p>
                {month} {day}, {year}
              </p>
              <img src={bellIcon} alt="bellIcon" />
            </div>

            <div className="profileGrp" onClick={toggleProfileMenu}>
              <img src={profileImg} alt="justinBergson" />

              <div className="relative ">
                <div className="flex flex-row items-center gap-2">
                  <div>
                    <p className="capitalize text-end">{profileName}</p>
                    <p className=" text-slate-400">{profileEmail}</p>
                  </div>

                  <img src={downIcon} alt="downIcon" />
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
            <div
              className={`salesGraph ${
                isThemeToggled
                  ? "bg-slate-950 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="flex flex-row justify-between items-center">
                <h1 className="sectionHeading">Sales Trends</h1>

                <div className="sortingGrp">
                  <p>Sort by:</p>

                  <select
                    className="bg-transparent border border-slate-950 rounded-full px-3 py-1 cursor-pointer text-sm outline-0"
                    onChange={toggleBarChart}
                  >
                    <option value="monthly">Monthly</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
              </div>

              <div className="overflow-x-scroll md:overflow-x-hidden">
                <BarChart
                  className="w-full mt-5"
                  width={600}
                  height={250}
                  data={barChartData}
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
                  <Bar
                    dataKey="Amount"
                    fill="#34CAA5"
                    opacity={0.2}
                    activeBar={{ opacity: 1 }}
                  />
                </BarChart>
              </div>
            </div>

            <div className="salesChartGrp">
              <div
                className={`salesChartBody ${
                  isThemeToggled
                    ? "bg-slate-950 text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartUp} alt="totalOrdersChart" />
                </div>

                <div>
                  <h1 className="subHeading">Total Order</h1>
                  <p className="totalNumber">350</p>
                </div>

                <div className="flex flex-row justify-between items-center ">
                  <div className="trendingNumGrp bg-green-100">
                    <img src={trendingUp} alt="trendingUp" />
                    <p className="trendingUpText">%23.5</p>
                  </div>

                  <p className="text-sm text-slate-500">vs. previous month</p>
                </div>
              </div>

              <div
                className={`salesChartBody ${
                  isThemeToggled
                    ? "bg-slate-950 text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartDown} alt="totalOrdersChart" />
                </div>

                <div>
                  <h1 className="subHeading">Total Refund</h1>
                  <p className="totalNumber">270</p>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="trendingNumGrp bg-red-100">
                    <img src={trendingDown} alt="trendingUp" />
                    <p className="trendingDownText">%23.5</p>
                  </div>

                  <p className="text-sm text-slate-500">vs. previous month</p>
                </div>
              </div>

              <div
                className={`salesChartBody ${
                  isThemeToggled
                    ? "bg-slate-950 text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartDown} alt="totalOrdersChart" />
                </div>

                <div>
                  <h1 className="subHeading">Average Sales</h1>
                  <p className="totalNumber">1567</p>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="trendingNumGrp bg-red-100">
                    <img src={trendingDown} alt="trendingUp" />
                    <p className="trendingDownText">%23.5</p>
                  </div>

                  <p className="text-sm text-slate-500">vs. previous month</p>
                </div>
              </div>

              <div
                className={`salesChartBody ${
                  isThemeToggled
                    ? "bg-slate-950 text-white"
                    : "bg-white text-black"
                }`}
              >
                <div className="flex flex-row justify-between items-center">
                  <img src={totalOrdersIcon} alt="totalOrdersIcon" />

                  <img src={chartUp} alt="totalOrdersChart" />
                </div>

                <div>
                  <h1 className="subHeading">Total Income</h1>
                  <p className="totalNumber">$350.00</p>
                </div>

                <div className="flex flex-row justify-between items-center">
                  <div className="trendingNumGrp bg-green-100">
                    <img src={trendingUp} alt="trendingUp" />
                    <p className="trendingUpText">%23.5</p>
                  </div>

                  <p className="text-sm text-slate-500">vs. previous month</p>
                </div>
              </div>
            </div>
          </section>

          <section className="lastOrders">
            <div
              className={`lastOrdersTable ${
                isThemeToggled
                  ? "bg-slate-950 text-white"
                  : "bg-white text-black"
              }`}
            >
              <h1 className="sectionHeading">Last Orders</h1>

              <div className="overflow-x-scroll md:overflow-x-hidden relative">
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
                          <img src={marcusBergson} alt="avatar" />
                          <p className="userName">Marcus Bergson</p>
                        </div>
                      </td>

                      <td>
                        <p className="date">Nov 15, 2023</p>
                      </td>

                      <td>
                        <p className="amount">$80,000</p>
                      </td>

                      <td>
                        <p className="text-hoverHighlight status">Paid</p>
                      </td>

                      <td onClick={toggleInvoice}>
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
                          <p className="userName">Jaydon Varraco</p>
                        </div>
                      </td>

                      <td>
                        <p className="date">Nov 15, 2023</p>
                      </td>

                      <td>
                        <p className="amount">$150,000</p>
                      </td>

                      <td>
                        <p className="text-red-400 status">Refund</p>
                      </td>

                      <td onClick={toggleInvoice}>
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
                          <p className="userName">Corey Schleifer</p>
                        </div>
                      </td>

                      <td>
                        <p className="date">Nov 14, 2023</p>
                      </td>

                      <td>
                        <p className="amount">$87,000</p>
                      </td>

                      <td>
                        <p className="text-green-400 status">Paid</p>
                      </td>

                      <td onClick={toggleInvoice}>
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
                          <p className="userName">Cooper Press</p>
                        </div>
                      </td>

                      <td>
                        <p className="date">Nov 14, 2023</p>
                      </td>

                      <td>
                        <p className="amount">$100,000</p>
                      </td>

                      <td>
                        <p className="text-red-400 status">Refund</p>
                      </td>

                      <td onClick={toggleInvoice}>
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
                          <p className="userName">Philip Lubin</p>
                        </div>
                      </td>

                      <td>
                        <p className="date">Nov 13, 2023</p>
                      </td>

                      <td>
                        <p className="amount">$78,000</p>
                      </td>

                      <td>
                        <p className="text-hoverHighlight status">Paid</p>
                      </td>

                      <td onClick={toggleInvoice}>
                        <div className="invoiceGrp">
                          <img src={invoiceIcon} alt="invoiceIcon" />

                          <p>View</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div
                  ref={invoiceBoxRef}
                  className={`invoiceBox bg-white text-black hidden ${
                    isThemeToggled ? "" : " border border-slate-500"
                  }`}
                >
                  <img
                    src={iconClose}
                    alt="close icon"
                    className="block ml-auto h-4 cursor-pointer"
                    onClick={() => {
                      invoiceBoxRef.current.classList.add("hidden");
                    }}
                  />

                  <p className="mb-2">NAME: {invoiceName}</p>
                  <p className="mb-2">DATE: {invoiceDate}</p>
                  <p className="mb-2">AMOUNT: {invoiceAmount}</p>
                  <p className="mb-2">
                    STATUS:
                    <span
                      className={`${
                        invoiceStatus === "Paid"
                          ? "text-hoverHighlight"
                          : "text-red-500"
                      }`}
                    >
                      {invoiceStatus}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`topPlatforms ${
                isThemeToggled
                  ? "bg-slate-950 text-white"
                  : "bg-white text-black"
              }`}
            >
              <div className="flex flex-row justify-between items-center">
                <h1 className="sectionHeading">Top Platform</h1>
                <p
                  className="text-green-400 hover:underline cursor-pointer"
                  onClick={() => {
                    setTogglePlatformItems(!togglePlatformItems);
                  }}
                >
                  {togglePlatformItems ? "See all" : "Close"}
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-5 ">
                {topPlatformData.map((element, index) => (
                  <div className="platformItem" key={index}>
                    <h1 className="platformName">{element.name}</h1>

                    <div className="ratingBar">
                      <motion.div
                        className={`barColor ${element.color} w-2/3`}
                        initial={{ width: 0 }}
                        whileInView={{
                          width: element.width,
                          transition: { duration: 1 },
                        }}
                      ></motion.div>
                    </div>

                    <div className="platformMoneyGrp">
                      <p className="platformMoney">{element.money}</p>

                      <p className="platformPercentage">{element.percent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
