import React,{useState,useEffect} from 'react';
import "./Nav.css";
function Nav(){
  const[show,handleShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
if(window.scrollY>100){
  handleShow(true);
}
else handleShow(false);

});
return()=>{
  window.removeEventListener("scroll");
};
},[]);






return(
  <div className={`nav${show && " nav_black"}`}>
<img className="nav_logo"
src="https://cdn.onesearch.com/lo/api/res/1.2/RtRHDkXdLoEvZ0IFZfTEAA--~B/YXBwaWQ9eWlzZWFyY2g7Zmk9Zml0O2dlPTAwNjYwMDtncz0wMEEzMDA7aD0xMzQ3O3c9NTAwMA--/https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png.cf.png"
alt="Netflix Logo"
/>
 <img className="nav_avatar" src="https://cdn.onesearch.com/lo/api/res/1.2/M7x2YcowWVPerhFFfp0jZQ--~B/YXBwaWQ9eWlzZWFyY2g7Zmk9Zml0O2dlPTAwNjYwMDtncz0wMEEzMDA7aD0xMDAwO3c9MTAwMA--/https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u1.jpg.cf.jpg"
 alt="Netflix Avatar"
 />


</div>
);
}
export default Nav;
