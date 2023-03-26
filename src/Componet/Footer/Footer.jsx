import React from "react";
import { infoFooter, mediaicons } from "./constant";
import "./Style/footer.css";

function footer(){
 return (<footer>{infoFooter.map((item,index) => (
  <div className="Container" key={index}>
    <span className="one">{item.icon} 
       <a href={item.link}>{item.content}</a>
    </span>
  </div>
))}
<div className="containerIcon">
{mediaicons.map((item,index)=>(
  <div key={index}>
    <a href={item.link} target="_blank">{item.icon}</a>
  </div>
))}
</div>
</footer>)
}
export default footer;