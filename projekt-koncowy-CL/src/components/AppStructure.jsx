import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "./UserTable";
import Calendar from "./Calendar";
import UserDetails from "./StudentInfo";
import { FaPowerOff } from "react-icons/fa";
import {
  FaRegCalendarDays,
  FaHandHoldingDollar,
  FaList,
} from "react-icons/fa6";
import CoursesTable from "./Prices";
import { GiMoneyStack } from "react-icons/gi";

const MainMenu = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("userTable");

  const onLogoutClick = () => {
    navigate("/");
  };

  const onCalendarClick = () => {
    setCurrentView("calendar");
  };

  const onListClick = () => {
    setCurrentView("userTable");
  };
  const onPricesClick = () => {
    setCurrentView("CoursesTable");
  };

  // const onSalaryClick = () => {
  //   setCurrentView("");
  // };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-screen-lg p-4">
        <div className="flex justify-end gap-[10px] mb-2">
          <button
            onClick={onCalendarClick}
            title="Kalendarz"
            className={`text-white px-4 py-2 rounded-md ${
              currentView === "calendar" ? "hidden" : "bg-orange-500"
            } hover:bg-orange-600 transition duration-300`}
          >
            <FaRegCalendarDays className="w-[25px] h-[25px] p-[1px]" />
          </button>
          <button
            onClick={onListClick}
            title="Lista"
            className={`text-white px-4 py-2 rounded-md ${
              currentView === "userTable" ? "hidden" : "bg-orange-500"
            } hover:bg-orange-600 transition duration-300`}
          >
            <FaList className="w-[25px] h-[25px] p-[1px]" />
          </button>
          {/* <button
            onClick={onSalaryClick}
            title="Wynagrodzenie"
            className={`text-white px-4 py-2 rounded-md ${
              currentView === "" ? "hidden" : "bg-orange-500"
            } hover:bg-orange-600 transition duration-300`}
          >
            <GiMoneyStack className="w-[25px] h-[25px] p-[1px]" />
          </button> */}
          <button
            onClick={onPricesClick}
            title="Cennik"
            className={`text-white px-4 py-2 rounded-md ${
              currentView === "CoursesTable" ? "hidden" : "bg-orange-500"
            } hover:bg-orange-600 transition duration-300`}
          >
            <FaHandHoldingDollar className="w-[25px] h-[25px] p-[1px]" />
          </button>
          <button
            onClick={onLogoutClick}
            title="Wyloguj"
            className=" flex justify-center text-white px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition duration-300 hover:Wyloguj"
          >
            <FaPowerOff className="w-[25px] h-[25px] p-[1px]" />
          </button>
        </div>
        {currentView === "calendar" && <Calendar />}
        {currentView === "userTable" && <UserTable />}
        {currentView === "userDetails" && <UserDetails />}
        {currentView === "CoursesTable" && <CoursesTable />}
      </div>
    </div>
  );
};

export default MainMenu;
