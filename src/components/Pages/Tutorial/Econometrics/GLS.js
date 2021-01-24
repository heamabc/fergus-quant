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
      )}}

export default HomePage;