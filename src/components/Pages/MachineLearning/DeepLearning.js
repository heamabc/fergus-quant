import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>    
          <Mathjex />
          <CodeSnippet />
          <Title label="vanishing/exploding gradient" />
          <p>
            As we increase the number of layers of the model, there will be a vanishing/exploding gradient problem. 
            <FancyBox link="https://drive.google.com/uc?id=1zC0I2UBNvC8Qqups1emz3VvyAt9pq3DA" caption="deep learning" alt="deep learning" />
            From the above network, we will assume that our activation function is a linear function and we ignore the biase. 
            That is,
            $$ g(z) = z $$
            {String.raw`$$ z = W^{[l]}a^{[l-1]} $$`}
            {String.raw`$$ b^{[l]} = 0 $$`} 
            Then we can see that our prediction is equal to 
            {String.raw`$$ \hat{y} = W^{[L]} W^{[L-1]} \cdots W^{[2]} W^{[1]} X $$`}
            Also notice that 
            {String.raw`$$ \hat{y} = W^{[L]} W^{[L-1]} \cdots \underbrace{W^{[2]} \underbrace{W^{[1]} X}_{z^{[1]}}}_{z^{[2]}} $$`}
            Therefore, we can see that the prediction is simply the dot product of all of these matrices. We can imagine that 
            the magnitude of the later W will affect greatly the value of {String.raw`\( \hat{y} \)`}. Therefore, a small change 
            in later W will have a great impact. We can take this argument to the derivative. The derivative will tweak the prediction 
            exponentially. If this problem presents, the model will be hard to train.
          </p>
          <PassageTitle label="Normalization" />
          <p>
            If the value of x is large, then the w will be very small/large to adjust the value. It will induce the problem 
            of vanishing/exploding gradient and slow down the learning process. To solve it, we would want to normalize our input. 
            Remember to normalize the train set. And use the corresponding mean and sd from the train set to normalize the validation and test set. 
          </p>
          <PassageTitle label="Weight Initialization" />
          <p>
            {String.raw`$$ z = w_1 x_1 + w_2 x_2 + \cdots + w_n x_n $$`}
            To prevent the vanishing/exploding gradient descent, we want z to be small. As we have already normalize the input, the only 
            part to change is w. How can we initialize w so that the value of z is mall?
            <p>
              Our solution is to set the variance of w to be {String.raw`\( \frac{1}{n} \)`}. That is,
              {String.raw`$$
              W^{[l]} = \text{np.random.randn(shape) * np.sqrt(} \frac{1}{n^{[l-1]}} )
              $$`}
            </p>
          </p>
          <Title label="Gradient Checking" />
          <p>
            In a very large neural network, the backward propagation is very complicated. Many will ad a gradient checking to see if the gradient 
            is calculated correctly.
          </p>
          <PassageTitle label="Numerical Approximation of Gradient" />
          <FancyBox caption="Numerical Approximation" alt="Numerical Approximation" link="https://drive.google.com/uc?id=1V2nWs-ObM0LU5B-8Nc5SuYOkIIC7YLL4" />
          <p>
            As we have already had the function, it turns out that it is very easy to approximate the deriviative by calculating the slope of the triangle. 
            Although there will be some estimation error, it will be a good approximation for us to check our gradient. If we recall the formal defition 
            of differentiation, we can obtain the formula
            {String.raw`$$
            \lim_{\Delta x \to 0} = \frac{f(x+\Delta x) + f(x-\Delta x)}{2 \Delta x}
            $$`}
            It is exactly the same as we are computing the slope of triangle. Therefore, if we set the value of {String.raw`\( \epsilon \)`} to be small, 
            we can get a pretty accurate approximation.
          </p>
          <PassageTitle label="Implementation" />

          <Title label="Mini Batch" />
          <p>
            When we are dealing with a very large dataset, there will be some concern for us. First, the iteration may take too long to run for the NN to operate 
            all of the forward and backward propagation. Second, even if we have the time to do so, the data may not be fit into our memory.
            <p>
              Suppose from a dataset of 5000 samples, we decide to make the batch size as 1000.
            </p>
            {String.raw`\begin{align}
            \underbrace{X}_{(n_x,m)} & = \underbrace{[X^{(1)} + X^{(2)} + \cdots + X^{(1000)}]}_{X^{ \left\{ 1 \right\} }} \\
            & = \underbrace{[X^{(1001)} + X^{(1002)} + \cdots + X^{(2000)}]}_{X^{ \left\{ 2 \right\} }} \\
            & \vdots \\
            & = \underbrace{[X^{(4001)} + X^{(4002)} + \cdots + X^{(5000)}]}_{X^{ \left\{ 5 \right\} }} \\
            \underbrace{Y}_{(1,m)} & = \underbrace{[y^{(1)} + y^{(2)} + \cdots + y^{(1000)}]}_{Y^{ \left\{ 1 \right\} }} \\
            & = \underbrace{[y^{(1001)} + y^{(1002)} + \cdots + y^{(2000)}]}_{Y^{ \left\{ 2 \right\} }} \\
            & \vdots \\
            & = \underbrace{[y^{(4001)} + y^{(4002)} + \cdots + y^{(5000)}]}_{Y^{ \left\{ 5 \right\} }} \\
            \end{align}`}
            Then, in each epoch, we randomly choose a mini-batch {String.raw`\( < X^{ \left\{ t \right\} }, Y^{ \left\{ t \right\} } > \)`}. We do the all the forward 
            and backward propagation from the mini-batch. And everything is the same.
          </p>
          <PassageTitle label="Gradient Descent of Mini Batch" />
          <p>
            When we plot the cost function verses the epoch, we will not see a smooth cost function as the cost function is different every epoch. Therefore, the 
            graph of cost function will have a downward trend with a lot of noise.
            <FancyBox caption="Cost function of Mini Batch" alt="Cost function of Mini Batch" link="https://drive.google.com/uc?id=1XuHtEn-BndasMWm2VJlPZm-r1moAsSGi" />
          </p>
          <PassageTitle label="Batch Size" />
          <p>
            Another concern is how big batch size is. It turns out that there are 3 cases. Adn each cases has its own gradient descent.
            <ul>
              <li>Batch Size = m : Batch Gardient Descent</li>
              <li>Batch Size = 1 : Stochastic Gradient Descent (SGD)</li>
              <li>m {'<'} Batch size {'<'} 1 : Mini-Batch Gradient Descent</li>
            </ul>
            If the cost function is the one as below. Blue will be batch gradient descent, purple will be SGD, and green will be 
            mini-batch gradient descent.
            <FancyBox caption="Different Gradient Descent" alt="Different Gradient Descent" link="https://drive.google.com/uc?id=1e62166FenvxJnQ7UVOlZtmWnta5mOs07" />
            Notice that blue will always converge, converge quickly and smoothly. While SGD will not converge and move around the minimum. There will 
            also be a lot of noise. Another drawback of SGD is that we will lose the advantage of vectorization and thus slow down the learning. An optimal 
            case would be mini-batch gradient descent. We often choose the batch size as 2 to the power of something. For example, 64,128,256,512. It is because 
            it can fit into the memory better and speed up the NN.
          </p>
          <Title label="Speeding Up Gradient Descent" />
          <PassageTitle label="Understanding Exponential Moving Average (EMA)" />
          <p>
            Let us denote \( V_t \) be the EMA at time step t. The definition of EMA in our NN is defined as this.
            {String.raw`$$ 
            V_t =
            \begin{cases}
            0                           & \text {if $t=0$} \\
            \beta V_{t-1} + (1-\beta) \theta_t   & \text{if $t > 0$} \\
            \end{cases} 
            $$`}
            where theta is the input value at time t. If we expand the formula we can see that 
            {String.raw`\begin{align}
            V_t &  = (1-\beta) \theta_t + \beta V_{t-1} \\
            & = (1-\beta) \theta_t + \beta ((1-\beta) \theta_{t-1} + \beta V_{t-2}) \\
            & \vdots \\
            & = (1-\beta) \theta_t + \beta ((1-\beta) \theta_{t-1} + \cdots + \beta^{t-1} ((1-\beta) \theta_{1}
            \end{align}`}
            Therefore, it will be a geometric sequence. If we plot the weight of each theta against t, we can see a exponential graph.
            <FancyBox caption="EMA Weight" alt="EMA Weight" link="https://drive.google.com/uc?id=1pv34E5obJcUvyln_E2t_VhkTFCy6sP9s" />
            Therefore, we call it EMA.
          </p>
          <PassageTitle label="Bias Correction" />
            <p>
              When we initialize EMA, it started with zero. The EMA will gradually increase, but will be much deviate from the population 
              as it is affected by the initialization.
              <FancyBox caption="Bias Correction" alt="Bias Correction" link="https://drive.google.com/uc?id=111gbicolkw9bIjF6w4TpTy_XeQn0h3zp" />
              From the graph, the normal EMA will be the purple curve. We can see that it is deviated from the population from the start. What we 
              want is the green curve. To adjust for the initialization, a bias correction can be done.
              {String.raw`$$
              V_t = \frac{V_t}{1-\beta^t}
              $$`}
              As beta is smaller than 1, initially the denomiator will be very small, thus enlarging the value of \( V_t \). After some iteration, 
              the t will be large and {String.raw`\( \beta^t \)`} will be very small. Therefore, the denomiator will be 1 and will not affect the 
              value of \( V_t \) anymore. It is good because we can adjust the initialization while do not affect the value after some t.
            </p>
          
          <PassageTitle label="Gradient Descent With Momentum" />
          <p>
            Suppose that we have the below cost function graph.
            <FancyBox caption="" alt="" link="https://drive.google.com/uc?id=10N2SGY5dnGcF1bHnacrUbB2mwbIatJai" />
            In the gradient descent process, we want the vertical oscillation to be smaller, but the horizontal moving faster.
            In achieving the goal, we can apply EMA to the gradient.
            {String.raw`\begin{align}
            V_{dw} & = \beta_1 V_{dw} + (1-\beta_1) dW \\
            V_{db} & = \beta_1 V_{db} + (1-\beta_1) db \\
            W & = W - \alpha V_{dw} \\
            b & = b - \alpha V_{db}
            \end{align}`}
            What it does is to smooth out the gradient descent. Imagine for the vertical oscillation. As the EMA will smooth out 
            the oscillation, it will average out the gradient to zero and flatten the gradient descent. On the other hand, All the 
            gradient will point to the minimum and thus the EMA will contain the gradient.
          </p>
          <PassageTitle label="RMSprop"/>
          <p>
            RMSprop is similar to gradient descent with momentum.
            {String.raw`\begin{align}
            S_{dw} & = \beta_2 S_{dw} + (1-\beta_2) (dW)^2 \\
            S_{db} & = \beta_2 S_{db} + (1-\beta_2) (db)^2 \\
            W & = W - \alpha \frac{dw}{\sqrt{S_{dw}}} \\
            b & = b - \alpha \frac{db}{\sqrt{S_{db}}}
            \end{align}`}
            You can imagine that the gradient of vertial direction is relatively large, while the horizontal direction is relatively 
            small. Therefore, as the S value can represent how large and how small the gradient is, dividing a large number can flatten 
            the vertical oscillation. While dividing a small number can increase the horizontal gradient. Eventually, we can learn faster 
            with less oscillation.
          </p>
          <PassageTitle label="Adam Optimization Algorithm"/>
          <p>
            Adam (ADAptive Moment) optimization algorithm combines the gradient descent and RMSprop.
            {String.raw`\begin{align}
            V_{dw} & = \frac{\beta_1 V_{dw} + (1-\beta_1) dW}{1-\beta_1^t} \\
            V_{db} & = \frac{\beta_1 V_{db} + (1-\beta_1) db}{1-\beta_1^t} \\
            S_{dw} & = \frac{\beta_2 S_{dw} + (1-\beta_2) (dW)^2}{1-\beta_2^t} \\
            S_{db} & = \frac{\beta_2 S_{db} + (1-\beta_2) (db)^2}{1-\beta_2^t} \\
            W & = W - \alpha \frac{V_{dw}}{\sqrt{S_{dw}} + \epsilon } \\
            b & = b - \alpha \frac{V_{db}}{\sqrt{S_{db}} + \epsilon } 
            \end{align}`}
          </p>
        </Page>
      )}}

export default HomePage;