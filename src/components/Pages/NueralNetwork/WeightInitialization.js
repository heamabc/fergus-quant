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
          <Title label="Xavier Initialization" />
          <p>
            In Xavier Initialization, we will initialize the weight of each layer in this way:
          </p>
          {String.raw`\begin{align}
          W^{[l]} & \sim \mathcal{N}(\mu=0,\sigma^2 = \frac{1}{n^{[l-1]}}) \\
          b^{[l]} & = 0
          \end{align}`}
          <p>
            Then main idea behind Xavier Initialization is that we want to 
          </p>
          <ul>
            <li>The mean of the activations should be zero.</li>
            <li>The variance of the activations should stay the same across every layer.</li>
          </ul>
          <p>
            Mathematically, the idea is for every layer l:
          </p>
          {String.raw`\begin{align}
          E[a^{[l-1]}] & = E[a^{[l]}] = 0 \\
          Var(a^{[l-1]}) & = Var(a^{[l]}) = \sigma^2
          \end{align}`}
        </Page>
)}}

export default HomePage;