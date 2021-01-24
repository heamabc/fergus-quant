import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <CodeSnippet />
          
          https://www.analyticsvidhya.com/blog/2017/06/word-embeddings-count-word2veec/
          Frequency based Embedding, TF-IDF ( log in IDF should be based 10 instead of natural log), Count Vector, Co-occurence Vector
          Prediction Base Embedding, CBOW, Skip-Gram
        </Page>
)}}

export default HomePage;