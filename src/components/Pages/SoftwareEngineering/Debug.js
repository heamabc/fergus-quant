import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
  
    render() {
      const next_line = '\n'
      return (
        <Page>       
          <CodeSnippet />
          <PassageTitle label="Refactoring" />
          Lets say we have the follow script
          <pre className="prettyprint linenums lang-python">
            x = 123 {next_line}
            print(x) {next_line}
            print(x) {next_line}
            print(x)
          </pre>
          If we want to change the variable <code>x</code> to other name, say <code>abc</code>. We have to change the name manually for 
          total of 4 times in the script. However, with refactoring, we can change the whole script with all the variable with that name.
          <pre className="prettyprint linenums lang-python">
            abc = 123 {next_line}
            print(abc) {next_line}
            print(abc) {next_line}
            print(abc)
          </pre>
        </Page>
)}}

export default HomePage;