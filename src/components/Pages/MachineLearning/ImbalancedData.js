import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Evaluation Metrics" />
          <p>
            When we are dealing with imbalanced data, we should use some different metrics to measure the performance of our algorithm.
          </p>
          <PassageTitle label="Recall" />
          <p>
            Often, we care most about our prediction on minority class. Therefore, we could recall of the minority class to evaluation 
            our performance. Recall is out of all the minority class, what percentage of them is predicted correctly.
          </p>
          <Title label="Sampling"/>
          <PassageTitle label="Oversampling" />

          <PassageTitle label="Undersampling" />
          
        </Page>
      )}}

export default HomePage;