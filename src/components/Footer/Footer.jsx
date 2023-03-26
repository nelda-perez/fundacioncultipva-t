import React from "react";
import { infoFooter, mediaicons } from "./constant";
import "./footer.css";

function footer() {
  return (
    <footer>
      <div className="container container-link">
        {infoFooter.map((item, index) => (
          <div key={index}>
            <span className="span-footer">
              {item.icon}
              <a href={item.link}>{item.content}</a>
            </span>
          </div>
        ))}
      </div>
      <div className="containerIcon">
        {mediaicons.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank">
              {item.icon}
            </a>
          </div>
        ))}
      </div>
    </footer>
  );
}
export default footer;
