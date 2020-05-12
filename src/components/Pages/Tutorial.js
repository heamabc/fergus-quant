import React, { Component } from 'react';
import Page from '../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../CommonComponents/PassageTitle/PassageTitle'
import Title, {CategoryTitle} from '../CommonComponents/Title/Title'
import PythonTable,{StatTable, DataBaseTable, SoftwareEngineeringTable, QuantTable, MLTable, OthersTable} from '../CommonComponents/NavigationTable/NavigationTable'
import './css/AllPages.scss';


class HomePage extends Component {
    render() {
        return (
            <Page>
                <CategoryTitle label="Python" />
                <PythonTable />

                <CategoryTitle label="Statistics" />
                <StatTable />

                <CategoryTitle label="Database" />
                <DataBaseTable />

                <CategoryTitle label="Software Engineering" />
                <SoftwareEngineeringTable />

                <CategoryTitle label="Quant" />
                <QuantTable />

                <CategoryTitle label="Machine Learning" />
                <MLTable />

                <CategoryTitle label="Others" />
                <OthersTable />
            </Page>
        
)}}

export default HomePage;