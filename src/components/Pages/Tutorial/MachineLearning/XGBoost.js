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
          <Title label="Gradient Boosting" />
          <PassageTitle label="Regression Decision Tree" />
          <p>
            To understand Gradient Boosting, we must know what is regression decision tree first. You can view a tutorial of  
            <a href='/tutorial/machine-learning/regression-decision-tree/'> regression decision tree</a> first if you do not know much about it.
          </p>
          <PassageTitle label="Ensemble Learning" />
          <p>
            Ensemble learning is the method to combine multiple learning algorithms. It is believe that when combining several learning algorithms, we can 
            achieve a better result than using only one learning algorithm. Overall, there are 2 major ensemble learning method. Namely bagging and boosting.
          </p>
          <MinorTitle label="Bagging" />
          <p>
            Bagging is to have multiple learning algorithms learning independently and in parallel. Then using some deterministic method to combine the results 
            of all the learning algorithms.
          </p>
          <MinorTitle label="Boosting" />
          <p>
            Boosting is to have multiple learning algorithms learning dependently and sequentially.
          </p>
          <Title label="Workflow of Gradient Boosting" />
          
          <Title label="Math behind Gradient Boosting" />
          <p>
            First of all, lets take a look at the mathematical formula for gradient boosting decision tree.
            <FancyBox caption="Math" alt="Math" style={{width:'600px', height:'400px'}} link="https://drive.google.com/uc?id=12NQtFH9d3-h7uxhJofae5Meyfi51cn0v" />
            From the below image, we can clarify the variable above variables. So\( \gamma \) is the prediction of each leaf node, that is the value to assign for the 
            data points that belong to the leaf node. \( R_{'{jm}'} \) is the leaf node region.
            <FancyBox caption="Decision Tree" alt="Decision Tree" link="https://drive.google.com/uc?id=1LU2qyaEjHPgXKFqxskcTgGiYnCBx_MeC" />
            It is hard to conceptuallize what is going on here, let's jump into a numerical example.
          </p>
          
          <PassageTitle label="Numerical Example" />
          <p>
            First we have an initial model\( F_0 \) to produce an initial guess about the data. If the loss function is MSE, we will produce a mean of the 
            y as the mean is a single value that will minimize the MSE function.
          </p>
          <p>
            First, let's assume that we are dealing with a rental data. We know that the size of the apartment is a very useful feature for 
            predicting the rent. So suppose we have the below data.
            <FancyBox caption="Data" alt="Data" style={{width:'200px', height:'200px'}} link="https://drive.google.com/uc?id=1Wt6zj5qfLm_-hQIngMjmTzm2RpY-F1ar"/>
            Then, suppose our loss function is MSE. Our initial guess \(F_0\) about the y will be the mean as the mean is a single value that minimize 
            the MSE. Here \(F_0\) = 1418. After that, we calculate the residual\( y - F_0 \) and make a decision tree\( \Delta_1 \) that train on\( y - F_0 \) as the tree's y.
            <FancyBox caption="Illustration" alt="Illustration" style={{width:'1000px', height:'250px'}} link="https://drive.google.com/uc?id=1Zl5NUC8mvGTfsRQnHBW7ju_e9_87uIgX"/>
            The above process will happen over and over again untill we have reached the constrained number of trees or fulfill the early stopping criteria. You may wonder 
            why the tree splits in this way. The answer is that the tree will split according to whatever its algorithm told it to. For example, gini impurity. The goal of 
            splitting is to minimize the variance within the same node.
            <FancyBox caption="Illustration" alt="Illustration" style={{width:'1000px', height:'250px'}} link="https://drive.google.com/uc?id=1aI0TIaw9OFTlJAdiBP0JUgB-OZwzzYa4"/>
            As we can see from the above table, the MSE of the model become lower and lower. We can imagine that after multiple trees, the MSE will be close to the minimum of the loss 
            function. The process of Gradient Boosting is like gradient descent, after each iteration (tree), we obtain the gradient ( \( \Delta \)), and then we follow the gradient 
            to adjust the parameter to achieve the local minimum of the loss function.
          </p>
          <p>
            One thing to remember is that the decision tree will not be perfect. the prediction of it will not zero out all the loss. It is due to the constrain we set for the 
            decision tree (eg. subsampling, limited levels of tree, etc.). this behaviour is exactly what we want as we want to generalize the data as much as possible. However, 
            we ca expact that the loss will be very close to local minimum if the iteration is enough and the loss will oscillate around the minimum in the last few trees.
          </p>
          <Title label="Loss Function" />
          <p>
            But what is the use of loss function? Why do the prediction of decision trees help us lower the loss? Actually it is the loss function that control the output of decision 
            so that we can have the prediction that will lower our loss.
          </p>
          <p>
            Suppose our loss function is Squared Error, which is a very popular loss function for gradient boosting decision tree. So our loss function is
          </p>
          {String.raw`$$
          L(y,\hat{y}) = \text{Squared Error} = \frac{1}{2}(y-\hat{y})^2
          $$`}
          <p>
            The partial derivative of the loss function is
          </p>
          {String.raw`$$
          \frac{\partial L(y,\hat{y})}{\partial \hat{y}} = y-\hat{y}
          $$`}
          <p>
            Remember that to find the prediction of each leaf node (\( \gamma \)), we have to find it from the below formula
          </p>
          {String.raw`$$
          \gamma = \text{argmin}_\gamma \sum_{x_i \in R_{i,j}} L(y_i, F_{m-1}(x_i) + \gamma)
          $$`}
          <p>
            Substituting our loss function to the formula and expand the summation.
          </p>
          {String.raw`$$
          \sum_{x_i \in R_{i,j}} \frac{1}{2}(y_i-F_{m-1}(x_i) + \gamma)^2 =  \frac{1}{2}((y_1-F_{m-1}(x_1) + \gamma)^2 + (y_2-F_{m-1}(x_2) + \gamma)^2 + \cdots + (y_n-F_{m-1}(x_n) + \gamma)^2)\\
          $$`}
          <p>
            To find the minimum, we would like to take the partial derivative and equate the derivatives to zero.
          </p>
          {String.raw`\begin{align}
          \frac{\partial L(y_i, F_{m-1}(x_i) + \gamma)}{\partial F_{m-1}} & = (y_1-F_{m-1}(x_1) + \gamma) + (y_2-F_{m-1}(x_2) + \gamma) + \cdots + (y_n-F_{m-1}(x_n) + \gamma) = 0 \\
          \gamma & = \frac{(y_1-F_{m-1}(x_1) + \gamma) + (y_2-F_{m-1}(x_2) + \gamma) + \cdots + (y_n-F_{m-1}(x_n) + \gamma)}{n}
          \end{align}`}
          <p>
            Finally, we can see that\gamma should be the average of all the value within the same leaf node. This value is also the gradient we want to 
            adjust in order to achieve the minimum.
          </p>
        </Page>
)}}

export default HomePage;