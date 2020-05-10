import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
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
          </p>
          
          <p>
            Therefore, mathematically our goal is
            {String.raw`$$ min_{\hat{\beta}_0\hat{\beta}_1} \sum_{i=1}^n(y_i - (\hat{\beta}_0 + \hat{\beta}_1x_i))^2 \tag{2} $$`}
          </p>
          
          <p>
            For econometrics, I believe the best way to learn it is from the perspective of linear algebra.
            From linear algebra, we can know more about how each components interact with each other and can 
            understand the proof more easily.
          </p> 
          <p>
            In linear algebra, Equation 1 can be expressed as 
            {String.raw`$$\underbrace{y}_{n*1}  = \underbrace{X}_{n*m} \underbrace{\beta}_{m*1} + \underbrace{e}_{n*1} \tag{3} $$`}
          </p>
          
          <p>
            and Euqation 2 can be expressed as
            {String.raw`$$\min_{\beta}(y-X\beta)^2 = e^Te \tag{4} $$`}
          </p>
          
          <p>
            If we decompose e, we can have the following equation
            {String.raw`\begin{align} 
                            e^Te & = (y-X\beta)^T(y-X\beta) \\
                            & = (y^T - \beta^TX^T)(y-X\beta) \\
                            & =y^Ty-y^TX\beta-\beta^TX^Ty+\beta^TX^TX\beta  \tag{5}
                            \end{align}`}
          </p>

          <p>
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
          </p>

          {String.raw`$$ e^Te =y^Ty-2\beta^TX^Ty+\beta^TX^TX\beta \tag{6}$$`}

          <p>to find the minimum of the equation, we have to differentiate the equation with repsect to its variable.</p>
          {String.raw`\begin{align} 
                      \frac{\partial}{\partial\beta}e^Te & =  \frac{\partial}{\partial\beta}(y^Ty-2\beta^TX^Ty+\beta^TX^TX\beta) \\
                      & = 0-2X^Ty+2X^TX\beta \\
                      & = 2(X^TX\beta-X^Ty) \tag{7}
                      \end{align}`}
          <p>As the MSE will always be convex, We can set Equation 7 to zero to find the minimum of the MSE.</p>
          {String.raw`\begin{align} 
                      2(X^TX\hat\beta-X^Ty) & = 0 \\ 
                      \hat\beta & = (X^TX)^{-1}X^Ty \tag{8}
                      \end{align} 
                      `} 
          <p>That's it! We now find the equation to get the OLS estimator!</p>
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
          
          <PassageTitle label="The Gaussian-Markov Assumptions" />
          <p>
            The Gaussian-Markove Theorem states that for an OLS regression model, the estimator is the
            best linear unbiased estimator. We call the estimator BLUE for abbreviation. Let's first put
            aside the meaning of BLUE, discuss about the assumptions first. There are total of 4 assumptions.
          </p>
          <MinorTitle label="1. Linearity of the regression model" />
          <p>
            It means that the regressor and regressand can be expressed in a linear model. That is, can
            be expressed in the form of below equation
          </p>
          {String.raw`$$ y  = X\beta + e $$`}
          <MinorTitle label="2. X is a full rank matrix" />
          <p>
            A full rank matrix is a matrix that you cannot transform it into a reduced row echelon form where any
            row is a all-zero row. The implication of full rank matrix is that all the rows are linearly independent and
            all the columns are linear independent. The main purpose of this assumption is to ensure that  there is no perfect
            multicollinearity.
          </p>
          <MinorTitle label="3. No Endogeneity" />
          {String.raw`$$ E[e|X] = 0 $$`}
          <p>
            This assumption is useful when {String.raw`\( E(e)=0 \)`}. That is,
            The meaning of this assumption is the mean of e is equal to 0 for any value of X. In other words, the observation
            of X cannot convey any information about the expected value of the disturbance as it is expected to be 0 for any given X. But how
            do we know {String.raw`\( E(e)=0 \)`}?
            <p>
              The constant term in OLS will adjust the expected value of disturbance. For instance if without constant {String.raw`\( E(e)=3 \)`}. Then,
              OLS will give us a constant {String.raw`\( E(\beta_0)=3 \)`}. After adding the constant, the expected value of disturbance will be zero.
            </p>
          </p>
          <MinorTitle label="4. Homoscedasticity and No Autocorrelation" />
          {String.raw`$$
            E[ee^T|X] = Var[e|X] =  
          \begin{pmatrix}
          \sigma^2 & 0 & \cdots & 0 \\
          0 & \sigma^2 & \cdots & 0 \\
          \vdots  & \vdots  & \ddots & \vdots  \\
          0 & 0 & \cdots & \sigma^2
          \end{pmatrix} 
          =  \mathbf{\sigma}^2I \tag{9}
          $$`}
          <p>
            From Equation 9, there are 2 properties we need to notice. The first is Homoscedasticity. It means that the variance of the error
            is a constant. It will not change when X change. For example, if one of our X is student height, the variance would not increase if
            the height of the student is higher.
          </p>
          <p>
            The second thing to notice is no autocorrelation. From equation 9 it means that all the elements outside of diagonal are zero. 
            It means that the covarnace between disturbance should be zero, i.e. {String.raw`\( Cov[e_i,e_j|X] = 0, for all i \ne j \)`}.
          </p>
          <PassageTitle label="Gaussian-Markov Theorem" />
          <MinorTitle label="Unbiased estimator" />
          <p>
            In plain english, it means that the expected value of the estimator equal to its true value.
            From equation(8) we know that
            {String.raw`\begin{align} 
            (X^TX)\hat\beta & = X^Ty \\
            (X^TX)\hat\beta & = X^T(X\beta+e) \\
            \hat\beta & = (X^TX)^{-1}X^T(X\beta+e) \\ 
            \hat\beta & = \beta + (X^TX)^{-1}X^Te \tag{10}
            \end{align}`}
            If we take the expected value and assume that expectation of e is zero, There will be 2 situations the estimator is unbiased. It will be either
            (i) X is non-stochastic,
            {String.raw`\begin{align}
            E[\hat\beta] & =E[\beta]+E[(X^TX)^{-1}X^Te] \\
            & =\beta+(X^TX)^{-1}X^TE[e] \\
            & = \beta
            \end{align}`}
            (ii) X is stochastic but independent of e,
            {String.raw`\begin{align}
            E[\hat\beta] & =E[\beta]+E[(X^TX)^{-1}X^Te] \\
            & =\beta+(X^TX)^{-1}E[X^Te] \\
            & = \beta
            \end{align}`}
          <MinorTitle label="Unbaised Variance of Estimator" />
          <p>
            From equation (10), 
            {String.raw`\begin{align}
            Var(\hat\beta) & = Var[\beta + (XX^T)^{-1}X^Te] \\
            &= Var[(XX^T)^{-1}X^Te] \\
            &=E[(XX^T)^{-1}X^Tee'X(X^TX)^{-1}] \\
            &=(XX^T)^{-1}X^T\sigma^2IX(X^TX)^{-1} \\
            &=\sigma^2(XX^T)^{-1}X^TX(X^TX)^{-1} \\
            &=\sigma^2(X^TX)^{-1}
            \end{align}`}
            Therefore, we can see that we can find the unbiased variance of the estimator this way if Homoscedasticity is true.
          </p>
          </p>
          <MinorTitle label="Consistant Estimator" />
          <p>
            It means that as the sample number grows, the probability of the the estimator equal to the true value will converge to one. 
            The estimated parameters will more and more concentrated near the true values.
          </p>
          <MinorTitle label="Efficient Estimator" />
          <p>
            <p>
              When given more than one of unbiased estimators, that estimator which has the lowest variance is the best. It is because when the 
              variance is lower, the value will be closer to the mean, that is the true value for unbiased estimator.
            </p>
            <p>
              Efficiency of the estimator states that the estimator has the least variance among all unbiased estimators.
            </p>
          </p>
          <PassageTitle label="Consequence of violating Gauss-Markov Assumptions" />
          <MinorTitle label="2. X is a full rank matrix" />
          <p>
            Multicollinearity as long as it is not perfect collinearity can be result in a less efficient but still unbiased estimate.
          </p>

          <MinorTitle label="4. Homoscedasticity and No Autocorrelation" />
          <p>
            The estimator will still be unbiased. However, their variance is not the lowest of all other unbiased estimators. Therefore, the 
            estimators are no longer BLUE. Estimators are not best/efficient.
          </p>
          <p>
            In addition, the variance of the estimator may be biased. Therefore, the inference and hypothesis testing may be wrong. (eg. t-test, F-test of estimator)
          </p>
          <PassageTitle label="Detection of Heteroskedasticity and Autocorrelation" />
          <h3>Correlogram on Disturbance</h3>
          <p>
            See if there is any lag that is above the critical level.
          </p>
          <Title label="Generalized Least Squares" />
          <PassageTitle label="Problem" />
          <p>
            Consider the model 
            {String.raw`$$ Y = X\beta + e \tag{9} $$`}
            In OLS, we assume the variance of disturbance is constant, that is,
            {String.raw`$$
            E[ee^T] = Var[e] =  
            \begin{pmatrix}
            \sigma^2 & 0 & \cdots & 0 \\
            0 & \sigma^2 & \cdots & 0 \\
            \vdots  & \vdots  & \ddots & \vdots  \\
            0 & 0 & \cdots & \sigma^2
            \end{pmatrix} 
            =  \mathbf{\sigma}^2\mathbf{I} \tag{10}
            $$`}
            However, when this assumption no longer be true, we can use generalized least square to solve the problem.
            Here, we let the variance be {String.raw`\( \sigma^2\Omega \)`}, where {String.raw`\( \Omega \)`} is the 
            variance matrix of e
          </p>
          <PassageTitle label="Transformation of the Model" />
          <p>
            {String.raw`\( \Omega \) `} is a variance matrix, and thus is a symmetric and positive definite matrix. Therefore,
            it has an inverse matrix and both {String.raw`\( \Omega \) `} and {String.raw`\( \Omega ^{-1} \)`} can be taken square
            root. Let C be the Square root of  {String.raw`\( \Omega^{-1} \) `}. Then {String.raw`\( \Omega C^{2} =  I  \Rightarrow C \Omega C =  I \) `}.
            Finally, {String.raw`\( \Omega^{-\frac{1}{2}} \Omega \Omega^{-\frac{1}{2}} = I \)`}.
          </p>
          <p>
            Then we multiply Equation 9 with {String.raw`\( \Omega^{-1} \)`}. The equation will become 
            {String.raw`$$ \Omega^{-\frac{1}{2}} Y = \Omega^{-\frac{1}{2}} X \beta + \Omega^{-\frac{1}{2}} e $$`}
            The variance will now become
            {String.raw`$$ Var(\Omega^{-1} e) = \Omega^{-\frac{1}{2}} \sigma^2 \Omega \Omega^{-\frac{1}{2}} = \sigma^2 I $$`}
            As you can see, All the OLS assumptions can be satisfied now.
          </p>
          <p>
            Now we see how we can obtain the GLS estimator
            {String.raw`\begin{align}
            \hat{\beta} & = [(\Omega^{-\frac{1}{2}}X)^T\Omega^{-\frac{1}{2}}X]^{-1}(\Omega^{-\frac{1}{2}}X)^T\Omega^{-\frac{1}{2}}Y \\
                        &= [X^T\Omega^{-1}X]^{-1}X^T\Omega^{-1}Y
            \end{align}`}
            Good! We finally did it. However, in real word scenario, {String.raw`\( Omega \)`} is usually unknown. Therefore
            it is not feasible in practice.
          </p>
          <PassageTitle label="Feasible GLS Estimator" />
          <p>
            As variance and covariance are unknown, we need to estimate them from data.
          </p>


       </Page> 
      )
    }
  }
  
  export default HomePage;