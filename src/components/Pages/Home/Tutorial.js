import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title, {CategoryTitle} from '../../CommonComponents/Title/Title'
import PythonTable,{StatTable, EconometricsTable, DataBaseTable, SoftwareEngineeringTable, FinanceTable, PortfolioManagementTable, QuantTable, MLTable, NNTable , TimeSeriesMLTable, NLPTable, GANTable, AWSTable, BigDataTable, OthersTable} from '../../CommonComponents/NavigationTable/NavigationTable'
import '../css/AllPages.scss';


class HomePage extends Component {
    render() {
        return (
            <Page>
                <CategoryTitle label="Python" />
                <PythonTable />

                <CategoryTitle label="Statistics" />
                <StatTable />

                <CategoryTitle label="Probability" />
                <ProbabilityTable />

                <CategoryTitle label="Econometrics" />
                <EconometricsTable />

                <CategoryTitle label="Database" />
                <DataBaseTable />

                <CategoryTitle label="Software Engineering" />
                <SoftwareEngineeringTable />

                <CategoryTitle label="Finance" />
                <FinanceTable />

                <CategoryTitle label="Portfolio Management" />
                <PortfolioManagementTable />

                <CategoryTitle label="Quant" />
                <QuantTable />

                <CategoryTitle label="Machine Learning" />
                <MLTable />

                <CategoryTitle label="Nueral Network" />
                <NNTable />

                <CategoryTitle label="Time Series Machine Learning" />
                <TimeSeriesMLTable />

                <CategoryTitle label="Natural Language Processing (NLP)" />
                <NLPTable />                

                <CategoryTitle label="GAN" />
                <GANTable />

                <CategoryTitle label="AWS" />
                <AWSTable />

                <CategoryTitle label="Big Data" />
                <BigDataTable />

                <CategoryTitle label="Others" />
                <OthersTable />
            </Page>
        
)}}

export default HomePage;