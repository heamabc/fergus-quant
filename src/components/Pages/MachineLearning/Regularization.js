import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <Title label="Types of Regularization" />
          <p>
            In general, regularization are techniques to reduce error caused by overfitting the model.
          </p>
          <PassageTitle label="L1" />
          <p>
            L1 is also called lasso
          </p>
          <PassageTitle label="L2" />
          <p>
            L2 is also called ridge.
          </p>
          <PassageTitle label="Elastic Net" />
          <PassageTitle label="Dropout" />
          <PassageTitle label="Early Stopping" />

        </Page>
)}}

export default HomePage;