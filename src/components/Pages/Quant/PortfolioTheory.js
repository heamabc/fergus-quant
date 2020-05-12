import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../css/AllPages.scss';


//TODO Make all image resize automatically
class HomePage extends Component {
  render() {
      const next_line = '\n'
      const tab = ' '
    return (
      <Page>
        <CodeSnippet />
        <Mathjex />
        <Title label="Monte Carlo Simulation of Stock Price"/>
        <p>
            First, we simulate 20 stocks price to examine the portfolio theory. The simulation of stocks price can 
            be done by monte carlo simulation on a geometric brownian motion. I set the initial price as 100. And simulated 
            500 time steps.
            
            <pre className="prettyprint linenums lang=python">
            M = 500 # number of step per dt {next_line}
            sigma = 0.2 # volatility {next_line}
            dt = 1/M {next_line}
            r = 0.1 # risk-free rate {next_line}
            {next_line}
            @jit {next_line}
            def stoch(s0, m): {next_line}
            {tab}    path = np.empty(m) {next_line}
            {tab}    path[0] = s0 {next_line}
            {tab}    gauss = np.random.standard_normal(m) {next_line}
            {tab}    for i in range(1,m): {next_line}
            {tab}{tab}        path[i] = path[i-1] *math.exp((r - 0.5 * sigma ** 2) * dt + sigma * np.sqrt(dt) * gauss[i]) {next_line}
            {tab}    return path {next_line}
            {next_line}
            number_of_stocks = 20 {next_line}
            stocks = np.empty([M,number_of_stocks]) {next_line}
            {next_line}
            for stock_num in range(number_of_stocks): {next_line}
            {tab}    stock = stoch(100, 500) {next_line}
            {tab}    stocks[:,stock_num] = stock {next_line}
                {next_line}
            plt.plot(list(range(M)),stocks) {next_line}
            plt.ylabel('Price') {next_line}
            plt.xlabel('dt') {next_line}
            plt.title('Simulation of 20 Stocks Price') {next_line}
            plt.show()
            </pre>
            This will simulate 20 stocks that follow a geometric brownian motion. We can examine their price from the graph.
            <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1klKgVI-JtwtlkIrxLJAO1GewJ5D2EjWE"  data-caption="Simulation of 20 stocks price">
                <img src="https://drive.google.com/uc?id=1klKgVI-JtwtlkIrxLJAO1GewJ5D2EjWE" alt=""/>
            </a>
        </p>
        <Title label="Monte Carlo Simulation of Portfolio"/>
        <p>
            So now we have 20 stocks. What will be the risk and return of holding a portfolio of these 20 stocks? 
            To examine the risk and return, we will simulate 5000 different weights of these stocks to construct 5000 different portfolios.
            <pre className="prettyprint linenums lang-python">
            stocks_return = (stocks/np.roll(stocks,1,axis=0)-1)[1:] {next_line}
 {next_line}
            mu = np.vstack(stocks_return.mean(axis=0)) {next_line}
            cov = np.cov(stocks_return.T) {next_line}
            corr = np.corrcoef(stocks_return.T) {next_line}
 {next_line}
            n_portfolios = 5000 {next_line}
 {next_line}
            def monte_carlo_portfolio(n_portfolios): {next_line}
            {tab}    port_returns = np.zeros(n_portfolios) {next_line}
            {tab}    port_sds = np.zeros(n_portfolios) {next_line}
 {next_line}
            {tab}    for i in range(n_portfolios): {next_line}
            {tab}{tab}        w = np.random.rand(len(mu)) {next_line}
            {tab}{tab}        w = w/np.sum(w) {next_line}
            {tab}{tab}        port_return = (w.dot(mu)) {next_line}
            {tab}{tab}        port_sd = np.sqrt(w.dot(cov.dot(w))) {next_line}
            {tab}{tab}        port_returns[i] = port_return {next_line}
            {tab}{tab}        port_sds[i] = port_sd {next_line}
            {tab}    return port_returns, port_sds {next_line}
                {next_line}
            port_returns, port_sds = monte_carlo_portfolio(n_portfolios) {next_line}
            {next_line}
            plt.scatter(port_sds,port_returns, s=2) {next_line}
            plt.xlabel("Volatility") {next_line}
            plt.ylabel("Return") {next_line}
            plt.title("5000 Different Portfolios") {next_line}
            plt.show()
            </pre>
            Let's see the graph of the risk and return. We can see a bell shape in the graph.
            <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1x3wA2lCgSLnfmc7W4kOiTE0SJa7CDI6s"  data-caption="5000 Portfolios">
                <img src="https://drive.google.com/uc?id=1x3wA2lCgSLnfmc7W4kOiTE0SJa7CDI6s" alt=""/>
            </a>
        </p>
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
            This is the weight that we can achieve the minimum variance. In python, we can do it in this way.
            <pre className="prettyprint linenums lang-python">
            cov_inv = np.linalg.inv(cov) {next_line}
            GMV_weight = cov_inv.dot(np.ones(number_of_stocks))/np.ones(number_of_stocks).dot(cov_inv).dot(np.ones(number_of_stocks)) {next_line}
            {next_line}
            GMV_return = GMV_weight.dot(mu).item() {next_line}
            GMV_sd = np.sqrt(GMV_weight.dot(cov).dot(GMV_weight)) {next_line}
 {next_line}
            plt.scatter(GMV_sd, GMV_return, color="green") {next_line}
            plt.scatter(port_sds,port_returns, color="blue", s=2) {next_line}
            plt.xlabel("Volatility") {next_line}
            plt.ylabel("Return") {next_line}
            plt.title("5000 Different Portfolios and GMV") {next_line}
            plt.show()
            </pre>
            The graph of 5000 portfolios with GMV is like this. The GMV is at the leftest position of the graph.
            <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1z83lyPyoichl7p6AeCfrTWAj3Yml2xvh"  data-caption="5000 Portfolios & GMV">
                <img src="https://drive.google.com/uc?id=1z83lyPyoichl7p6AeCfrTWAj3Yml2xvh" alt=""/>
            </a>
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
            <pre className="prettyprint linenums lang-python">
            mu_0 = mu.mean() {next_line}
            {next_line}
            top_matrix = np.concatenate((cov, mu, np.vstack(np.ones(number_of_stocks))), axis=1) {next_line} {next_line}
            mid_matrix = np.concatenate((mu.flatten(), np.array([0]), np.array([0]))).reshape(1,top_matrix.shape[1]) {next_line}
            bot_matrix = np.concatenate((np.ones(number_of_stocks), np.array([0]), np.array([0]))).reshape(1,top_matrix.shape[1]) {next_line}
 {next_line}
            A = np.concatenate((top_matrix,mid_matrix,bot_matrix)) {next_line}
            b = np.concatenate((np.zeros(number_of_stocks), [mu_0], [1])) {next_line}
 {next_line}
            z = np.linalg.solve(A,b) {next_line}
            efficient_port_w = z[:number_of_stocks] {next_line}
            lambda_1 = z[-2] {next_line}
            lambda_2 = z[-1] {next_line}
            {next_line}
            efficient_port_return = efficient_port_w.dot(mu).item() {next_line}
            efficient_port_sd = np.sqrt(efficient_port_w.dot(cov).dot(efficient_port_w)) {next_line}
 {next_line}
            plt.scatter(efficient_port_sd,efficient_port_return, color='red', label="Efficient Portfolio") {next_line}
            plt.scatter(GMV_sd, GMV_return, color="green", label="GMV") {next_line}
            plt.scatter(port_sds,port_returns, color="blue", s=2, label="Portfolios") {next_line}
            plt.xlabel("Volatility") {next_line}
            plt.ylabel("Return") {next_line}
            plt.title("5000 Different Portfolios and GMV and Efficient Portfolio") {next_line}
            plt.legend() {next_line}
            plt.show()
            </pre>
            <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1wEIsshzlseFu8pw_rFbTLtYe1GvJkgpE"  data-caption="5000 Portfolios & GMV & Efficient Portfolio">
                <img src="https://drive.google.com/uc?id=1wEIsshzlseFu8pw_rFbTLtYe1GvJkgpE" alt=""/>
            </a>
            
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
                <a data-fancybox="gallery" href="https://drive.google.com/uc?id=1xfQjHQNidJl6l0aARLYORApJ3bWgL9AG"  data-caption="5000 Portfolios & GMV & Efficient Portfolio & Efficient Frontier">
                    <img src="https://drive.google.com/uc?id=1xfQjHQNidJl6l0aARLYORApJ3bWgL9AG" alt=""/>
                </a>
            </p>
            <Title label="Tangency Portfolio" />
            <p>
                When risk-free asset is introduced, the tangency portfolio is the highest sharpe ratio portfolio. Denote return of 
                risk-free aset as \(r_f\). We have the below optimization probelm.
                {String.raw`$$
                \begin{align}
                \underbrace{max}_{w_t} \frac{\mu_p - r_f}{\sigma_p} & = \frac{w_t^T * \mu -r_f}{(w_t^T \Sigma w_t)^\frac{1}{2}} \\
                \text{s.t. } w_t^T \mathbf{1} & = 1
                \end{align}
                $$`}
                The Lagrangian and FOC of this equation is
                {String.raw`$$
                L(w_t,\lambda) = (w_t^T * \mu -r_f) ((w_t^T \Sigma w_t)^{-\frac{1}{2}}) + \lambda (w_t^T \mathbf{1} - 1) \\
                $$`}
                {String.raw`
                \begin{align}
                \frac{\partial{L(t,\lambda)}}{w_t} & = \mu (w_t^T \Sigma w_t)^{-\frac{1}{2}} + 
                (w_t^T * \mu -r_f)(w_t^T \Sigma w_t)^{-\frac{3}{2}}\Sigma w_t + \lambda \mathbf{1} = 0\\
                \frac{\partial{L(t,\lambda)}}{\lambda} & = w_t^T \mathbf{1} - 1 = 0
                \end{align}
                `}
                After tedious linear algebra, it can be shown that
                {String.raw`$$
                w_t = \frac{\Sigma^{-1}(\mathbf{\mu} - r_f \mathbf{1})}{\mathbf{1}^T \Sigma^{-1}(\mathbf{\mu} - r_f \mathbf{1})}
                $$`}
            </p>
        </p>
      </Page>
)}}

export default HomePage;