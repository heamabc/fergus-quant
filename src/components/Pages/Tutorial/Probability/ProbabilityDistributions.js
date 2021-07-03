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
          <Title label="Distributions" />
          <PassageTitle label="Binomial Distribution" />
            {String.raw`$$
                P(X=k) = \begin{bmatrix}
                x \\
                k \\
                \end{bmatrix}
            $$`}
        </Page>
)}}

export default HomePage;