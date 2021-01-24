import React, { Component } from 'react';
import '../../css/AllPages.scss';
import {EntryWithLink} from '../../../CommonComponents/Entry/Entry';
import Title from '../../../CommonComponents/Title/Title'
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <ul>
                    <li> <a href="https://githowto.com/setup">Git Tutorial</a></li>
                </ul>
            </Page>
        )}}

export default HomePage;