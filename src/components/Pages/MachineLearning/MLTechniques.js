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
          <Title label="Evaluation Metrics" />
          <PassageTitle label="Accuracy, Precision, Recall, F1" />
          <p>
            <FancyBox caption="Confusion Matrix" alt="Confusion Matrix" link="https://drive.google.com/uc?id=1RubZPTURMXnKx6TjkjxfsKry7HwTgrYh" />
            With the confusion matrix provided above, we can calculate the accuracy, precision, recall, and F1. 
            They are very popular evaluation metrics.
            {String.raw`
            $$ \text{Accuracy} = \frac{\text{True Positive} + \text{True Negative}}{\text{Total}} $$ 
            $$ \text{Precision} = \frac{\text{True Positive}}{\text{True Positive} + \text{False Positive}} $$
            $$\text{Recall} = \frac{\text{True Positive}}{\text{True Positive} + \text{False Negative}} $$
            $$ \text{F1} = 2 \frac{\text{Precision} * \text{Recall}}{\text{Precision} + \text{Recall}} = \frac{2}{\frac{1}{\text{Precision}} + \frac{1}{Recall}} $$
            `}
            <ul>
              <li>Accuracy : Of the total sample, what % of them are predicted correctly.</li>
              <li>Precision : Of the predicted positive, what % of them are truly positive</li>
              <li>Recall : Of all the positive, what % of them are predicted positive.</li>
            </ul>
            Often, there will be a precision and recall tradeoff. It means that if we tune the model to increase 
            the precision, the recall will decrease, and vice versa. Therefore F1 is to combine the result of 
            precision and recall by calculating the harmonic mean.
          </p>
          <Title label="Evaluation Strategy" />
          <PassageTitle label="Single Evaluation Metric" />
          <p>
            In tuning our model, we want to have only a single evaluation metric to optimize and to evalute the 
            performance of our project. For example, In a backtesting strategy, we want have return and standard 
            deviation. A smart way to evaluate the model is to use a metric that combine the two. For example, Sharpe
            ratio.
          </p>
          <PassageTitle label="Setting Constraints" />
          <p>
            However, sometimes we cannot combine several evaluation metrics that we want to optimize. For example, 
            the running time of our backtesting. The ideal way to achieve great performance in different metrics, we 
            can have sharpe ratio as our evaluation metric, and running time as our constraint. For example, we want 
            the backtesting to be completed in 20 minutes. Therefore, we will discard the model that backtest over 
            20 minutes. You can also set constraint of sharpe ratio to be greater than 1.
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