import React, { Component } from 'react';
import './css/AllPages.scss';
import Page from '../CommonComponents/PageTemplate/PageTemplate'
import Title from '../CommonComponents/Title/Title'
import LinkButton from '../CommonComponents/Button/Button'
import CVShort from '../../assets/cv/Resume Kwan_Tak_Hei_Fergus.pdf'


class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'Résumé'}/>
                <LinkButton href={CVShort} target="_blank" label="Résumé" />
            </Page>
        )
        
    }
}

export default HomePage;