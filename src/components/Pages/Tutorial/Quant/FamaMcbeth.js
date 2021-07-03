import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Fama Mcbeth Model" />
          
          <PassageTitle label="Reference" />
          <p>
              <ul>
                  <li>https://www3.nd.edu/~nmark/FinancialEconometrics/Lecture%20Slides/SlidesFall2020_16.pdf</li>
                  <li>https://quant.stackexchange.com/a/46764</li>
              </ul>
          
          </p>
        </Page>
)}}

export default HomePage;