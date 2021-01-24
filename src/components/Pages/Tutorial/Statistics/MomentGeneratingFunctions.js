import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import '../../css/AllPages.scss';

import Table3 from '../../../Table/Table3'

class HomePage extends Component {  
      render() {
        return (
            <Page>
                <Mathjex />
                <Title label="Moment" />
                <p>
                    The nth moment of a random variable X is $$ E[X^n] $$
                    The nth central moment of a random variable X is $$ E[(X-E(X))^n] $$
                    The nth standardized moment of a random variable X is 
                    {String.raw`$$ E\left[\left(\frac{X-E(X)}{\sigma}\right)^n\right] $$`}
                    <Table3 />
                </p>
            </Page>
)}}

export default HomePage;