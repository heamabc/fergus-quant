import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'
import '../../css/AllPages.scss';


class HomePage extends Component {
    render() {
      return (
        <Page>
          <Mathjex />
            <Title label="Definition" />
            <p>
                Heteroskedasticity is when the conditional variance of the disturbance of the regression model is not constant.
                Mathematically, we can state the expression as:
                {String.raw`\begin{align}
                & Var(y|X) = f(x), \text{where f is a function of X} \tag{Heteroskedasticity} \\
                & Var(y|X) = \sigma^2, \text{where \(\sigma\) is a constant} \tag{Homoskedasticity}
                \end{align}`}
            </p>
            <Title label="Detection of Heteroskedasticity" />
            <PassageTitle label="Plotting" />
            <p>
                As we can see from the formula above, variance of disturbance should be constant when given X. Therefore, when we
                plot the dependent variable against independent variable, the variance of the plot should not change much.
            </p>
            <FancyBox alt="img1" caption="img1" link="https://drive.google.com/uc?id=1zrKEkH7DsDtgkY0ZNFcipT1Fbko244cu" />
            <p>
                Other than qualitative checking, heteroskedasticity can also be tested by statistical tests.
            </p>
            <PassageTitle label="Statistical Tests" />
            <p>
              The main idea of testing whether or not heteroskedasticity is present is to see if residual can be expressed in a function 
              of predictor, or at least correlated to the predictor.
              <MinorTitle label="Breusch–Pagan test" />
              This test is to see whether or not there is a linear relationship between the square of residual and the predictors. That is
              {String.raw`\begin{align} 
              & e^2 = \alpha_0 + \alpha_1X_1 + \alpha_2X_2 + \cdots + \alpha_pX_p + u \\
              & e^2 = \alpha X + u \tag{11}
              \end{align}`}
              The null hypothesis of the test is as below, 
              $$
              H_0 : \alpha_1=\alpha_2=\cdots=\alpha_p=0
              $$
              This is the same as testing whether or not the \(R^2\) of the regression model (11) is 0. We then compute the LM statistic 
              \(nR^2\). Under Homoskedasticity, the LM statistic should follow a {String.raw`\(\chi^2_{p-1}\)`}.
              <MinorTitle label="White Test" />
              A major drawback of Breusch–Pagan test is it only tests linear associations between residual and predictors. White test is proposed 
              to generalize Breusch–Pagan test. It looks at higher order and non-linear form of preditors. The regression model becomes
              {String.raw`\begin{align} 
              e^2 = & \alpha_0 + \alpha_1X_1 + \alpha_2X_2 + \cdots + \alpha_pX_p + \gamma_1 X^2_1 + \gamma_2 X^2_2 + \cdots + \gamma_p X^2_p + \\
              & \delta_1 X_1X_2 + \delta_2 X_1X_3 + \delta_{2^{p-1}}(X_{p-1}X_p) + u 
              \end{align}`}
              The above regression model is called auxiliar regression model. We again test whether or not \(R^2\) is equal to zero. And compute the 
              LM statistics \(nR^2\) and the distribution of it is {String.raw`\(\chi^2_{p-1}\)`}.
              <p>
                Notice that white test will test both heteroskedasticity and speicifcation error. If cross product is not introduced, it will be a 
                pure heteroskedasticity test.
              </p>
            </p>
        </Page>
)}}

export default HomePage;