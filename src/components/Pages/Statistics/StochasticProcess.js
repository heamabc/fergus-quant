import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'
import '../css/AllPages.scss';

class HomePage extends Component {  
      render() {
        return (
            <Page>
                <Mathjex />
                <Title label="Markov Chain and Martingale" />
                <PassageTitle label="Situation" />
                <p>
                    Suppose we are tossing a coin, with outcome{String.raw`\( Z_i \in \left\{1,-1\right\} \)`}. If it is a 
                    head, then we win $1, otherwise we lose $1. As each toss is independent, we can easily prove that 
                    {String.raw`$$ E[Z_i] = 0, E[Z_i^2]=1,E[Z_iZ_k]=0 $$`}
                    Next, we have a variable{String.raw`\( S_i \)`} indicating the money that we won. That is,
                    {String.raw`$$ S_i = \sum^{i}_{k=1}{Z_i} $$`}
                    From the below graph, we can see that S is a random walk!
                    <FancyBox caption="S" alt="S" link="https://drive.google.com/uc?id=1ATmKHs4-83hsp3iFdibqPnm4QmxMBQ28" />
                    Then we can easily prove that
                    {String.raw`$$ E[S_i] = 0, E[S_i^2] = E[Z_1^2 + 2Z_1Z_2 + \cdots] = i $$`}

                </p>

                <PassageTitle label="Conclusion" />
                <p>
                    In short, Markov chain means that the probability of the future states are independent of any previous state, except
                    the current state. The Martingale the future expectation of the stochastic process is equal to the current value.
                </p>
                <Title label="Stochastic Process" />
                <PassageTitle label="Stochastic Differential Equation (SDE)" />
                <p>
                    Consider a function x(t) which changes according to a function f with t, and an initial condition 
                    {String.raw`\( x(0)=x_0 \)`}. The ordinary different equation (ODE) will become
                    {String.raw`$$  \frac{dx(t)}{dt}  = f(x,t) \text { , \(x(0)=x_0\)} \tag{1} $$`}
                    In practice, There will be a lot of disturbance and the projectory from the ODE is not accurate. It is
                    reasonable to modify the ODE with some random effect. The equation will become
                    {String.raw`$$ \frac{dx(t)}{dt}  = f(x,t) + \underbrace{g(x,t) \epsilon(t)}_{disturbance} \text { , \(x(0)=x_0\)} \tag{2} $$`}
                    where {String.raw`\( \epsilon(t) \)`} is some "white noise".
                </p>
                <p>
                    Let us rewrite (2) by multiplying "dt" and use {String.raw`\( \frac{dW(t)}{dt} = \epsilon(t) \)`}, where W(t) is a Brownian motion
                    , the equation can be expressed as
                    {String.raw`
                    \begin{align}
                    \frac{dx(t)}{dt} & = f(x,t) + g(x,t) \epsilon(t) \\
                    \frac{dx(t)}{dt} & =  f(x,t) + g(x,t) \frac{dW(t)}{dt} \\
                    dx(t) & = f(x,t)dt + g(x,t)dW(t) \text { , \(x(0)=x_0\)} \tag{3}
                    \end{align}
                    `}
                    And this is it. This is an SDE! To solve this equation, integration can help us.
                    {String.raw`$$ x(t) = x_0 +  \int_{0}^{t} f(x,s) ds  + \int_{0}^{t} g(x,s) dW(s) \tag{4} $$`}
                    Here you can see we have an W(s) indicating the brownian motion. Let's jump into this first!
                </p>
                
                <MinorTitle label="Relation to Ordinary Differential Equation" />
                <p>
                    If we set the noise coefficient of an SDE \(g(x,t) =0, \forall t\)  . Then it will become an ODE.
                </p>
                <Title label="Brownian Motion" />
                <PassageTitle label="Definition" />
                <p>
                    A stochastic process W(t) is called Brownina motion or Weiner process if
                    {String.raw`\begin{align}
                    & (1) \ \ \ W(0) = 0 \\
                    & (2) \ \ \ W(t) - W(s)  \sim N(0, t-s) \text{ for } t \le s \le 0 \\
                    & (3) \ \ \  \text{Increments of \( W(t) \) is independent}
                    \end{align}`}
                </p>
                <PassageTitle label="Properties" />
                <p>
                    <ul>
                        <li>Continuous everywhere but non-differentiable nowhere.</li>
                        <li>Have both Markov and Martingale properties</li>
                    </ul>
                </p>
                <Title label="Geometric Brownian Motion" />
                <p>
                    Often the asset price is modeled by a GBM, the SDE of GBM is as below,
                    {String.raw`$$ dS(t)=\mu S(t)dt+\sigma S(t)dB(t) $$`}
                    In the model, there are two constants. The \(\mu\) and the \(\sigma\). They represent the drift and
                    volatility of the asset respectively.
                </p>
                <Title label="Stochastic integral" />
                <p>
                    {String.raw`\begin{align} 
                    dx(t) & = f(x,t)dt + g(x,t)dW(t) \text { , \(x(0)=x_0\)} \\
                    x(t) & = x_0 +  \underbrace{\int_{0}^{t} f(x,s) ds}_{\text{Riemann Integral}}  + \underbrace{\int_{0}^{t} g(x,s) dW(s)}_{text{Stochastic Integral}} 
                    \end{align}`}
                    The stochastic integral can not be solved simply as the derivatives pf bronian motion does not exist.
                </p>
                <PassageTitle label="Bounded Variation" />
                <p>
                    In normal Riemann integration, 
                    {String.raw`$$
                    \int_{a}^{b}h(t)dG(t) \approx  \sum_{j=1}^n h(t_{j-1})(G(t_j)-G(t_{j-1}))
                    $$`}
                    The needed condition for the existence of above integrals is that the variation of G is bounded (finite) over 
                    \( [a,b] \):
                    {String.raw`$$
                    V(G)[a,b]\stackrel{\mathrm{def}}{=} \lim_{a \to \infty} \sum_{j=1}^n | G(t_j) - G(t_{j-1}) < \infty
                    $$`} 
                    The limit here means that we take finer and finer partiion of [a,b]. Intuitively, we can imagine that the variation of Brownian 
                    Motion is not bounded. Therefore, there does not exists a Riemann integral for the integration of Brownian motion.
                </p>
                <PassageTitle label="Ito Integral" />
                <p>
                    Ito integral can help us solve the stochastic integral. First, a stochastic integral can be defined by
                    {String.raw`\begin{align} 
                    I(t) & = \int_{0}^{t} Y(s) dW(s) \\
                    & = \lim_{n \to \infty} \sum_{i=1}^{n} Y_{i-1}(W(t_i) - W(t_{i-1}))
                    \end{align}`}
                    Ito shows that this limit does exist.
                </p>
                <PassageTitle label="Ito Rule" />
                <p>
                    If f = f(x) is a twice differentiable function with a continuous second derivative \( f''(x) \), then
                    {String.raw`\begin{align}
                    df(W(t)) & = f'(W(t))d(W(t)) + \frac{1}{2}f''(W(t))dt, \text{ differential form} \\
                    f(W(t)) & = f(W(0)) + \int_0^t f'(W(s))dW(s) + \frac{1}{2} \int_0^t f''(W(s))ds, \text{ integral form}
                    \end{align}`}
                    if \(f = f(t,x)\) is a function such that both {String.raw`\(\frac{\partial{f}}{\partial{t}}(t,x)\)`} and 
                    {String.raw`\(\frac{\partial{f}^2}{\partial{x^2}}(t,x)\)`} are continuous, then 
                    {String.raw`\begin{align}
                    df(t, W(t)) & = \frac{\partial{f}}{\partial{x}}dW(t) + (\frac{\partial{f}}{\partial{t}} + \frac{1}{2}\frac{\partial{f}^2}{\partial{x^2}})dt, \text{ differential form} \\
                    f(t, W(t)) & = f(0,0) + \int_0^t \frac{\partial{f}}{\partial{x}} (s, W(s))dW(s) + \int_0^t \frac{\partial{f}}{\partial{t}} (s, W(s))ds + \frac{1}{2} \int_0^t \frac{\partial{f}^2}{\partial{x^2}} (s, W(s))ds, \text{ integral form} 
                    \end{align}`}
                </p>
            </Page>

        )}}

export default HomePage;