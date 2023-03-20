import React from "react";
import styled from "./Head.module.css";
import { MainContext, useContext } from "../../DataContext";
import { FaBook } from "react-icons/fa";
import { BsMoon, BsFillSunFill } from "react-icons/bs";
import FontTypeSelect from "./FontType";

const Head = () => {
  const { theme, setTheme } = useContext(MainContext);

  return (
    <nav>
      <div className={[styled.navbar]}>
        <div className="logo">
          <a href="/">
            <FaBook size={32} fill={theme === "Darken" ? "#1CF8DC" : "#000"} />
          </a>
        </div>
        <div className={styled.navbarRight}>
          <FontTypeSelect />
          <div
            className={styled.themeCircle}
            onClick={() => setTheme(theme === "Darken" ? "Light" : "Darken")}
          >
            <div
              style={{
                transition: "300ms",
                width: "18px",
                height: "18px",
                backgroundColor: "#141414",
                position: "absolute",
                borderRadius: "50%",
                left: `${theme === "Darken" ? "2px" : "25px"}`,
              }}
            />
          </div>

          {theme === "Darken" ? (
            <BsMoon size={16} />
          ) : (
            <BsFillSunFill size={16} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Head;
