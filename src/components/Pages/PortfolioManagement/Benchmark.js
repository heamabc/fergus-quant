import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <PassageTitle label="Benchmark" />
          <p>
              In accessing the ability of a fund manager, clearly a benchmark plays an important role. Choosing a suitable benchmark can help a 
              fund manager define a suitable investment universe, investment objectives, and risk tolerance level. Therefore, selecting a 
              suitable benchmark is an important initial part of portfolio construction.
          </p>
          <p>
              The use of benchmark is to answer a question theoratically. If I simply invest in an investible benchmark to substitute my investment 
              in the fund, can I generate a better return for a specific time horizon? Better here does not neccessarily mean higher return, it can 
              also mean stabler, more consistent return. It depends on the attitude of the investor.
          </p>
          <MinorTitle label="Criteria" />
          <p>
              <ul>
                  <li><b>Unambiguous : </b>The investment objective, investment style, investment universe, weighting scheme, calculation, etc. must be 
                  defined clearly. Fund manager and investor should have a solid understanding of how the benchmark work.</li>
                  <li><b>Investable : </b>The benchmark must represent an investable passive alternative available to the investor as we are trying to 
                  answer the theoratical question mentioned above.</li>
                  <li><b>Measurable : </b> The performance of the benchmark can be calculated or fetched frequently.</li>
                  <li><b>Appropriate : </b> The investment style and risk tolerance level of the benchmark should reflect the corresponding 
                  characteristics of the fund.</li>
                  <li><b>Specified in advance : </b> The benchmark should be specified prior to the start of an evaluation period. </li>
                  <li><b>Monitored : </b> The fund manager should monitor any change made to the benchmark by the benchmark provider and 
                  validate the correctness of choice of benchmark regularly.</li>
              </ul>
          </p>
        </Page>
)}}

export default HomePage;