import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

import Table2 from '../../../Table/Table2'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <CodeSnippet />
                <Title label='Linux Text Editors'/>
                <p>
                    When using linux, often we need to edit a lot of text/code files. However, to get things done in the most efficient way, we usually use some simple yet 
                    powerful editors. Today we will introduce some of the key features of the text editors that are pre-installed in the Linux system.
                </p>
                <PassageTitle label='Nano' />
                <p>
                    Nano is simple. It is easy to use and master. If you only want to simply edit some textfiles, nano will be enough. I would prefer use it.
                </p>
                <p>
                    Cheat Sheet : https://www.nano-editor.org/dist/latest/cheatsheet.html
                </p>
                <PassageTitle label='Vim' />
                <p>
                    Vim is powerful yet harder to learn.
                </p>
                <p>
                    Cheat Sheet : https://vim.rtorr.com/
                </p>
            </Page>
    )}}

export default HomePage;