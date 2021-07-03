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
          <Title label="Basics of Probability" />
          <PassageTitle label="Probability & Expectation" />
            {String.raw`\begin{align}
              E[X] &= \sum_i x_i P(x_i) \\
              E[X] &= \int xP(x) dx

              \end{align}`}
          <Mathjex />
          <Title label="Conditional Probability and Bayes' Rule"/>
          <PassageTitle label="Cardinality"/>
          <p>
            {String.raw`$$
            P(A \cup B )= P(A)+P(B)-P(A \cap B)
            $$`}
          </p>
          <PassageTitle label="Conditional Probability"/>
          <p>
              {String.raw`$$
              P(A|B)=\frac{P(A \cap B)}{P(B)}, \textrm{ when } P(B)>0.
              $$`}
          </p>
          <PassageTitle label="Independence"/>
          <p>
            Two events A and B are independent if and only if 
            {String.raw`\(
            P(A \cap B)=P(A)P(B)
            \)`}
          </p>
          <PassageTitle label="Law of Total Probability"/>
          <p>
                If 
                {String.raw`\(
                B_1, B_2, B_3,\cdots
                \)`}
                is a partition of the sample space \(S\), then for any event \(A\) we have
                {String.raw`$$
                P(A)=\sum_{i} P(A \cap B_i)=\sum_{i} P(A | B_i) P(B_i).
                $$`}
          </p>
          <PassageTitle label="Bayes' Rule"/>
          <p>
              {String.raw`$$
              P(B|A)=\frac{P(A|B)P(B)}{P(A)}.
              $$`}
          </p>
        </Page>
)}}

export default HomePage;