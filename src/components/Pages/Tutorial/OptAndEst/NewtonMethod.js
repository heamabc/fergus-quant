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
          <Title label="Optimization and Newton's Method" />
          <p>
              Using Newton's method to find maxima and minima of a function is a pretty classical approach. Many of the optimization algorithm 
              people using now is somehow based on the Newton's method. It is thus important to understand what the Newton's method is and how 
              it could help us find maxima and minima.
          </p>
          <p>
              When we are given a function\( f(x) \)and it's derivative\( f'(x) \). And we want to know where the function equals to zero \( f(x) = 0 \). How should we
              do it?
          </p>
          <p>
              Remember in calculus, there is one way we can do it. We find an\( x \) where it meet all of the below properties.
          </p>
          <ul>
                  <li>\(f'(x) = 0\), it means that at point \(x\),\(f(x)\) is either local maximum, local minimum, or saddle </li>
                  <li>{String.raw`\(f''(x) > 0 => \)`} Concave upward, {String.raw`\(f''(x) < 0 => \)`} Concave downward, {String.raw`\(f''(x) = 0 => \)`} Saddle</li>
                  <li>{String.raw`\(f''(x) > 0 => f(x) = \)`} local maximum , {String.raw`\(f''(x) < 0 => f(x) = \)`} local minimum , {String.raw`\(f''(x) = 0 => f(x) = \)`} saddle </li>
              </ul>
          <p>
              Therefore, to find the local mixima/minima, there are two steps we need to do
          </p>
          <ol>
              <li>Find\(x\) where \(f'(x) = 0\)</li>
              <li>Once we find such point, calculate\(f''(x)\) to classify the point</li>
          </ol>
          <p>
              But how to can we find such point where\(f'(x) = 0\)? Newton's method can help us.
          </p>
          <PassageTitle label='Newton Method'/>
          <p>
              Newton method can help us find\(x\) where\(f(x) = 0\). The process is called finding the root. Imagine we want to find
              \(f(x) = 0\) for the below function\(f(x)\).
              <FancyBox link="https://drive.google.com/uc?id=1lnyl6Ega7Sd4RJmv5yHxkajtE5-3ucqY"  caption="f(x)" alt="f(x)" />
              We start with our initial guess\(x_0\), and we can see that\(f(x0)\) is quite far away from being zero. What can we do 
              next to get close to the point zero?
          </p>
          <p>
              Notice that the point where the tangent line to\(f(x)\) at\(x_0\) crosses the X-axis is closer to the point zero this time. 
              So to make a sensible guess for the next step, we could use the x value of the point that crosses the X-axis, which is\(x_1\).
          </p>
          <p>
              We could imagine for each point on\(f(x)\), if we calculate the tangent line for that point, and find out the point where it 
              crosses the X-axis, and we use that point as our next guess. We can get closer and closer to the point zero. It is easy to 
              imagine that after numbers of iteration of guesses, we can get a fairly gauge of where\(f(x)=0\)
          </p>
          <p>
              Mathematically, the equation of the tangent line of\(f(x)\) at \(x_0\) is 
          </p>
          {String.raw`$$y = f(x_0) + f'(x_0)(x-x_0)$$`}
          <p>
              To solve where this equation equals to zero, we would have the below operation.
          </p>
          {String.raw`\begin{align} 
          0 &= f(x_0) + f'(x_0)(x_1-x_0) \\
          x_1-x_0 &= -\frac{f(x_0)}{f'(x_0)} \\
          x_1 &= x_0 -\frac{f(x_0)}{f'(x_0)}
          \end{align}`}
          <p>
              Using this formula, we can quickly calculate our next guess for find the root of the function.
          </p>
          <PassageTitle label="Finding the maxima/minima"/>
          <o>
              The last step is applying the newton method to help us find the maxima and minima. Remember that all we need to do is the 
              find the point where the derivative of the function equals to zero, and calculate the second derivative of that point to 
              classify these critical points. This is exactly the same as finding the root of the first derivative of the function.
          </o>
          {String.raw`$$ x_1 = x_0 - \frac{f'(x_0)}{f''(x_0)} $$`}
          <PassageTitle label="Reference"/>
          <ul>
            <li>https://www.softcover.io/read/bf34ea25/math_for_finance/multivariable_methods#uid331</li>
            <li>https://tutorial.math.lamar.edu/classes/calci/newtonsmethod.aspx</li>
          </ul>
        </Page>
)}}

export default HomePage;