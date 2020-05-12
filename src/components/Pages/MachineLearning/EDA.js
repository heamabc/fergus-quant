import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      const next_line = '\n'
        return (
            <Page>
              <CodeSnippet />
              <Title label="Data Cleaning" />
              <p>
                Garbage in, garbage out. If the data is incorrect and inconsistent, the machine learning will be of no uses.
              </p>
              <PassageTitle label="Common Problem about Data" />
              <p>
                First, check if the data type is correct, and get familiar with the datatype of each column. For example, for the stock tickers, you 
                would not expect a boolean variable. We need to check if there exist such data. 
                
                <p>
                  Another constraint is, there will be a lot of nan in a 
                  dataset. we need to indentify the nan and inspect if it is reasonable to exist. For example, we would not expect a nan in the stock tickers.
                </p>
                <p>
                  Another problem is duplicate. For example, we need to check if there is duplicate of stock ticker. And find the reason why the data 
                  appears twice.
                </p>
                <p>
                  The last problem is sometimes data is inaccurate. we need to check if the data is reasonable. For example, if we know that S&P500 is in the range 
                  of 2700-3000 this year. But you spot the data describing S&P500 is 2000. Then you should inspect why this problem arise.
                </p>
              </p>
              <PassageTitle label="Inspection of Data" />
              <p>
                We first have a basic understanding of each column. How many nan, what is their distribution, what is their shape, etc.
                <pre className="prettyprint linenums lang-python">
                  df.describe()
                </pre>
                If the data is not small, it is good to have a look at the whole data. If not, sample some data to view them.
                <pre className="prettyprint linenums lang-python">
                  df.head() {next_line}
                  df.tail() {next_line}
                  df.sample(10)
                </pre>
              </p>

            </Page>
)}}

export default HomePage;