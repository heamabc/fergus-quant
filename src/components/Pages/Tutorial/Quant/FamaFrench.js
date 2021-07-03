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
          <Title label="Fama French Model" />
          <p>
            In 1992, Eugene Fama and Kenneth French outlined their three-factor model to explain stock returns. It is called the Fama-French
            Model.
          </p>
          <PassageTitle label="Motivation" />
          <p>
            Capital Asset Pricing Model (CAPM) only describes asset returns in relation to their exposure to the market’s excess return 
            through the stock’s beta and identifies any return beyond that as alpha. Mathematically, it is
          </p>
          <p>
            {String.raw`$$ r = r_f + \beta (r_m - r_f) $$`}
          </p>
          <p>
            where 
            <ul>
              <li> \( r \) = Expected return of investment</li>
              <li>\( r_f \) = Risk-free rate (time value of money)</li>
              <li>\( \beta \) = market risk coefficient</li>
              <li>\( r_m \) = Expected return of the market</li>
              <li>\( r_m - r_f \) = Market risk premium</li>
            </ul>
          </p>
          <p>
            The CAPM model decompose the return in a linear way. 
          </p>
          <PassageTitle label="Problem with CAPM" />
          <p>
            The CAPM model used the market risk to explain all the excess return, which in reality does not give us the whole picture.
            It is not flexible, it does not explain what is happening in the investment.
          </p>
          <PassageTitle label="Introduction of Fama French 3 factor Model" />
          <p>
            Fame and French discovered that apart from market risk, there are also two factors also consistently contribute to the 
            return of an asset. Namely the SMB (Small minus Big) and HML (High minus Low). The SMB factor means that long small-cap compnay
            and short large-cap company, i.e. Historic excess returns of small-cap companies over large-cap companies. The HML factor means that long high book to market company and short low 
            book value to market company, i.e. Historic excess returns of value stocks over growth stocks. Mathematically, 
          </p>
          <p>
          {String.raw`$$ r = r_f + \beta_1 (r_m - r_f) + \beta_2 \text{SMB} + \beta_3 \text{HML} $$`}
          </p>
          <p>
            Basically, what it means is that there are three factors that affect the performance of an asset. They are the market risk exposure,
            market cap, and book value to market raito.
          </p>
          <p>
            The model breakthrough the barrier of only market risk premium being the only factor that contribute to the excess return 
            of the asset from risk free asset. People from now on has a more flexible model to observe and predict the asset return. As
            you can imagine, you can add as many factor as you want in this model.
          </p>
          <PassageTitle label="Fama French 5 factor Model" />
          <p>
            After introducing the Fama French model for about 20 years, Fama French once again added 2 more factors to the mode, making a 
            new Fama French 5 factor moodel. The two added factors are RMW (Robust operating profitability minus weak operation profitability) and 
            CMA (Companies investing conservatively minus companies investing aggressively).
          </p>
        </Page>
)}}

export default HomePage;