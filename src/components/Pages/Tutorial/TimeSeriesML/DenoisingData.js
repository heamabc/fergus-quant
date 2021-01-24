import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>    
          <Mathjex />
          <CodeSnippet />
          <PassageTitle label='Fourier Transform' />
          <PassageTitle label='Wavelet Transofrm' />
        </Page>
)}}

export default  HomePage;