import React from 'react';
import {NavLink } from 'react-router-dom';

const Navigation = (props) => (
    <ul>
        <li><NavLink  exact to="/" activeClassName={"ActivePage"}>Home</NavLink ></li>
        <li><NavLink  to="/info/about/" activeClassName={"ActivePage"}>About</NavLink ></li>
        <li><NavLink  to="/info/education/" activeClassName={"ActivePage"}>Education</NavLink ></li>
        <li><NavLink  to="/info/experience/" activeClassName={"ActivePage"}>Experience</NavLink ></li>
        <li><NavLink  to="/info/recent-projects/" activeClassName={"ActivePage"}>Recent Projects</NavLink ></li>
        <li><NavLink  to="/info/resume/" activeClassName={"ActivePage"}>Resume</NavLink ></li>
        {/* <li><NavLink  to="/info/hire-me/" activeClassName={"ActivePage"}>Hire Me</NavLink ></li> */}
        <li><NavLink  to="/tutorial/" activeClassName={"ActivePage"}>Tutorial</NavLink ></li>
    </ul>
)

export default Navigation