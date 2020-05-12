import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
        return (
            <Page>
              <Title label="Secure Shell (SSH)" />
              <PassageTitle label="Asymmetric Encryption" />


            </Page>
)}}

export default HomePage