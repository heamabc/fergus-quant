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
                <LinkButton href="https://www.canva.com/design/DAEgfHiutnk/XdFRemEWK4nEbHNVHA2G_Q/view?utm_content=DAEgfHiutnk&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank" label="Résumé" />
            </Page>
        )
        
    }
}

export default HomePage;