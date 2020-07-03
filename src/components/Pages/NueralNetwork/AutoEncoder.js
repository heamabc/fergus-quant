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
          <Title label="Architecture of Autoencoder" />
          <p>
            The overall architecture of the autoencoder can be described in the below photo. We first have some input x, and construct a encoder function
            \( h=f(x) \) and a decoder function \( r = g(h) \) to reconstruct the input from encoder function. However, the goal of autcoencoder is not to 
            simply set \(g(f(x)) = x\) as it is not useful. We design the autoencoder to learn to copy approximately as the model is forced to 
            prioritize which aspects of the input should be copied, and it often provide useful properties of the data.
          </p>
          <FancyBox caption="Architecture of Autoencoder" alt="Architecture of Autoencoder" link="https://drive.google.com/uc?id=13CoMcGVJlEEOML7CSgm5BS2ROBQrvhDl"  />

          <Title label="Undercomplete Autoencoder"/>
          <p>
            An undercomplete autoencder is an autoencder whose bottleneck dimension is less than the input dimension. Learning an undercomplete representation 
            forces the autoencoder to capture the most salient features of the data. 
          </p>
          <p>The learning process can be described as minimizing a loss function
            {String.raw`$$
            L(x, g(f(x)))
            $$`}
          </p>
          <p>
            Study have shown that when the decoder is a linear function and the loss function is MSE, the undercomplete autoencoder will generate similar 
            results from PCA. 
          </p>
          <p>
            The problem of PCA is it can only generate a linear hyperplane to dimensionally reduce the input. When we enable nonlinear activation function in the 
            encoder and decoder, we can have a more powerful nonlinear generalization of PCA.
          </p>
          <FancyBox caption="Autoencoder vs PCA" alt="Autoencoder vs PCA" link="https://drive.google.com/uc?id=1PvQGaqW_izRzpevtf-xO5gtqyVbMs9BO" />
          <p>
            Theoretically, if we can generate an encoder and decoder with infinitely many layers, we can produce a autoencoder scheme wheere the bottleneck only contains 
            one feature and can reconstruct the data without any loss. However, keep in mind that the goal of dimensionality is to reduce the dimension of the data while keeping 
            most of the information of the data. As such, we have to regularize the autoencoder to achive something more than zero error in reconstruction.
          </p>
          <Title label="Variational Autoencoder"/>
          <p>
            Variational autoencoder is similar to the autoencoder we described above. However, instead of encoding the input to a single latent variable, VAE will encode the input to 
            a normal distribution. 
          </p>
        </Page>
)}}

export default HomePage;