import React, { Component } from 'react';
import '../css/AllPages.scss';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import Title from '../../CommonComponents/Title/Title'
import LinkButton from '../../CommonComponents/Button/Button'


class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={'Résumé'}/>
                <LinkButton href="https://drive.google.com/uc?id=1BhkXq4Jn3FhH9-wnws-_tCMe-oCf_9tH" target="_blank" label="Résumé" />
            </Page>
        )
        
    }
}

export default HomePage;