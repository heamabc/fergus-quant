import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
        return (
        <Page>
            <Mathjex />
            <Title label="Global Minimum Variance" />
            <p>
                The global minimum variance portfolio is the leftest one on the graph. It is the lowest risk portfolio 
                we can achieve by constructing a portfolio with our stocks. To find the Global Minimum variance, we have 
                the below equation.
                {String.raw`
                \begin{align}
                & \text{min     } \sigma^2 = w^T \Sigma w \\
                & \text{s.t.    } w^t\mathbf{1} = 1
                \end{align}
                `}
                The Lagrangian of the above problem is
                {String.raw`
                $$
                L(w,\lambda) =  w^T \Sigma w + \lambda(w^t\mathbf{1} - 1)
                $$`}
                Then, we can find the first order condition
                {String.raw`
                $$
                \begin{align}
                & \frac{\partial L}{\partial w} = 2 \Sigma w + \lambda \mathbf{1} = 0 \tag{i} \\
                &  \frac{\partial L}{\partial \lambda} = w^T\mathbf{1} - 1 = 0 \tag{ii}
                \end{align}
                $$`}
                Here, we have 2 equations and 2 unknowns. So the problem is solvable. 
                From equation (i), we can first calculate the value of w.
                {String.raw`$$
                w = -\frac{1}{2}\lambda\Sigma^{-1}\mathbf{1} \tag{iii}
                $$`}
                Then use the euqation (ii)
                {String.raw`$$
                \begin{align}
                & w^T \mathbf{1} = 1 \\
               & \mathbf{1}^Tw = 1 \\
               & \mathbf{1}^T (-\frac{1}{2}\lambda\Sigma^{-1}\mathbf{1}) = 1 \\
               & \lambda = \frac{-2}{ \mathbf{1}^T\Sigma^{-1}\mathbf{1}} \tag{iv}
               \end{align}
                $$`}
                Finally, we can substitute (iv) to (iii) to find the value of w.
                {String.raw`$$
                \begin{align}
                w & = -\frac{1}{2}\lambda\Sigma^{-1}\mathbf{1} \\
                & = -\frac{1}{2} \frac{-2}{ \mathbf{1}^T\Sigma^{-1}\mathbf{1}} \Sigma^{-1}\mathbf{1} \\
                & = \frac{\Sigma^{-1}\mathbf{1}}{ \mathbf{1}^T\Sigma^{-1}\mathbf{1}}  
                \end{align}
                $$`}
                This is the weight that we can achieve the minimum variance.
            </p>
            <Title label="Efficient Portfolio" />
            <p>
                Efficient portoflio means the highest expected return when given a level of risk. Also means 
                the lowest level of risk when given an expected return. Therefore, we have 2 optimization meaning the 
                same thing. We first see the first optimization problem, higest return given risk.
                {String.raw`
                \begin{align}
                \text{max  }\mu_p & = w^T\mu \\
                \text{s.t.    }\sigma_p^2 & = w^T\Sigma w= \sigma_0 = \text{target risk} \\
                w^T\mathbf{1} & = 1
                \end{align}`}
                To solve the problem, the second optimization problem will be more convinient. The second problem is to find 
                the lowest level of risk when given an expected return.
                {String.raw`
                \begin{align}
                \text{max  }\sigma^2_p & = w^T\Sigma w \\
                \text{s.t.    }\mu_p & = w^T\mu= \mu_0 = \text{target return} \\
                w^T\mathbf{1} & = 1
                \end{align}`}
                The Lagrangian function of the second problem is
                {String.raw`$$ 
                L(w, \lambda_1, \lambda_2) = w^T\Sigma w + \lambda_1(w^T\mu - \mu_0) + \lambda_2(w^T\mathbf{1} - 1)
                $$`}
                Then find the First Order Condition (FOC):
                {String.raw`
                \begin{align}
                & \frac{\partial L}{\partial w} = 2 \Sigma w + \lambda_1 \mu + \lambda_2 \mathbf{1} = 0 \tag{i} \\
                & \frac{\partial L}{\partial \lambda_1} = w^T\mu - \mu_0 = 0  \\
                & \frac{\partial L}{\partial \lambda_2} = w^T\mathbf{1} - 1 = 0
                \end{align} `}
                Luckily, we have 3 equations 3 unknowns. We can solve the equation. From the above FOC, we can make the below 
                linear system.
                {String.raw`$$
                \left[\begin{matrix}
                2\Sigma & \mu & \mathbf{1} \\
                \mu^T & 0 & 0 \\
                \mathbf{1} & 0 & 0
                \end{matrix}\right] 
                \left[\begin{matrix}
                w \\
                \lambda_1 \\
                \lambda_2
                \end{matrix}\right] 
                =
                \left[\begin{matrix}
                \mathbf{0} \\
                \mu_0  \\
                1
                \end{matrix}\right] 
                $$`}
                If we solve the system, we can obtian the weight. (<code>numpy.linalg.solve</code>)
            </p>
            <Title label="Efficient Frontier" />
            <p>
                Efficient frontier is a set of portfolios that achieve the lowest volatility for every given expected return. 
                As we have just derived the efficient portfolio for a specific expected return, we can easily construct the efficient 
                frontier by iterating over the expected return.
                <p>
                    A smart way to generate the efficient frontier is to utilize the <a href="https://en.wikipedia.org/wiki/Modern_portfolio_theory#Two_mutual_fund_theorem" >Two mutual fund theorem</a>. 
                    The theorem states that we can achieve any portfolio on the efficient frontier by holding any two of the 
                    efficient portfolios. That is, we can construct the efficient frontier using a linear combination of the previous 
                    two portfolios.
                </p>
                <p>
                    Let \(w_x\) be the weight of GMV portfolio and \(w_y\) be the weight of maximum expected return portfolio. Let 
                    \(\alpha\) be the weight investing in GMV portfolio. Our portfolio return will become 
                    {String.raw`\begin{align}
                    \mu_p & = \alpha \mu_x + ( 1 - \alpha) \mu_y \\ 
                    & = \alpha w_x \mu + ( 1 - \alpha) w_y \mu
                    \end{align}`}
                    If we are given a target expected return, we only have one unknown in the above linear system. Therefore, we can find the 
                    \(\alpha\). let \(\mu_0\) be the target return.
                    {String.raw`\begin{align}
                    \mu_0 & = \alpha w_x \mu + ( 1 - \alpha) w_y \mu \\
                    \alpha & = \frac{\mu_0 - w_y \mu}{w_x \mu - w_y \mu}
                    \end{align}`}
                </p>
                <Title label="Tangency Portfolio" />
                <p>
                    When risk-free asset is introduced, the tangency portfolio is the highest sharpe ratio portfolio. Denote return of 
                    risk-free aset as \(r_f\). We have the below optimization probelm.
                    {String.raw`$$
                    \begin{align}
                    \underbrace{max}_{w_t} \frac{\mu_p - r_f}{\sigma_p} & = \frac{w_t * \mu -r_f}{(w_t^T \Sigma w_t)^\frac{1}{2}} \\
                    \text{s.t. } w_t^T \mathbf{1} & = 1
                    \end{align}
                    $$`}
                </p>
            </p>
        </Page>
)}}

export default HomePage;