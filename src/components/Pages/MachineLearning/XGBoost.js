import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <Title label="Math behind XGBoost" />
          <p>
            First we have an initial model\( F_0 \) to produce an initial guess about the data. Usually, we will produce a mean of the 
            y.
          </p>
          <PassageTitle label="Example" />
          <p>
            First, let's assume that we are dealing with a rental data. We know that the size of the apartment is a very useful feature for 
            predicting the rent. So suppose we have the below data.
            <FancyBox caption="Data" alt="Data" link="https://drive.google.com/uc?id=1Wt6zj5qfLm_-hQIngMjmTzm2RpY-F1ar"/>
            Then, suppose our loss function is MSE. Our initial guess \(F_0\) about the y will be the mean as the mean is a single value that minimize 
            the MSE. Here \(F_0\) = 1418. After that, we calculate the residual\( y - F_0 \) and make a decision tree\( \Delta_1 \) that train on\( y - F_0 \) as the tree's y.
            <FancyBox caption="Illustration" alt="Illustration" link="https://drive.google.com/uc?id=1Zl5NUC8mvGTfsRQnHBW7ju_e9_87uIgX"/>
            The above process will happen over and over again untill we have reached the constrained number of trees or fulfill the early stopping criteria. You may wonder 
            why the tree splits in this way. The answer is that the tree will split according to whatever its algorithm told it to. For example, gini impurity. The goal of 
            splitting is to minimize the variance within the same node.
            <FancyBox caption="Illustration" alt="Illustration" link="https://drive.google.com/uc?id=1aI0TIaw9OFTlJAdiBP0JUgB-OZwzzYa4"/>
            As we can see from the above table, the MSE of the model become lower and lower. After a considerable 
          </p>
        </Page>
)}}

export default HomePage;