import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>    
          <Mathjex />
          <Title label="Ordinary Least Squares" />   
          <PassageTitle label="Estimator of Linear Regression" />
          
          <p>
            In Ordinary Least Squares (OLS), our goal is to fit the data into a linear model which minimizes the mean squared error.
            {String.raw`$$ y_{i} = \beta_0 + \beta_1 x_i + e_i \tag{1} $$`}
            Therefore, mathematically our goal is
            {String.raw`$$ min_{\hat{\beta}_0\hat{\beta}_1} \sum_{i=1}^n(y_i - (\hat{\beta}_0 + \hat{\beta}_1x_i))^2 \tag{2} $$`}
            For econometrics, I believe the best way to learn it is from the perspective of linear algebra.
            From linear algebra, we can know more about how each components interact with each other and can 
            understand the proof more easily.
            In linear algebra, Equation 1 can be expressed as 
            {String.raw`$$\underbrace{y}_{n*1}  = \underbrace{X}_{n*m} \underbrace{\beta}_{m*1} + \underbrace{e}_{n*1} \tag{3} $$`}
            and Euqation 2 can be expressed as
            {String.raw`$$\min_{\beta}(y-X\beta)^2 = e^Te \tag{4} $$`}
            If we decompose e, we can have the following equation
            {String.raw`\begin{align} 
                            e^Te & = (y-X\beta)^T(y-X\beta) \\
                            & = (y^T - \beta^TX^T)(y-X\beta) \\
                            & =y^Ty-y^TX\beta-\beta^TX^Ty+\beta^TX^TX\beta  \tag{5}
                            \end{align}`}
            Furthermore, notice that 
            &nbsp;
            {String.raw`\(\beta^TX^Ty\)`}
            &nbsp; 
            is (1*m)*(m*n)*(n*1) and the result of this product is a (1*1) matrix, and the tranpose of it is equal to itself.
            Therefore, 
            &nbsp;
            {String.raw`\(\beta^TX^Ty = y^T\beta X\)`}
            &nbsp;
            Now, the equation becomes
            {String.raw`$$ e^Te =y^Ty-2\beta^TX^Ty+\beta^TX^TX\beta \tag{6}$$`}
            To find the minimum of the equation, we have to differentiate the equation with repsect to its variable.
            {String.raw`\begin{align} 
                        \frac{\partial}{\partial\beta}e^Te & =  \frac{\partial}{\partial\beta}(y^Ty-2\beta^TX^Ty+\beta^TX^TX\beta) \\
                        & = 0-2X^Ty+2X^TX\beta \\
                        & = 2(X^TX\beta-X^Ty) \tag{7}
                        \end{align}`}
            As the MSE will always be convex, We can set Equation 7 to zero to find the minimum of the MSE.
            {String.raw`\begin{align} 
                        2(X^TX\hat\beta-X^Ty) & = 0 \\ 
                        \hat\beta & = (X^TX)^{-1}X^Ty \tag{8}
                        \end{align} 
                        `} 
            That's it! We now find the equation to get the OLS estimator!
          </p>

          <PassageTitle label="Goodness of Fit" />
          <MinorTitle label="R Squared" />
          <p>
            Once we have the model, it is natrual to ask how well the model is. Let me introduce you the R squared here.
            {String.raw`\begin{align}
            R^2 & = \frac{\sum(\hat{y}_{t} - \bar{y})^2}{\sum(y_{t}-\bar{y})^2} \\
            R^2 & = \frac{SSR}{SST} \\
            R^2 & = \frac{\text{Variation explained by model}}{\text{Variation of the dependent variable}}
            \end{align}`}
            The R squared calculate the propotion of variation in the forecast variable that is explained by the 
            regression model. Notice that as the relationship 
            {String.raw`$$
            SSR + SSE = SST
            $$`}
            As the SST cannot be changed by adjusting the model. Maximising R squared means maximizing SSR. Also means 
            minimizing SSE.
          </p>
          <MinorTitle label="Adjusted R Squared" />
          <p>
            Notice that R squared will always increase or reamin unchange after adding additional independent variable. 
            It is not a good measure to measure the goodness of fit. We should use a measure that will account for the 
            degrees of freedom to measure it more accurately.
            {String.raw`$$
            \bar{R}^2 = 1-(1-R^2)\frac{T-1}{T-k-1}
            $$`}
          </p>


          <PassageTitle label="Properties of Linear Regression Models" />
          <p>
            So, now we have the proof of the linear regression, let examine the properties of it.
            From the above equation, if we substitute the euqation.
          </p>
         {String.raw`\begin{align} 
                    (X^TX)\hat\beta & = X^T(X\beta+e) \\
                    (X^TX)\hat\beta & = (X^TX)\beta+X^Te \\ 
                    X^Te & =0
                    \end{align} 
                    `}
          <MinorTitle label="Sample Variance of the Estimator" />
          {String.raw`$$
          \text{var}(\hat{\beta_j}) = \frac{\sigma^2}{\text{SST}_j (1-R_j^2)}
          $$`}
          , where SST is the total sample variance of\(x_j\) and\( R^2 \) is the R-squared of this independent variable regress on all other independent variabe plus the intercept.
       </Page> 
      )
    }
  }
  
  export default HomePage;