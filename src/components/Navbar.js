import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Profile from "./Profile";
import SkillsAndEducation from "./SkillsAndEducation";
import Projects from "./Projects";
import Certificate from "./Certificate";
import { FiUser } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";
import { FiActivity } from "react-icons/fi";
import { FiAward } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import ProfileImg from "../images/profile/profile.jpg";
import ContactMe from "./ContactMe";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <ul>
          <li className="tooltip">
            <NavLink exact to="/" activeClassName="active-link"><FiUser /></NavLink>
            <span className="tooltiptext">About me</span>
          </li>
          <li className="tooltip">
            <NavLink to="/skills-education" activeClassName="active-link"><FiBarChart2 /></NavLink>
            <span className="tooltiptext">Skills</span>
          </li>
          <li className="tooltip">
            <NavLink to="/projects" activeClassName="active-link"><FiActivity /></NavLink>
            <span className="tooltiptext">Projects</span>
          </li>
          <li className="tooltip"> 
            <NavLink to="/certificates" activeClassName="active-link"><FiAward /></NavLink>
            <span className="tooltiptext">Certificates</span>
          </li>
          <li className="tooltip"> 
            <NavLink to="/contact" activeClassName="active-link"><FiMail /></NavLink>
            <span className="tooltiptext">Contact Me</span>
          </li>
        </ul>
      <LanguageSelector />
      </nav>
      <div className="left-side">
        <img src={ProfileImg} alt="Profile img"></img>
        <h1>Toni Filipovic</h1>
        <p>Junior Front-End Developer</p>
      </div>
      <Switch>
        <Route path="/" exact component={Profile} />
        <Route path="/skills-education" component={SkillsAndEducation} />
        <Route path="/projects" component={Projects} />
        <Route path="/certificates" component={Certificate} />
        <Route path="/contact" component={ContactMe} />
      </Switch>
    </BrowserRouter>
  );
}

export default Navbar;
