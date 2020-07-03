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
          <Title label="Logistic Regression"/>
          <p>
            Logistic regression is widely used as a binary classifier. In a logistic regression, a linear model (i.e. 
            \(\beta^T X\)) is fit into a logistic (sigmoid) function {String.raw`\( \frac{1}{1+e^{-z}} \)`}, such that:
            {String.raw`$$
            P(y_i=1|X) = \frac{1}{1+e^{-\beta^T X}} = \sigma(\beta^T X)
            $$`}
            where \( P(y_i=1|X) \) is the probability of the ith observations y being class 1.
          </p>
          <p>
            Given the logistic model, how do the logistic model learn? What is its objective function?
          </p>
          <PassageTitle label="Maximum Likelihood Function" />
          <p>
            The likelihood function of the logistic regression function can be written as 
            {String.raw`\begin{align}
            L(\beta) & = \prod_{i=1}^{n} P(Y=1|X=x)^{y_i}  P(Y=0|X=x)^{1-y_i} \\
            
            \end{align}`}
            Like many statistical models, logistic regression finds the value for\( \beta \) using maximum likelihood estimation 
            (MLE). As such, we first find the log likelihood function, then find the value for\( \beta \) to maximize the log 
            likelihood function.
          </p>
          <MinorTitle label="Log Likelihood Function" />
          <p>
            If we take logarithm of the likelihood function, we can obtain 
            {String.raw`\begin{align}
            l(\beta) &= \sum_{i=1}^{n} y_i log(P(Y=1|X=x)) + (1-y_i) log(P(Y=0|X=x)) \\
            &= \sum_{i=1}^{n} y_i log(\sigma(\beta^T X) ) + (1-y_i) log(1 - \sigma(\beta^T X)) \\
            &= \sum_{i=1}^{n} y_i log(\hat{y}) + (1-y_i) log(1 - \hat{y})
            \end{align}`}
          </p>
          <MinorTitle label="Derivatives of log likelihood" />
          <p>
            {String.raw`\begin{align}
            \frac{\partial l(\beta)}{\partial \beta_j} = \frac{\partial l(\beta)}{\partial p} \cdot 
                                                        \frac{\partial p}{\partial z} \cdot
                                                        \frac{\partial z}{\partial \beta_j}
                                                        \text{, where}
                                                        p = \sigma(\beta^T X) \text{,}
                                                        z = \beta^T X
            \end{align}`}
            Therefore, we can find the partial derivatives of each component to find the partial derivative of the log likelihood with 
            respect to beta.
            {String.raw`\begin{align}
            & l(\beta) = \sum_{i=1}^{n} y_i log(p) + (1-y_i) log(1 - p) \\
            & \frac{\partial l(\beta)}{\partial p} = \frac{y}{p} - \frac{1-y}{1-p} \\
            & p = \sigma(z) \\
            & \frac{\partial p}{\partial z} = \sigma(z)(1-\sigma(z)) \\
            & z = \beta^T X \\
            & \frac{\partial z}{\partial \beta_j} = x_j
            \end{align}`}
            Finally, we can multiply all of them to obtain the partial derivative of log likelihood function with respect to 
            \( \beta_j \)
            {String.raw`\begin{align}
            \frac{\partial l(\beta)}{\partial \beta_j} & = \frac{\partial l(\beta)}{\partial p} \cdot 
                                                        \frac{\partial p}{\partial z} \cdot
                                                        \frac{\partial z}{\partial \beta_j} \\ 
            & = (\frac{y}{p} - \frac{1-y}{1-p}) \cdot \sigma(z)(1-\sigma(z)) \cdot x_j \\
            & = (\frac{y}{p} - \frac{1-y}{1-p}) \cdot p(1-p) \cdot x_j \\
            & = [y(1-p) - p(1-y)] \cdot x_j \\
            & = (y-p) x_j \\
            & = (y-\sigma(\beta^T X)) x_j \\
            \end{align}`}
          </p>
          Usually we can equate the above derivaitves to zero to find the global minimum. However, there is no close form for the equation, 
          therefore, we can use gradient descent to find the minimum.
        </Page>
)}}

export default HomePage;