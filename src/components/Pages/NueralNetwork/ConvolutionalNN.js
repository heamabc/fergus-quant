import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      return (
        <Page>    
          <Mathjex />
          <CodeSnippet />
          <PassageTitle label="Calculation" />
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1R_UrROEd4R-ZnJuQg-YjETPvHFS9i5mF"/>
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1mVb6Vegzg67snSBQZpTLNjuKHrP5IFnc"/>
          <PassageTitle label="Stride" />
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1LuW32BX5Yj9T1BlneCyFjf40h57HxDq4"/>
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1BAhIBwa_8x_pBmdDKsuuw02vKgp9rBxm"/>
          <PassageTitle label="Padding" />
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1LHzyo5g7fR2h-6ivABHvgFdHhDBg-ZTM"/>
          
        </Page>
)}}

export default HomePage;