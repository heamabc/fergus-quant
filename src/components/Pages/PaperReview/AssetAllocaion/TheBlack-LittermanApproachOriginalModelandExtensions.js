import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import PaperInfo from '../common/PaperInfo'
import '../../css/AllPages.scss';

class HomePage extends Component {
  render() {
    return (
        <Page>
        <CodeSnippet />
        <Mathjex />
        <Title label="The Black-Litterman Approach: Original Model and Extensions" />
        <PaperInfo 
                    url = "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1117574" 
                    author = "Attilio Meucci" 
                    date = "2008-08-01" 
        />
        
        <p>
            Markowitz's mean variance optimization is in reality hard to practice. The model takes two inputs, one is expected return and one is the
            covariance matrix. However, expected return is complicated and it is hard to find an appropriate estimate of the it.

            The Mean Variance Optimization (VMO) is then suffer from only concentrating on a small subset of assets, and is very sensitive to the 
            change in inputs.
        </p>
        <PassageTitle label="CAPM" />
        <p>
            First let us recap what CAPM talk about. CAPM stats that the expected return of every assets in the universe can be expressed in the below
            formula
        </p>
        {String.raw`\begin{align} 
        \underbrace{R}_{(n,1)} - \underbrace{R_f}_{(n,1)} = \beta (\underbrace{R_m}_{(n,1)} - \underbrace{R_f}_{(n,1)}) \\
        \beta = \frac{Cov(R, R_m)}{Var(R_m)}
        \end{align}`}
        <p>
            Where, 
            <ul>
                <li>R is the return on the asset</li>
                <li>\(R_f\) is the risk-free rate</li>
                <li>\(R_m\) is the return on market portfolio</li>
            </ul>
        </p>
        <p>
            Change it into expectation will get us 
        </p>
        {String.raw`\begin{align} 
        E(R) - R_f = \beta (E(R_m) - R_f)
        \end{align}`}
        <PassageTitle label="Black Litterman" />
        <MinorTitle label="Reversed Optimization" />
        <p>
            In black litterman model, we first are interested in finding the exccess equilibrium return, denoted as\( \Pi \), which is:
        </p>
        {String.raw`$$
        \underbrace{\Pi}_{(n,1)} = E(R) - R_f = \beta (E(R_m) - R_f)
        $$`}
        <p>
            The tricky part is how do we find the exccess equilibrium return. It turns out that we can utilize the CAPM model and use reverse 
            optimization to find it out. Remember the risk utility function of an investment is defined as 
        </p>
        {String.raw`$$
        U = E(R) - \frac{1}{2} \delta \sigma^2
        $$`}
        <p>
            where
            <ul>
                <li>\(E(r)\) is the expected return of the investment</li>
                <li>\(\sigma^2\) is the vraince of the investment</li>
                <li>\(\delta\) is the risk aversion parameter</li>
            </ul>
        </p>
        <p>
            In B-L model, we would like to find out the expected return of the market portfolio. Therefore, we convert all the variables to 
            market portfolio. 
        </p>
        {String.raw`$$
        U = W_{market}^T \Pi - \frac{1}{2}\delta W_{market}^T \Sigma W_{market}
        $$`}
        <p>
            So the optimization problem of an investor when investing in market portfolio is to find a weight such that it maximize his risk utility.
             When we calculate the second partial derivative of the utility with respect to the weight.
        </p>
        {String.raw`$$
        \frac{\partial^2U}{\partial W_{market}^2} = - \delta \Sigma < 0
        $$`}
        <p>
            As the covariance matrix is positive definite, the second derivative is less than zero and therefore a global maximum can be found.
            To find the maximum, we find the first partial derivative and equate it to 0.
        </p>
        {String.raw`\begin{align}
        \frac{\partial U}{\partial W_{market}} = \Pi - \delta \Sigma W_{market} = 0 \\
        \Pi = \delta \Sigma W_{market}
        \end{align}`}
        <p>
            Therefore, with the risk aversion parameter, covariance matrix, and the market capitalization of all the asset, we can find the 
            exccess equilibrium return
        </p>
        <p>
            Note that a very simple B-L model can thus be generated. We now have a reverse-optimized expected return of our portfolio, and the 
            covariance and risk-aversion parameters are all known, we can simply maximize the above utility function to find our portfolio weight.
        </p>
        {String.raw`\begin{align}
        \underbrace{max}_{W} \text{  } U &= \Pi - \frac{1}{2}\delta W^T \Sigma W \text{, where,} \\
        \Pi &= \delta \Sigma W_{market}
        \end{align}`}
        <p>
            Therefore, a very simple B-L model is formed without any view on the market. Note that here we use\( \Pi \) and therefore the formula 
            will have an additional subtraction of riskless rate. However, no matter what value the riskless rate is, it does not affect our 
            optimization.
        </p>
        <PassageTitle label="Black Litterman Master Formula" />
        <p>
            One of the major assumption behind B-L model is that the expected return of the portfolio is not a observable fixed value, but rather 
            a stochastic value. Expected returns have to be modelled with respect of a probability distribution
        </p>
        {String.raw`\begin{align}
        r &\sim \mathcal{N}(\mu,\Sigma) \text{, where,}\\
        \mu &= \Pi + \epsilon \\
        \epsilon &\sim  \mathcal{N}(0, \tau \Sigma_\pi)
        \end{align}`}
        </Page>
    )}}

export default HomePage;