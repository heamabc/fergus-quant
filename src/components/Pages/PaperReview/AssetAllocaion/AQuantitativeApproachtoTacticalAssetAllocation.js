import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import PaperInfo from '../common/PaperInfo'
import '../../css/AllPages.scss';

class HomePage extends Component {
  render() {
    return (
        <Page>
        <CodeSnippet />
        <Title label="A Quantitative Approach to Tactical Asset Allocation" />
        <PaperInfo 
                    url = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=962461#" 
                    author = "Mebane T. Faber" 
                    date = "2013-02-01" 
        />
        
        <p>

        </p>
        </Page>
    )}}

export default HomePage;