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
          <p>
            RNN recursively use the same function, that is
            {String.raw`$$
            h^{t} = f(h^{t-1}, x^{t} ;\theta)
            $$`}
            Hidden state is the short term memory
            Cell state is the long term memory
            The major difference between RNN and LSTM is that RNN can only remember short term memory, while LSTM can remember both 
            short term memory and long term memory.
            In each time step, LSTM takes 3 inputs. The current input data, the hidden state from the previous cell, and cel state from the 
            previous cell.
            <FancyBox caption="RNN" alt="RNN" link="https://drive.google.com/uc?id=1KvVxl9OCO1eSUvVMd2YJZ_IfIgV7QDXN"/>
            <PassageTitle label="GRU" />
            <PassageTitle label="LSTM" />
            <PassageTitle label="Bidirectional RNN" />
            <PassageTitle label="Deep RNN" />
          </p>
        </Page>
)}}

export default HomePage;