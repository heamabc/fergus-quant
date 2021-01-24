import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'

class HomePage extends Component {
  
    render() {
      const next_line = '\n'
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Linear Algebra" />
          <PassageTitle label="Inverse Matrix" />
          <pre className="prettyprint linenums lang-python">
            a = np.mat('0 1 2 ; 3 4 5 ; 6 7 8') {next_line}
            np.linalg.inv(a)
          </pre>
          <PassageTitle label="Solve Linear System" />
          in Equation \(Ax = B\) find \(x\). Notice that <code>np.linalg.solve</code> will solve the linear system faster and 
          more accurately than using <code>np.linalg.inv</code> to solve. Reason can be seen <a href="https://stackoverflow.com/questions/31256252/why-does-numpy-linalg-solve-offer-more-precise-matrix-inversions-than-numpy-li#answer-31257909">here</a>.
          <pre className="prettyprint linenums lang-python">
            A = np.mat('0 1 2 ; 3 4 5 ; 6 7 8') {next_line}
            B = np.array([3,4]) {next_line}
            x = np.linalg.solve(A, B)
          </pre>
        </Page>
      )}}

export default HomePage;