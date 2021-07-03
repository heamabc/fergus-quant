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
          <Title label="Black Litterman" />
          <PassageTitle label="Problem with Mean Variance Optimization" />
          <p>
            The weighting is unintuitive, highly-concentrated portfolios, input-sensitivity, and estimation error maximization.
          </p>
          <PassageTitle label="Introduction" />
          <p>
            The Black Litterman uses the Bayesian approach to combine the subjective views of an investor regarding
            the expected returns of one or more assets with the market equilibrium vector of expected
            returns (the prior distribution) to form a new, mixed estimate of expected returns.
            <FancyBox caption="Covered Call" alt="Covered Call" link="https://drive.google.com/uc?id=1qwtccNF6OiIUL-5KdCx-O_ofhWlUo3Ui"  />
          </p>
          <PassageTitle label="Expected Return" />
          <p>
            The most important input of the mean variance optimization is the expected return of the assets. A fair and accurate estimate 
            of expected return can lead to a good portfolio. Black Litterman model use reverse optimization to find a good starting point 
            of estimate of expected return.
          </p>
          <MinorTitle label="Reverse Optimization" />
          <p>
            The Black-Litterman model uses “equilibrium” returns as a neutral starting point.
            Equilibrium returns are the set of returns that clear the market. The equilibrium returns
            are derived using a reverse optimization method in which the vector of implied excess
            equilibrium returns is extracted from known information.
            In CAPM, the excess return is defined as 
            {String.raw`$$ \Pi = \beta (\mu_m - r_f) $$`}
            Where \( \mu_m \) is the market return and  \( r_f \) is the risk-free return
            {String.raw`$$ \beta = \frac{Cov(r, r'w_m)}{\sigma^2} $$`}
            where \( r'w_m \) is the market return, \( w_m \) are the market weights. Furthermore, if we let \( \Sigma = Cov(r, r')\), 
            we can get
            {String.raw`$$ \Pi = \lambda \Sigma w_{mkt} $$`}
            where
            {String.raw`\begin{align} 
            \Pi & = \text{ Implied Excess Equilibrium Return Vector} \\
            \lambda & = \text{risk aversion coefficient} \\
            \Sigma & = \text{ covariance matrix of excess returns} \\
            w_{mkt} & = \text{ market capitalization weight }
            \end{align}`}
            In the reverse optimization process, the risk aversion coefficient acts as a scaling factor for the
            reverse optimization estimate of excess returns. More excess return per unit of risk (a
            larger lambda) increases the estimated excess returns.
          </p>
          <p>
              After having the equilibrium return, 
          </p>
          <PassageTitle label="Reference" />
          <p>
            https://faculty.fuqua.duke.edu/~charvey/Teaching/BA453_2006/Idzorek_onBL.pdf
            https://link.springer.com/content/pdf/10.1057/palgrave.jam.2240011.pdf
            
          </p>
          
        </Page>
)}}

export default HomePage;