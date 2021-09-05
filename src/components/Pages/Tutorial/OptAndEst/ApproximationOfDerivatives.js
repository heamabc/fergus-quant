import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Approximation of Derivatives" />
          <p>
              I a lot of real life problem, we often need to know the derivative of a function at some point. However, the function might be 
              extremely difficult and thus the derivative is hard to calculate. Compute or even human cannot derive a clean derivative solution
              for every equation. However, computer has great computing power and thus can approximate the derivative through a lot of calculation.
          </p>
          <p>
              There are a lot of way for a computer to compute the derivatves, below we will introduce several of the ways computers approach it.
          </p>
          <PassageTitle label="Finite Differencing" />
          <p>
              It is the most simple yet brute force solution to find the derivative of a function. Remember that the equation of the derivative of
              a function is 
          </p>
          {String.raw`$$ f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h} $$`}
          <p>
              With finite differencing approach, we would like to compute the value of the above formula, but with finite differencing. That is
          </p>
          {String.raw`$$ f'(x) \approx \frac{f(x+h) - f(x)}{h}, \text{where } h>0 \text{ and} \text{ h is small number} $$`}
          <p>
              For h being a small number, there generally will be three ways for approximating the derivative of a funtion.
          </p>
          <MinorTitle label="Forward Differencing" />
          {String.raw`$$ f'(x) \approx \frac{f(x+h) - f(x)}{h} $$`}
          <MinorTitle label="Backward Differencing" />
          {String.raw`$$ f'(x) \approx \frac{f(x) - f(x-h)}{h} $$`}
          <MinorTitle label="Central Differencing" />
          {String.raw`$$ f'(x) \approx \frac{f(x+h) - f(x-h)}{2h} $$`}
          <p>
              Given that there are three different methods for approximating the derivative, which one is the best? Remember that according Taylor
              Theorem, we can approximate a function at a point.
          </p>
          {String.raw`$$ f(x+h) = f(x) + f'(x)h + \frac{h^2}{2}f''(x+h_1) + \frac{h^3}{6}f'''(x+h_2) $$`}
          {String.raw`$$ f(x-h) = f(x) - f'(x)h + \frac{h^2}{2}f''(x-h_1) - \frac{h^3}{6}f'''(x-h_2)$$`}
          <p>
            Therefore, if we do some operation on the above formula, and we can show the estimation error of the forward differencing method.
          </p>
          {String.raw`$$\begin{align} 
          \frac{f(x+h) - f(x)}{h} &= f'(x) + \frac{h}{2}f''(x+h_1) + \frac{h^2}{6}f'''(x+h_2) \\
                                &= f'(x) + O(h)
          \end{align}$$`}
          <p>
            As we can see from the above formula, the error of forward differencing approximation is\(O(h)\). Similarly, we can also prove that
            the estimation error of backward differencing is\(O(h)\). Let us take a look at what the estimation error of central differencing is.
            If we calculate\(f(x+h)-f(x-h)\)
          </p>
          {String.raw`\begin{align}
          f(x+h) - f(x-h) &= f(x) + f'(x)h + \frac{h^2}{2}f''(x+h_1) + \frac{h^3}{6}f'''(x+h_2) - (f(x) - f'(x)h + \frac{h^2}{2}f''(x-h_1) - \frac{h^3}{6}f'''(x-h_2)) \\
          &= 2f'(x)h + \frac{h^3}{12}(f'''(x+h_2) + f'''(x-h_2)) \\
          f'(x) &= \frac{f(x+h) - f(x-h)}{2h} - \frac{h^2}{12}(f'''(x+h_2) + f'''(x-h_2))
          \end{align}`}
          <p>
              Therefore, the error of central differencing is\(O(h^2)\). Remember that h is a very small number, therefore the error of central differencing
              is smaller than both forward differencing and backward differencing. Hence we can say that out of the three approximation method, central 
              differencing is the best one.
          </p>
          <PassageTitle label="Example" />
          <p>
              To better understand what finite differencing is, we can see some of the example here. Graphically, the three differencing method is
              as below
            <FancyBox link="https://drive.google.com/uc?id=1GiEzjvlsBoGm08b3LX3p9roO-hjqlMRZ"  caption="finite differencing" alt="finite differencing" />
            The blue line is central differencing, while the blue line and red line are backward differencing and forward differencing respectively. In 
            the graph, we can see that the slope of central differencing is very similar to the actual tangent line on x.
          </p>

          <PassageTitle label='Higher Order Derivative Apporixmation' />
          <p>
              Similarly by using the Taylor Theorem, we can approximate the value of higher-order derivative.
          </p>
          {String.raw`$$ f''(x) \approx \frac{f(x+h) - 2f(x) + f(x-h)}{h^2} $$`}
        </Page>
)}}

export default HomePage;