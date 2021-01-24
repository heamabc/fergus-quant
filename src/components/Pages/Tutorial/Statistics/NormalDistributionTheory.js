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
          <Title label="Normal Distribution" />
          <p>
            Because of central limit theorem, normal distribution plays a very important role in statistics.
          </p>
          <Title label="Chi Squared Distribution" />
          <PassageTitle label="Definition" />
          <p>
            {String.raw`$$
            \chi ^ 2 _n = Z^2_1 + Z^2_2 + \cdots + Z^2_n
            $$`}
            where {String.raw`\(Z_1, Z_2, \cdots, Z_n \)`} are i.i.d with normal distribution \(N(0,1)\).
          </p>
        </Page>
      )}}

export default HomePage;