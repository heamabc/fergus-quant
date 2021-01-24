import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Evaluation Metrics" />
          <p>
            When we are dealing with imbalanced data, we should use some different metrics to measure the performance of our algorithm.
          </p>
          <PassageTitle label="Recall" />
          <p>
            Often, we care most about our prediction on minority class. Therefore, we could recall of the minority class to evaluation 
            our performance. Recall is out of all the minority class, what percentage of them is predicted correctly.
          </p>
          <Title label="Sampling"/>
          <PassageTitle label="Oversampling" />

          <PassageTitle label="Undersampling" />
          <p>
            Suppose the sample size of class 0 is 100, and sample size of class 1 is 1000. We randomly choose 100 sample from class 1 and 
            combine these 100 samples with class 0. Therefore, after undersampling, the proportion of the two class is the same.
          </p>
          <Title label="Class Weight"/>
          <p>
            Suppose class 0 is the underpresented class that comprises 10% of the data. While class 1 comprises 90% of the data.
          </p>
          <p>
            What class weight do is to penalize the mistake in classifying class 0 with a weight instead of 1. For example, we may 
            want to multiply the penalty for class 0 by 10 as the inverse of its propotion to the data is 10.
          </p>
          <p>
            Mathematically, as the cost function of each model is different, I would give an example of logistic regression.
          </p>
          <MinorTitle label="Logistic regression"/>
          <p>
            The cost function of logistic regression is 
            {String.raw`$$
            C = -(y \times log(\hat{y}) + (1-y) \times log(1-\hat{y}))
            $$`}
            Remember that in machine learning, we want to do is minimize the cost function. Therefore, our objective is to
            {String.raw`\begin{align}
            \text{min } C &= \text{min } \{ -(y \times log(\hat{y}) + (1-y) \times log(1-\hat{y})) \} \\
            & = \text{max } \{ y \times log(\hat{y}) + (1-y) \times log(1-\hat{y}) \} \\
            \end{align}`}
            Then, we add the class weight to the cost function as this way.
            {String.raw`$$
            C = -(w_1 y \times log(\hat{y}) + w_2(1-y) \times log(1-\hat{y}))
            $$`}
            As the penalty for misclassification of underpresented class is higher, the machine will learn more towards the 
            underpresented class.
          </p>

        </Page>
      )}}

export default HomePage;