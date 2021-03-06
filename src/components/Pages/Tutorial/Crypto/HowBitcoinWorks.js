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
          <Title label="Bitcoin" />
          <PassageTitle label="Promise of Bitcoin" />
          <p>
              <ul>
                  <li>A global currency which allows individuals to own their own money (without having to rely on national banks).</li>
                  <li>Lower fees for transferring money across geographic borders.</li>
                  <li>Financial stability for people who live in countries with unstable currencies. (e.g. In 2016, Venezuela’s currency hit an inflation rate of 800%). In addition, two-thirds of the current global population has no access to banking or limited access — Bitcoin is changing that.</li>
              </ul>
          </p>
          
        </Page>
)}}

export default HomePage;