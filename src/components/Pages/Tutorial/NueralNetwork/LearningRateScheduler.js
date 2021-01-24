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
          <Title label="Learning Rate Scheduler" />
          <p>
            The learning rate in neural network controls how big a step we take when we are performing gradient descent. The learning rate 
            will scale the magnitude of the gradient and thus controls how we adjust the weight to minimize the loss.
          </p>
          <p>
            Suppose we have a loss function\( J() \) and our parameter\(W\). We will adjust the parameter for each epoch in this way.
            {String.raw`$$
            W := W - \alpha \frac{\partial J(W)}{\partial W}
            $$`}
            , where{String.raw`\( \alpha \)`} is the learning rate
          </p>

          <PassageTitle label="Fixed Learning rate" />
          <FancyBox style={{height:500, width:1000}}caption="lr" alt="lr" link="https://drive.google.com/uc?id=1FxJ94hYhmgKc9tRn-BxHAVJ-YnnMsI8y"/>
          <PassageTitle label="Learning Rate Annealing" />
          <p>
            Learning rate annealing is just the fancy way to say decaying learning rate in the neural network. It starts with a relatively high learning 
            rate and gradually lowering the learning rate during training.
          </p>
          <p>
            The intuition behind this is initially we might be far apart from the minimum of the loss function and we want to have a quick gradient 
            descent toward the minimum. Until we reach a good enough range to the minimum, we would want to slow down the gradient descent so that 
            we can converge to the loss more accurately.
          </p>
          <PassageTitle label="Cyclical Learning Rate" />
          <p>
            Instead of using a linearly or exponentially decreasing value, we let the learning rate vary within a range of values.
            The Cyclical learning rate (CLR) method first set a definite range of learning rates, then cyclically vary the learning
            rates from the defined range with a constant cycle (say 10 epochs a cycle).
          </p>
          <p>
            What's more, is that we can also apply the learning rate annealing in CLR. We can decay the range of value that the learning 
            rates vary within and thus acheive the effect of learning rate annealing.
          </p>
          <FancyBox style={{height:800, width:600}}caption="lr" alt="lr" link="https://drive.google.com/uc?id=17zXaDgMogh0vYhcrrL9WLC4knEvsi36f" />
          <p>
            The benefit of CLR can be two-folds. The first is better generalization and the second is the escape from saddle point.
          </p>
          <p>
            There is an interest effect about cyclical learning rate is that as the learning rate increase in a cycle, the loss will increase. However, 
            the idea of CLR is that although it has short term negative effect, it can achieve a longer term beneficial effect.
          </p>
          <p>
            Our gaol is to generalize data with our model. A good generalization should be robust that small changes to the network's parameters
            dont cause drastic changes to performance. Therefore, a sharp minima in loss function will lead to poor generalization as new 
            unseen data may cause drastic change in result. Increasing the learning rate can let the gradient descent process jump out of the 
            sharp minima and lead to some other convergence.
          </p>
          <p>
            Another benefit of CLR is allowing us for more rapid traversal of saddle point. As you can see from the below image, 
            we are at the saddle point at the red dot. The gradient will be very small at this point and we can still go lower to the 
            minima. If we do not increase learning rate at this point, we will be stucked at this point for a long time. However, CLR 
            allow us to increase the learning rate in the training process and thus can escape from saddle point faster.
          </p>
          <FancyBox style={{height:600, width:900}}caption="Saddle Point" alt="Saddle Point" link="https://drive.google.com/uc?id=1-hvLigYCWStfIX62MwDfY3LismyX0-TL" />
        </Page>
)}}

export default HomePage;