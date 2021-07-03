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
          <Title label="Covariance Shrinkage" />
          <PassageTitle label="Background About Asset Allocation" />
          <p>
            In the asset allocation world. Asset manager often use the mean variance optimization approach to calculate the weighting of 
            the portfolio. The simplicity of mean variance optimization is that it only takes two inputs. One is expected return of the 
            assets, the other is the covariance between the assets returns. 
          </p>
          <p>
            As with any other functions, mean variance optimization rely on the accuracy of the input to become useful. If the input is 
            not accurate, the output may not be ideal. Therefore, an accurate estimate of the input is crucial. Here we focus on the 
            estimation of the sample covariance matrix of the asset returns.
          </p>
          <PassageTitle label="Problem" />
          <p>

          </p>
          <PassageTitle label="Shrinkage Estimator of Covariance Matrix" />
          <p>
            The idea of Shrinkage estimator is to combine two estimator. One is unbiased but with high estimation error, and the other is
            biased with low estimation error. When you combine the two, you can get an estimator with 
            better trade-off between biasness and estimation error
          </p>
          <p>
            Use the covariance from CAPM and the sample covariance matrix. Using shrinkage method to combine the two estimator of covariance.
            CAPM covariance only has one variance, therefore the 
          </p>
          <PassageTitle label="Reference" />
          <p>
            https://repositori.upf.edu/bitstream/handle/10230/560/691.pdf?sequence=1
          </p>
          
        </Page>
)}}

export default HomePage;