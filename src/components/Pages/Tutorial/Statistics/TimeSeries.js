import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import '../../css/AllPages.scss';

class HomePage extends Component {
    render() {
        return (
            <Page>
              <Mathjex />
              <Title label="Selection of Number of Lags" />
              <PassageTitle label="Adjusted R Squared" />
              Click <a href="/tutorial/econometrics/#Goodness-of-Fit">here</a> for more explanation.
              <PassageTitle label="Akaike’s Information Criterion (AIC)" />
              The idea behind R squared and AIC is quite different. \(R^2\) tells us how well the model can 
              fit our data. AIC tells us how well the model will predict on new data.
              {String.raw`$$
              \text{AIC} = T\log\left(\frac{\text{SSE}}{T}\right) + 2(k+2)
              $$`}
              <PassageTitle label="Stepwise Regression" />
              <p>
              When given a lot of predictors, for example 40 predictors. There will be a combination of 
              \(2^{40} \) of models. How to choose the best model with suitable number of useful predictors?
              Stepwise regression can help us reduce the time to fine tune the model.
              </p>
              <p>
                First, we include all the predictors and evaluate the model using F-test, Adjust R Squared, 
                AIC, BIC, etc.
              </p>
              <p>
                Then we remove the predictors one-by-one and evaluate each model. (Therefore, each model has 39 
                predictors.)
              </p>
              <p>
                We choose the model that statistically significantly improve the performance. Then repeat 
                the process.
              </p>
            </Page>
        )}}

export default HomePage;