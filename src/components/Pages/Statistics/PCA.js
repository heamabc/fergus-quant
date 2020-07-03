import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Definition" />
          <p>
            PCA is a technique to reduce the dimensiionality of a dataset. It finds the best linear subspace and project the data on the subspace such that 
            it can remain as much variation as possible after the transformation. The main property of PCA is that each principal component will become orthogonal. Meaning 
            that they will be independent.
          </p>
          <Title label="Linear Algebra Background" />
          <PassageTitle label="Eigenvector and Eigenvalue" />
          <p>
            We first start with this simple equation. When we have a symmetric matrix\(A\) (It means that 
            \(A^T = A\)), then there exists some lambda and vector v such that  
          </p>
          {String.raw`$$
          \underbrace{\mathbf{A}}_{(n,n)} \underbrace{\mathbf{v}}_{(n,1)} = \lambda \underbrace{\mathbf{v}}_{(n,1)} \tag{1}
          $$`}
          <p>
            where {String.raw`\( \mathbf{v} \)`} is eigenvalue and {String.raw`\( \lambda \)`} is eigenvector. We can also see that
          </p>
          {String.raw`\begin{align}
          & \mathbf{A} \mathbf{v} = \lambda \mathbf{v} \\
          & ( \mathbf{A} - \lambda \mathbf{I} ) \mathbf{v} = 0
          \end{align}`}
          <p>
            Obvious, {String.raw`\( \lambda = 0 \)`} will be a solution. It is called trivial solution. Here we want non-trivial solution.
            For the above homogenous system to has non-trivial solution, the below condition must be fulfilled.
          </p>
          {String.raw`$$
          |\mathbf{A} - \lambda \mathbf{I}| = 0
          $$`}
          <p>
            Hence, from the above system, we can find lambda. After finding the lambda, we can plug in the lambda to (1) and solve vector
            v.
          </p>
          <PassageTitle label="SSCP Matrix"/>
          <p>
            The sum-of-squared-and-cross-product matrix (\(A^TA\) or \(AA^T\)) is a very usefl matrix in this topic. For every 
            {String.raw`\( m \times n \)`} matrix\(A\), the SSCP matrix is symmetric. (Both {String.raw`\( m \times m \)`}
             matrix \(A^TA\) and {String.raw`\( n \times n \)`} matrix \(AA^T\)).
          </p>
          <PassageTitle label="Elements of SSCP Matrix" />
          <p>
              The element of SSCP matrix is as below
              {String.raw`$$
              S_{i,j} = a_ia_j
              $$`}
          </p>
          <Title label="Procedure of PCA" />
          <p>
            1. We have a matrix A where A is in the form as below,
            {String.raw`$$ A = \begin{pmatrix}
            a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
            a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
            \vdots  & \vdots  & \ddots & \vdots  \\
            a_{n,1} & a_{n,2} & \cdots & a_{n,n}
            \end{pmatrix} $$`}
            2. We calculate the column mean vector\(\mu\) where
            {String.raw`\begin{align}
            \mu_j = \sum_{i=1}^{n}{a_{i,j}}, \text{for } j \le n, \\
            \mu = 
            \begin{pmatrix}
            \vert & \vert & & \vert\\
            \mu_1 & \mu_2 & \cdots & \mu_n \\
            \vert & \vert & & \vert
            \end{pmatrix}
            \end{align}`}
            3. We center matrix\(A\) by subtracting \(\mu\),
            {String.raw`\begin{align}
            B & = A - \mu \\
            & = \begin{pmatrix}
            a_{1,1} - \mu_1 & a_{1,2} - \mu_2 & \cdots & a_{1,n} - \mu_n \\
            a_{2,1} - \mu_1 & a_{2,2} - \mu_2 & \cdots & a_{2,n} - \mu_n \\
            \vdots  & \vdots  & \ddots & \vdots  \\
            a_{n,1} - \mu_1 & a_{n,2} - \mu_2 & \cdots & a_{n,n} - \mu_n
            \end{pmatrix}
            \end{align}`}
            4. We calculate the SSCP matrix of\(B\) and divide it by \(n-1\). As\(B\) is centered, this is equivalent to calculating 
            the covariance matrix of\(A\). (Notice that sample variance of a variable, {String.raw`\(Var(X) = 
            \frac{1}{n-1}\sum_{i}(X_i - \mu_x)^2 \)`} and sample covariance of variable X,Y, {String.raw`\(Cov(X,Y) = 
            \frac{1}{n-1} \sum_{i}(X_i-\mu_x)(Y_i-\mu_Y)  \)`})
            {String.raw`\begin{align}
            S & = \frac{1}{n-1} B^TB \\
            & = \frac{1}{n-1} \begin{pmatrix}
            (a_{1,1} - \mu_1)^2 & (a_{1,1} - \mu_1) (a_{1,2} - \mu_2) & \cdots & (a_{1,1} - \mu_1) (a_{1,n} - \mu_n) \\
            (a_{2,1} - \mu_1)(a_{2,2} - \mu_2) & (a_{2,2} - \mu_2)^2 & \cdots & (a_{2,n} - \mu_n)(a_{2,2} - \mu_2) \\
            \vdots  & \vdots  & \ddots & \vdots  \\
            (a_{n,1} - \mu_1)(a_{n,n} - \mu_n) & (a_{n,2} - \mu_2)(a_{n,n} - \mu_n) & \cdots & (a_{n,n} - \mu_n)^2
            \end{pmatrix}
            \end{align}`}
            5. We calculate the eigenvalue and eigenvector of the covariance matrix. Then we place the eigenvalue into a descending
            order.
            {String.raw`\begin{align}
            & Su = \lambda u \\ 
            & U = 
            \begin{pmatrix}
            \vert & \vert & & \vert\\
            u_1 & u_2 & \cdots & u_n \\
            \vert & \vert & & \vert
            \end{pmatrix}
            \end{align}`}
            6. Choose the top k eigenvector and multiply the raw data.
            {String.raw`$$
            A_{\text{new}} = U A
            $$`}
          </p>
          <Title label="Math Behind PCA" />
          <p>
            Mathematically, PCA is want to project the data into a lower dimenstion while keeping as much 
            the variance of the data as possible. The variance can be calculated as below
            {String.raw`\begin{align}
            \sigma^2_u & = \frac{1}{n-1} \sum_i (x_i \cdot u)^2 \\
            & = \frac{1}{n-1} (x u)^T (x u) \\
            & = \frac{1}{n-1} u^T x^T x u \\
            & = u^T \frac{x^T x}{n-1} u \\
            & = u^T S u \\
            \end{align}`}
            Next, we add a constraint to the maximization. We only look at unit vectors of w. Therefore,
            {String.raw`\begin{align}
            \text{max } u^T S u \\
            \text{s.t. } u^T u = 1
            \end{align}`}
            Using the method of Lagrange multipliers, we can find the maximum.
            {String.raw`\begin{align}
            & L(u, \lambda) = u^T S u - \lambda(u^T u - 1) \\ 
            & \frac{\partial L }{\partial \lambda} = u^T u - 1 \\
            & \frac{\partial L }{\partial u} = 2Su - 2 \lambda u
            \end{align}`}
            Setting the partial derivatives to 0 can help us find the solution.
            {String.raw`\begin{align}
            & u^T u - 1 = 0 \\
            & u^T u = 1 \\
            & 2Su - 2 \lambda u = 0 \\
            & Su = \lambda u
            \end{align}`}
            We can see the last equation is exactly the eigen decomposition of the covariance matrix. Thus, the eigenvector w 
            and the largest eigenvalue \( \lambda \) is the solution.
          </p>
        </Page>
      )}}

export default HomePage;