import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styled.footer}>
      <a target="_blank" href="https://github.com/Enessolmaz">
        Made With By <FaGithub fill="#7b1cf8" />
      </a>
    </div>
  );
};

export default Footer;
