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
          <Title label="Bayesian Optimization" />
          <p>
            In parameter optimization of machine learning model, we always struggle with two things,
            exploration (trying out parameterizations with high uncertainty in their outcomes) and exploitation (converging on configurations that are likely to be good)
          </p>
          <ol>
            <li>We first choose a surrogate model for modeling the true function and define its prior.</li>
            <li>Given the set of observations (function evaluations), use Bayes rule to obtain the posterior.</li>
            <li>Use an acquisition function \alpha(x)α(x), which is a function of the posterior, to decide the next sample point.</li>
            <li>Add newly sampled data to the set of observations and goto step #2 till convergence or budget elapses.</li>
          </ol>
          
          
          <PassageTitle label="Acquisition Function"/>
          <p>
            The acquisition function will takes the mean and variance at each point \(x\) on the posterior and computes a 
            value that indicates how desirable it is to sample next at this position. A good acquisition function should trade off exploration and exploitation.
          </p>
          <PassageTitle label="adaptivity gap"/>
          <p>
            In Bayesian Optimization (any optimization, really), we have the choice between performing evaluations of our function in a sequential fashion 
            (i.e. only generate a new candidate point to evaluate after the previous candidate has been evaluated), or in a parallel fashion (where we evaluate 
            multiple candidates concurrently). The sequential approach will (in expectation) produce better optimization results, since at any point during the 
            optimization the ML model that drives it uses strictly more information than the parallel approach. However, if function evaluations take a long time 
            and end-to-end optimization time is important, then the parallel approach becomes attractive. The difference between the performance of a sequential 
            (aka 'fully adaptive') algorithm and that of a (partially) parallelized algorithm is referred to as the 'adaptivity gap'.
          </p>
        </Page>
)}}
export default HomePage;