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
            In general, regularization are techniques to reduce error caused by overfitting the model. It makes some constraint in the learning process 
            in order to confine the learning power in some aspect.
          </p>
          <Title label="Penalizing Loss Function"/>
          <p>
            Suppose we have a loss function
            {String.raw`$$
            \text{Loss Function } = L(w) = \sum C(w) = \text{Sum of cost function}
            $$`}
            Recall that in all machine learning model, our goal is to minimize a loss function. That is,
            {String.raw`$$
            \min_w(L(w))
            $$`}
          </p>
          <PassageTitle label="L1 Regularization" />
          <p>
            L1 regularization is also called lasso. L1 is to penalize the loss function by adding the absolute value of all coeficient, that is,
            {String.raw`$$
            \text{Loss function with L1} = \sum(C(w) + |w|)
            $$`}
            As we are going to minimize the loss function, we want to minimize the cost function as well as the absolute value of w.
          </p>
          <p>
            Often, we will add a coefficient to the regularization term in order to adjust the importance of regularization, therefore, the equation will 
            become
            {String.raw`$$
            \text{Loss function with L1} = \sum(C(w) + \lambda |w|)
            $$`}
          </p>
          <PassageTitle label="L2 Regularization" />
          <p>
          L1 regularization is also called ridge. L1 is to penalize the loss function by adding the sum of squared (norm) of all coeficient, that is,
          {String.raw`$$
          \text{Loss function with L1} = \sum(C(w) + |w|_2)
          $$`}
          As we are going to minimize the loss function, we want to minimize the cost function as well as the sum of squared of w.
          </p>
          <p>
            Often, we will add a coefficient to the regularization term in order to adjust the importance of regularization, therefore, the equation will 
            become
            {String.raw`$$
            \text{Loss function with L1} = \sum(C(w) + \frac{\lambda}{2} |w|_2)
            $$`}
            The 2 in the denominator is for easier calculation as the derivative of L2 will generate a constant 2 from the power of 2.
          </p>
          <PassageTitle label="Elastic Net" />

          <Title label="Constraints in Learning Process" />
          <PassageTitle label="Dropout" />
          <PassageTitle label="Early Stopping" />
          <Title label="Others" />
          <PassageTitle label="Data Augmentation" />
        </Page>
)}}

export default HomePage;