import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'
import '../../css/AllPages.scss';


//TODO Make all image resize automatically
class HomePage extends Component {
  render() {
      const next_line = '\n'
      const tab = ' '
    return (
      <Page>
        <CodeSnippet />
        <Mathjex />
        <Title label="Introduction" />
        <p>
            Imagine a financial market is formed by n financial assets and we know that at maturit T, there will be some certain scenarios (m different scenarios) 
            of the price of the financial assets that we know now. Therefore, we have n securities and we know that there will be m different prices of them at 
            maturity T.
            {String.raw`$$
            \mathbf{S} =  \begin{pmatrix}
            S^1_1 & S^1_2 & \cdots & S^1_n \\
            S^2_1 & S^2_2 & \cdots & S^2_n \\
            \vdots  & \vdots  & & \vdots  \\
            S^m_1 & S^m_2 & \cdots & S^m_n
            \end{pmatrix} 
            $$`}
            A natural question comes to this is, how much should I pay for this asset?
        </p>
    </Page>
)}}

export default HomePage;