import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title, {CategoryTitle} from '../../CommonComponents/Title/Title'
import AssetAllocationTable from '../../CommonComponents/NavigationTable/PaperReviewNavigationTable'
import '../css/AllPages.scss';


class HomePage extends Component {
    render() {
        return (
            <Page>
                <CategoryTitle label="Asset Allocation" />
                <AssetAllocationTable />

                
            </Page>
        
)}}

export default HomePage;