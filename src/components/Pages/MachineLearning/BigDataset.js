import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
      const next_line = '\n'
      const tab = ' '
        return (
            <Page>
                <Title label="Sparse Matrix" />
                <p>
                    A sparse matrix is a matrix that contains a lot of zero values. Sparse matrix is very common, especially when we perform
                    some data engineering like one hot encoding, and natural language processing.
                </p>
                <MinorTitle label="Space Complexity"/>
                <p>
                    We will allocate a lot of resource to represent the zero values in the matrix.
                </p>
                <PassageTitle label="Scipy CSR Matrix"/>
            </Page>
        )}}

export default HomePage;