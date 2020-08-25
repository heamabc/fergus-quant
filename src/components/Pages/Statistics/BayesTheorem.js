import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'
import '../css/AllPages.scss';


class HomePage extends Component {
    render() {
      return (
        <Page>
          <Mathjex />
          <p>
            The Bayes theorem is when you have a hypothesis\(H\) and you have some new evidence\(E\) and you 
            want to know the probability of the hypothesis given the new evidence\((H|E)\)
          </p>
          {String.raw`$$
          \overbrace{P(H|E)}^{\text{Posterior}} = \frac{\overbrace{P(E|H)}^{\text{Likelihood}}\overbrace{(H)}^{\text{Prior}}}{\underbrace{P(E)}_{\text{Marginal}}}
          $$`}
        </Page>
)}}

export default HomePage;