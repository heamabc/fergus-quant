import React from 'react';
import {NavLink } from 'react-router-dom';
import './NavigationTable.scss'

const PythonTable = (props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/python/" activeClassName={"ActivePage"}>Python</NavLink ></li>
            <li><NavLink  to="/tutorial/multithreading/" activeClassName={"ActivePage"}>Multithreading & Multiprocessing</NavLink ></li>
        </ul>
    </div>
)

export default PythonTable

export const StatTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/econometrics/" activeClassName={"ActivePage"}>Econometrics</NavLink ></li>
            <li><NavLink  to="/tutorial/Heteroskedasticity/" activeClassName={"ActivePage"}>Heteroskedasticity</NavLink ></li>
            <li><NavLink  to="/tutorial/ttest-and-anova/" activeClassName={"ActivePage"}>T-Test & ANOVA</NavLink ></li>
            <li><NavLink  to="/tutorial/stochastic-process/" activeClassName={"ActivePage"}>Stochastic Process</NavLink ></li>
            <li><NavLink  to="/tutorial/moment-generating-functions/" activeClassName={"ActivePage"}>Moment Generating Functions</NavLink ></li>
        </ul>
    </div>
)

export const DataBaseTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/relational-database/" activeClassName={"ActivePage"}>Relational DataBase</NavLink ></li>
        </ul>
    </div>
)

export const SoftwareEngineeringTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/linux/" activeClassName={"ActivePage"}>Linux</NavLink ></li>
            <li><NavLink  to="/tutorial/git/" activeClassName={"ActivePage"}>Git</NavLink ></li>
            <li><NavLink  to="/tutorial/analysis-of-algorithms/" activeClassName={"ActivePage"}>Analysis of Algorithms</NavLink ></li>
        </ul>
    </div>
)

export const QuantTable = (props) =>(
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/portfolio-theory/" activeClassName={"ActivePage"}>Portfolio Theory</NavLink ></li>
            <li><NavLink  to="/tutorial/smart-beta/" activeClassName={"ActivePage"}>Smart Beta</NavLink ></li>
        </ul>
    </div>
)

export const OthersTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/useful-website/" activeClassName={"ActivePage"}>Useful Website</NavLink ></li>
            <li><NavLink  to="/tutorial/aws-jupyter-notebook/" activeClassName={"ActivePage"}>AWS Juputer Notebook</NavLink ></li>
        </ul>
    </div>
)