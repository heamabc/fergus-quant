import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          <Title label="Intro to Options" />
          <PassageTitle label="Put Call Parity" />
          <p>
            {String.raw`$$ c + Ke^{rT} = p + S_0 $$`}
          </p>
          <Title label="Black Scholes Model"/>
          <p>
            The Black Scholes Model gives a theoretical estimate of the price of European-style options and 
            shows that the option has a unique price given the risk of the security and its expected return.
          </p>
          <MinorTitle label="Formula" />
          <p>
            {String.raw`$$ c = S_0 \mathcal{N}(d_1) - Ke^{-rT} \mathcal{N}(d_2) $$`}
            {String.raw`$$ p = Ke^{-rT} \mathcal{N}(-d_2) - S_0 \mathcal{N}(-d_1) $$`}
            {String.raw`$$ d_1 = \frac{ln(\frac{S_0}{K})+(r+\frac{\sigma^2}{2})T}{\sigma \sqrt{T}}, d_2=d_1 - \sigma \sqrt{T} $$`}
          </p>
          <MinorTitle label="Interpretation" />
          <p>
              <ul>
                  <li>{String.raw`\( \mathcal{N}(d_2) = \)`} probability that the call option will be exercised.</li>
                  <li>{String.raw`\( \mathcal{N}(d_1)S_0e^{rT} = \)`} expected value of receiving the stock at expiration given it is 
                        in the money at maturity.</li>
                    <li>
                        Therefore, the present value of {String.raw`\( \mathcal{N}(d_1)S_0e^{rT} - \mathcal{N}(d_2) K = 
                        S_0 \mathcal{N}(d_1) - Ke^{-rT} \mathcal{N}(d_2) = c\)`}
                    </li>
              </ul>
          </p>
          <MinorTitle label="Greeks" />
          <p>
              <ul>
                  <li>Delta : {String.raw`\( \Delta = \frac{\partial V }{\partial S} = \mathcal{N}(d_1) \)`} </li>
                  <li>Vega : {String.raw`\( v = \frac{\partial V }{\partial \sigma} \)`}</li>
                  <li>Theta : {String.raw` \( \theta = - \frac{\partial V }{\partial T} \)`}</li>
                  <li>Rho : {String.raw` \( \rho = \frac{\partial V }{\partial r} \)`}</li>
                  <li>Gamma : {String.raw` \( \Gamma = \frac{\partial^2 V }{\partial S^2} \)`}</li>
              </ul>
          </p>
          <PassageTitle label="Delta" />
          <p>
              Delta measures the rate of change in the option value with respect to changes in the underlying asset’s price.
          </p>
          <MinorTitle label="Properties of Delta" />
          <p>
            Range of value of delta.
            {String.raw` \( 0 \leq \Delta(Call Option) \leq 1, -1 \leq \Delta(Put Option) \leq 0 \)`}
          </p>
          <PassageTitle label="Vega" />
          <p>
              Vega measures the sensitivity of the option to changes in implied volatility.
          </p>
          <MinorTitle label="Properties of Delta" />
          <p>

          </p>
          <PassageTitle label="Theta" />
        </Page>
)}}

export default HomePage;