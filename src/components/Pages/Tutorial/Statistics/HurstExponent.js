import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import '../../css/AllPages.scss';

class HomePage extends Component {
    render() {
        return (
            <Page>
              <Mathjex />
              <Title label="Definition" />
              <p>
                There are several definition of Hurst Exponent. We will focus on the oldest definition that 
                is developed by Harold Hurst.
                {String.raw`$$
                E \left[ \frac{R(n)}{S(n)} \right] = Cn^H, n \to \infty
                $$`}
                where,
                {String.raw`\begin{align}
                & R(n) = \text{Range of the culmulative deviation from mean}, \\
                & S(n) = \text{Standard Deviation}, \\
                & \text{C is a constant}
                \end{align}`}
                H will has a value within 0-1. For H = 0, it will have a mean reversion. For H = 0.5, It will 
                be a brownian process. For H = 1, it will be a trend.
              </p>
              <PassageTitle label="GBM" />
              Consider a GBM. the qudratic variation of its log value exhibits 
              {String.raw`$$
              <|ln(S_{t+\tau})-ln(S_t)|^2>=\sigma^2\tau \sim \tau = \tau^{2H} \tag{2.1}
              $$`}
            </Page>
)}}

export default HomePage;