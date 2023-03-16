import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Style/footer.css";

const infoFooter = [
  {
    key: 0,
    content: {
      one: { title: "Direccion", description: "Bogotá, 111221," },
      two: { title: "Contacto", description: "+57 313 211 2921" },
    },
    link: { one: "https://www.google.com/maps/place/111221,+Barrios+Unidos,+Bogot%C3%A1/@4.6590352,-74.0952796,14z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9bad262207e3:0x3539194368d76efc!8m2!3d4.6516339!4d-74.0711359!16s%2Fg%2F11bymzg8b_?hl=es-419", two: "link number" },
  },
  {
    key:1,
    content: {
      one: { title: "email", description: "info@fundacioncultivandoprincipiosyvalores.org" },
      two: { title: "nit", description: "1010114554" },
    },
    link: { one: "link email", two: "" },
  },
];

const mediaicons = [
  {
    icon: <FacebookIcon sx={{ fontSize: "60px" }}/>,
    link:"https://www.facebook.com/CultipvaT" , 
},

{
  icon: <YouTubeIcon sx={{ fontSize: "60px" }}/>, 
  link:"https://www.youtube.com/",
},

{
  icon: <InstagramIcon sx={{ fontSize: "60px" }}/>,
  link:"https://instagram.com/cultipvat?igshid=YmMyMTA2M2Y=",
},

]




function footer(){
 return (<footer>{infoFooter.map((item,index) => (
  <div className="Container" key={index}>
    <span className="one">{item.content.one.title}: 
       <a href={item.link.one}>{item.content.one.description}</a>
    </span>
    <br />
    <span className="two">{item.content.two.title}: 
      <a href={item.link.two}>{item.content.two.description}</a>
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