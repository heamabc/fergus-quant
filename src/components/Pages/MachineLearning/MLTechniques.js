import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>    
          <Mathjex />
          <CodeSnippet />
          <Title label="One Hot Encoding" />
          <p>
            When dealing with categorical data, The numeric representation or text representation of that data is not meaningful. For 
            example, when we have a column indicate the object of the picture. 0 means cat, 1 means dog, 2 means bird. The number 
            here has no meaning and training the model with these data would mislead the data to believe there is some meaning behind 
            the number. For example, the model may believe 1+1 = 2.
          </p>
          <p>
            To deal with this problem, we can use one hot encoding. Each column will represent a categorical data. To perform one 
            hot encoding, we can simply use <code>pd.get_dummies()</code>.
          </p>          
          <Title label="Train, Validation, Test Split" />
          <PassageTitle label="Same Distribution" />
          <p>
            In machine learning project, we need to split the whole sample into these 3 portions. Before we perform 
            the split, we always want to make sure they are come from the same distribution. For example, when we want 
            to classify object of photo uploaded by different region's users. We do not want to split the sample by 
            region. Instead, we should randomly shuffle the sample and perform the split.
          </p>
          <PassageTitle label="Split Size" />
          <p>
            The split size depends on the size of our sample. If our sample is small, say smaller than 10,000. Then the 
            ratio of our split can be 60% 20% 20% or without validation set 70% 30%. However, nowadays we often face a very 
            large sample, say 10,000,000. Then we can set our test sample to over 80%. For example, 90% 5% 5%. It is because 
            we have large enough of test set to give us confidence about the performance of our model.
          </p>
        </Page>
      )}}

export default HomePage;