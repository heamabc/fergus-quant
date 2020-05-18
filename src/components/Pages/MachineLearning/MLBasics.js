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
          <Title label="Binary Classification" />
          <p>
            Binary classification is the case that we want to determine a yes no question. For 
            example, will the stock price increase or not. Therefore, the target 
            {String.raw`$$ y^{(i)} \in  \left\{ 1,0 \right\} $$`}
          </p>
          <PassageTitle label="Logistic Regression (Sigmoid Function)" />
          <p>
            A very simple algorithm to perform the task is logistic regression. it is the regression 
            that we apply a sigmoid function to the normal linear regression formula. That is,
            {String.raw`$$
            y = \sigma (w^T x + e)
            $$`}
            {String.raw`$$
            \sigma (z) = \frac{1}{1+e^{-z}}
            $$`}
            The graph of sigmoid function is like this.
            <FancyBox link="https://drive.google.com/uc?id=1dm6G0Y0Am3waypLwlb4khL6hO3vO3_Tz"  caption="Sigmoid Function" alt="Sigmoid" />
            Notice that when z is very large, the sigmoid function will tends to be one. When z is very small, 
            the sigmoid function will tends to be zero.
            <p>The derivative of the logistic regression is 
            {String.raw`$$ \frac{d\sigma (x)}{d(x)} = \sigma (x)\cdot (1-\sigma(x)) $$`}
            </p>
            As you can see from the derivative, the gradient will tend to zero when the x is very large and very small.
          </p>
          <PassageTitle label="Cross Entropy Loss Function" />
          <p>
            In logistic regression, we cannot use the linear regression cost function. It is because it will result 
            in a non-convex function. It is very hard to find the global minimum.
            <FancyBox link="https://drive.google.com/uc?id=1KVnWJNH8GwbrA5-TydDVsY14Gxapu1s3"  caption="Linear Regression Cost Function" alt="Cost Function" />
            Therefore, we need another cost function that is differentiable and convex. The cross entropy function (logistic 
            cost function) can help us in this situation. The cross entropy is defined as
            {String.raw`$$
            \text{Loss}(\hat{y},y) = -(y ln(\hat{y}) + (1-y)ln(1-\hat{y}))
            $$`}
            We can see that when y = 1, the loss will become {String.raw`\( -ln(\hat{y}) \)`}. As we want 
            the loss function to be as small as possible, we want to maximize {String.raw`\( ln(\hat{y}) \)`}. 
          </p>
          <p>
            When y = 0, the loss will become {String.raw`\( -ln(1-\hat{y}) \)`}. Also when we want to minimize 
            the loss function, we want to maximize {String.raw`\( ln(1-\hat{y}) \)`} and thus minimize {String.raw`\( \hat{y} \)`}.
          </p>
            <FancyBox link="https://drive.google.com/uc?id=1y51P3yU6mrTwb6ylG0FwlS1pvF7b6XPj"  caption="Linear Regression Cost Function" alt="Logistic Loss"/>
          <p>
            As we can see from the above graph. When we combine the positive and negative part of the logistic loss, 
            it will be concave and differentiable. And the global minimum of the graph can be easily found.
            </p>
          <PassageTitle label="Cost Function" />
          <p>
            Loss function is applied to every sample and cost function is applied to the model. The cost function is to 
            measure the overall performance of the program. From the logistic loss function, the cost function will be,
            {String.raw`\begin{align}
            J(\hat{y},y) & = \frac{1}{m} \sum_{i=1}^m{\text{Loss}(\hat{y}^{(i)},y^{(i)})}\\
            & = \frac{1}{m} \sum_{i=1}^m{-(y^{(i)} ln(\hat{y}^{(i)}) + (1-y^{(i)})ln(1-\hat{y}^{(i)}))}
            \end{align}`}
          </p>
          <PassageTitle label="Gradient Descent" />
          <p>
            To find the global minimum of a convex cost function, we need to use the gradient descent. Which means that 
            we adjust the value of the weight according to the negative of the slope of the curve. By doing so, we will 
            move closer and closer to the minimum.
            <FancyBox link="https://drive.google.com/uc?id=1Wo1eY-2Kj7bIJVIn7d7hkpo73hKnTnTF" caption="Gradient Descent" alt="Gradient Descent" />

          </p>

        </Page>
      )}}

export default HomePage;