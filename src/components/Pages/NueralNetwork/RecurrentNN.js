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
          <Title label="Recurrent Neural Network" />
          <p>
            RNN recursively use the same function, that is
            {String.raw`$$
            h^{t} = f(h^{t-1}, x^{t} ;\theta)
            $$`}
            
            The major difference between RNN and LSTM is that RNN can only remember short term memory, while LSTM can remember both 
            short term memory and long term memory. 
            In each time step, LSTM takes 3 inputs. The current input data, the hidden state from the previous cell, and cel state from the 
            previous cell.
            <FancyBox caption="RNN" alt="RNN" link="https://drive.google.com/uc?id=1KvVxl9OCO1eSUvVMd2YJZ_IfIgV7QDXN"/>
            <PassageTitle label="Statefulness" />
            <PassageTitle label='Vanish Gradients of RNN' />
            <PassageTitle label="GRU" />
            <PassageTitle label="Long Short Term Memory (LSTM)" />
            <p>
              The LSTM model contains 5 major components. Namely, Forget gate, input gate, output gate, cell state, and hidden state. Gate here just me some 
              neural network layer and state is a variable that we store some information. The overall structure can be seen in the below graph.
            </p>
            <FancyBox caption="LSTM" alt="LSTM" style={{width:800, height:300}} link="https://drive.google.com/uc?id=1TuzDAo35heKd-JXTY6p14obTWV_tlz2r" />
            <p>
              As the name of the model clearly state that we can have long short term memory. The Hidden state stores the short term memory, 
              while cell state stores the long term memory. Basically, hidden state is the output of each recursion and cell state is to store a long term information 
              across all recursions.
            </p>
            <MinorTitle label="Forget Gate"/>
            <FancyBox caption="Forget Gate" alt="Forget Gate" style={{width:800, height:250}} link="https://drive.google.com/uc?id=1I6k70rwOXWXZBD7Y8pumjlbelRLJx4p7" />
            <p>
              The forget gate is to decide which information in the cell state should be throw away. It looks at the previous hidden state {String.raw`\(h_{t-1}\)`} and 
              the current input \(x_t\) and output a number between 0 and 1 to each number in the cell state from the sigmoid function. 1 means completely keep an 
              informatin while 0 means completely forget it. number between 0 and 1 can shows how important the information is.
            </p>
            <MinorTitle label="Inpute Gate" />
            <FancyBox caption="Input Gate" alt="Input Gate" style={{width:800, height:250}} link="https://drive.google.com/uc?id=1cxWzLwg-NEaF40zdL_3EQ3b6NMgw8MLo" />
            <p>
              The input gate decides what new information we need to store in the cell state. We can see there are two parts in input gate. First, the sigmoid function decides 
              what information in the previous hidden state {String.raw`\(h_{t-1}\)`} and current input should be added to the cell state. The tanh function provide the value 
              candidate to be added to the cell state (why tanh? tanh squish all information to value between -1 and 1 to regulate the NN). Finally, we multiply \(i_t\) with 
              \(\tilde C_t\) to decide what value will be stored to the cell state.
            </p>
            <MinorTitle label="Cell State" />
            <FancyBox caption="Cell State" alt="Cell State" style={{width:800, height:250}} link="https://drive.google.com/uc?id=1OMWew9lrBXco-Nr-El1zvvv7rxhtd02C" />
            <p>
              Cell state is the variable that stores the long term information. Here, we can see the definition of cell state for each timestamp. We first multiply the forget 
              gate output to the previous cell state. Then add the new information decided by the input gate to obtain the cell state of this timestamp. 
            </p>
            <MinorTitle label="Output Gate" />
            <FancyBox caption="Output Gate" alt="Output Gate" style={{width:800, height:250}} link="https://drive.google.com/uc?id=1HeDY9dgYKUP-wbex1PAtX1ssmPbv-XjV" />
            <p>
              Finally, the output gate decides what should we predict for this timestamp. First we look at the input and hidden state to decide what information from the cell 
              state should be output from the sigmoid function. Then we push the value to between -1 and 1 by passing the cell state to a tanh function.
              Finally we can obtain the output. Remember that the output of each timestamp is the hidden state.
            </p>
            <PassageTitle label="Bidirectional RNN" />
            <PassageTitle label="Deep RNN" />
          </p>
        </Page>
)}}

export default HomePage;