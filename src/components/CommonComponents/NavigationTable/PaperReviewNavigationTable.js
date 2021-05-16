import React from 'react';
import {NavLink } from 'react-router-dom';
import './NavigationTable.scss'

/* TODO
Add content within page navigation
*/

const AssetAllocationTable = (props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/paper-review/asset_allocation/A-Quantitative-Approach-to-Tactical-Asset-Allocation/" activeClassName={"ActivePage"}>A Quantitative Approach to Tactical Asset Allocation</NavLink ></li>
            <li><NavLink  to="/paper-review/asset_allocation/The-Black-Litterman-Approach-Original-Model-and-Extensions/" activeClassName={"ActivePage"}>The Black-Litterman Approach: Original Model and Extensions</NavLink ></li>
            

        </ul>
    </div>
)

export default AssetAllocationTable
