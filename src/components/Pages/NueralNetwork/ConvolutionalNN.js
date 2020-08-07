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
          <Title label="Convolutional Neural Network" />
          <PassageTitle label="Calculation" />
          <p>
            CNN is when we apply a kernel and perform an element-wise product to transform the dataset. The below animation 
            shows how a 2d CNN layer works.
          </p>
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1R_UrROEd4R-ZnJuQg-YjETPvHFS9i5mF"/>
          <p>
            The matrix that we would want to calculate the element-wise product is called filter/kernel. Through backpropagation, 
            we can optimize the kernel. That is, the kernel is something we want the neural network to learn.
          </p>
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1mVb6Vegzg67snSBQZpTLNjuKHrP5IFnc"/>
          <PassageTitle label="Stride" />
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1LuW32BX5Yj9T1BlneCyFjf40h57HxDq4"/>
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1BAhIBwa_8x_pBmdDKsuuw02vKgp9rBxm"/>
          <PassageTitle label="Padding" />
          <p>
            Usually we would pad zero value around the edge. Although technically we can pad with other values.
            There are two major reasons why we would perform padding.
          </p>
          <p>
            First, we can see from the previous animation that the edges and corners are used much less than those in the 
            middle. For the corner pixel, the CNN only apply the kernel on it once. While pixels in the middle are used n*n 
            times for n*n being the shape of the kernel.
          </p>
          <p>
            Second, from the above animation we can also see that the data size will shrink after each CNN layer. This places 
            a upper limit to the times we can add CNN layers and generally not good for a neuron to learn so many things 
            at once. However, padding can enlarge the size of data. As we can see from the below example, the data after 
            CNN layer remains that same shape.
          </p>
          <FancyBox caption="lr" alt="lr" link="https://drive.google.com/uc?id=1LHzyo5g7fR2h-6ivABHvgFdHhDBg-ZTM"/>
          <PassageTitle label="Pooling" />
          <p>
            Pooling is just a CNN version of subsampling or downsampling. Basically you reduce the dimensionality but retain some 
            information. The below figure shows an example of max pooling. It takes the largest value only for each 
            rectified map.
          </p>
          <FancyBox caption="Max Pooling" alt="Max Pooling" link="https://drive.google.com/uc?id=14JqdKDFwgWC5Kb_N8vp6DtZdAokmrDa_"/>
          <p>
            Other example of pooling can be average pooling, sum pooling, etc.
          </p>
          <p>

          </p>
        </Page>
)}}

export default HomePage;