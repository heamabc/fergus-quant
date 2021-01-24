import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>    
          <Mathjex />
          <CodeSnippet />
          <Title label="Notation" />
          We will use the below notation.
          {String.raw`\begin{align}
          & L = \text{number of layers} \\
          & n^{[l]} = \text{number of neurons in l th layer.} \\
          & m = \text{number of sample.} \\
          & W^{[l]} = \text{weight matrix of nuerons in l th layer.  \((n^{[l]}, n^{[l-1]})\) matrix} \\
          & b^{[l]} = \text{bias vector of the l th layer. \((n^{[l]},m)\) vector} \\
          & z^{[l]} = \text{Input of the activation function of the l th layer. \((n^{[l]},m)\) vector} \\
          & a^{[l]} = \text{output of activation function of the l th layer. \((n^{[l]},m)\) vector} \\
          & g(\cdot) = \text{activation of the l th layer.} \\
          & l(\cdot) = \text{loss function.} \\
          & J(\cdot) = \text{cost function.} \\
          \end{align}`}
          For the forward propagation, the relationship between these variables can be seen in this way.
          {String.raw`\begin{align}
          & \underbrace{z^{[l]}}_{(n^{[l]},m)} =  \underbrace{W^{[l]}}_{(n^{[l]}, n^{[l-1]})} \underbrace{a^{[l-1]}}_{(n^{[l-1]},m)} + \underbrace{b^{[l]}}_{(n^{[l]},m)} \\
          & a^{[l]} = g(z^{[l]})
          \end{align}`}
          For the backward propagation
          {String.raw`\begin{align}
          & \hat{y} = a^{[L]} \\
          & \frac{\partial{l(\hat{y}, y)}}{\partial{a}} = \text{derivatives of that loss function} \\
          \end{align}
          \begin{align}
          \frac{\partial{l(\hat{y}, y)}}{\partial{z}} & = \frac{\partial{l(\hat{y}, y)}}{\partial{a}} * \frac{da}{dz} \\
           & = \frac{\partial{l(\hat{y}, y)}}{\partial{a}} * \frac{d}{dz}g(z)
          \end{align}
          \begin{align}
          \frac{\partial{l(\hat{y}, y)}}{\partial{w}} & = \frac{\partial{l(\hat{y}, y)}}{\partial{z}} * \frac{\partial{z}}{\partial{w}} \\
          & = \frac{\partial{l(\hat{y}, y)}}{\partial{z}} * x
          \end{align}
          \begin{align}
          \frac{\partial{l(\hat{y}, y)}}{\partial{b}} & = \frac{\partial{l(\hat{y}, y)}}{\partial{z}} * \frac{\partial{z}}{\partial{b}} \\
          & = \frac{\partial{l(\hat{y}, y)}}{\partial{z}}
          \end{align}`}
          <Title label="Activation Function" />
          <PassageTitle label="Nonlinear Activation Function" />
          <p>
            In neural network, we would not want to use a linear activation function. 
            consider 
            {String.raw`$$ a^{[1]} = z^{[1]} = W^{[1]}x+b^{[1]} $$`}
            Then for the second layer,
            {String.raw`\begin{align}
            a^{[2]} = z^{[2]} & = W^{[2]}a^{[1]}+b^{[2]} \\
            & = W^{[2]}(W^{[1]}x+b^{[1]})+b^{[2]} \\
            & = W^{[2]}W^{[1]}x + W^{[2]}b^{[1]}+b^{[2]} \\
            & = W^\prime x + b^\prime \\
            \end{align}`}
            So the second layer is still linear function. No matter how many layers you use, they are 
            still doing the same thing. Therefore, the model would be the same as the 
            one without any hidden layers.
          </p>

          <PassageTitle label="Sigmoid Function" />
          <p>
            Sigmoid function is a logistic regression. For more details, please see <a href="/tutorial/machine-learning-basics/#Logistic-Regression">here</a>.
          </p>
          <PassageTitle label="TANH" />
          <p>
            tanh is basically a transformation of the sigmoid function. While the range of sigmoid 
            function is 0 to 1, range of tanh is -1 to 1.
            {String.raw`$$
            tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}
            $$`}
            <FancyBox link="https://drive.google.com/uc?id=1VLJFtsJ9MvYVkSIbjC3s2cFmvj3rpbY4" caption="tanh and sigmoid" alt="tanh and sigmoid" />
            As you can see from the above graph, tanh will center the data to value around 0. Compared with sigmoid function, it will can help the performance.
            <MinorTitle label="tanh Derivative" />
            {String.raw`$$
            \frac{d}{dz}g(z) = 1 - (g(z))^2
            $$`}
          </p>
          <PassageTitle label="ReLu" />
          <p>
            The tanh and sigmoid function both have one characteristics. Their gradient at the start and at the 
            end is very small. Which would slow down the gradient descent. ReLu can help us in this situation. 
            {String.raw`$$ \text{ReLu}(z) = max(0,z) $$`}
            <FancyBox link="https://drive.google.com/uc?id=14-yU770cnUWzF10q9aw1XKO3izahznv4" caption="ReLU" alt="ReLu" />
            <MinorTitle label="ReLu Derivative" />
            {String.raw`$$
            \frac{d}{dz}g(z) =
            \begin{cases}
            0   & \text {if $x<0$} \\
            1   & \text{if $x \ge 0$} \\
            \end{cases}$$`}
          </p>
          <PassageTitle label="Leaky ReLu" />
          <p>
            {String.raw`$$ \text{Leaky ReLu(z) = max(0.01z, z)} $$`}
            <FancyBox link="https://drive.google.com/uc?id=1J7f6f_QynwA-YY-3Eg_w8kdJpElyR7MA" caption="Leaky ReLu" alt="Leaky ReLu" />
            <MinorTitle label="ReLu Derivative" />
            {String.raw`$$
            \frac{d}{dz}g(z) =
            \begin{cases}
            0.01   & \text {if $x<0$} \\
            1   & \text{if $x \ge 0$} \\
            \end{cases}$$`}
          </p>
          <Title label="Random Initialization of Weight" />
          <p>
            If we initialize all the weight of each neurons to zero. Then a problem will arise. Since every neuron has the same weight, and 
            activation function, their output, derivative and gradient are the same. Therefore, All the neurons in the same layer are the same. 
            It is not desirable for our function as we are calculating something useless.
            <p>
              When we initialize the value of weight, we want to initialize it with small values. It is because when we are using sigmoid or 
              tanh function, the gradient for large value is very small. It will slow down the gradient descent. Therefore, typically we initialize 
              the weight in this way.
              <pre className="prettyprint lang-python">
                w = np.random.randn(shape) * 0.01
              </pre>
              When we can make the neuron in the layer to be different, we can it breaking symmetry.
            </p>
          </p>
          <Title label="Regularization" />
          <PassageTitle label="L2 Regularization" />
          <p>
            Often we will use the L2 regularization. Which is also called "Frobenius Norm" and "Weight Decay". When we add the L2, the equation will 
            becomes
            {String.raw`\begin{align}
            & J(\hat{y}, y) = \frac{1}{m} * \sum_{i=1}^{m} l(\hat{y}^{[i]}, y^{[i]}) + \sum_{l=1}^{L} \frac{\lambda}{2m} * ||w^{[l]}||^2 \\
            & \frac{\partial{J(\hat{y}, y)}}{\partial{w}} = \text{original dw} + \frac{\lambda}{m} * w^{[l]}
            \end{align}`}
            As you can see our dW has added a negative term. The gradient descent will decrease the w more. It will shrink the weight at each iteration.
          </p>
          <PassageTitle label="Dropout" />
          <p>
            In the training phase, each neuron has a probability p that will be ignored during the forward and backward 
            propagation. 
            <FancyBox link="https://drive.google.com/uc?id=1XgHexw3TKmZJ5eDcv8nq6mpYV2oxvWbC" caption="Dropout" alt="Dropout" />
            Below I will give an example how it works. Suppose we set p = 20%. And in the layer that we are discussing has 3 neurons.
            {String.raw`\begin{align}
            p & = 0.2 \\
            n^{[l]} & = 3 \\
            d^{[l]} & = np.random.rand(3) < 1-0.2, \text{d is a boolean array} \\
            a^{[l-1]} & = d^{[l]} * a^{[l-1]} \\
            z^{[l]} & = (/W{[l]} a^{[l-1]} + b^{[l]}) / (1-0.2)
            \end{align}`}
            You can see from the above, we divide z by 0.8. The reason for that is we want to retain the expected value of the z. As a is expected to 
            have 20% value become 0, we divide z by 0.8 to keep the expected value. Notice that as we have scale the z, the gradient also has to be scaled 
            by dividing 0.8. However, when we are doing prediction, we will not perform dropout. 
            That is, we will not ignore neurons randomly. Also, we will remove the 0.8 factor.
            <MinorTitle label="Notice about Dropout" />
            <p>
              When using dropout, as some of the neuron will be ignored during the forward and backward propagation process, the time for it to converge 
              will increase significantly. However, the training time for each epoch will be faster.
            </p>
            <p>
              The cost function \(J()\) is no longer well defined as the cost function is different fro each epoch. Therefore, dont plot the cost function to 
              monitor the improvement of performance. 
            </p>
            <MinorTitle label="Intuition" />
            <p>
              First using a smaller network will have a regularize
            </p>
            <p>
              We cannot rely too much on any one feature. It will shrink the weight for each input as there will be some probability that the input is ignored.
            </p>

          </p>
        </Page>
      )}}

export default HomePage;