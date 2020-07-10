import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import Mathjex from '../../CommonComponents/Mount/Mathjex/Mathjex'
import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import FancyBox from '../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
      return (
        <Page>       
          <Mathjex />
          <Title label="Math Behind Regression Decision Tree" />
          <p>
            A decision tree is to parition the data into subsets that contain instances with similar 
            values. Therefore, it work well both on categorical data and numerical data.
          </p>
          <FancyBox caption="Data" alt="Data" style={{width:'1000px', height:'400px'}} link="https://drive.google.com/uc?id=1I4hV4VNk_HDhYTtPEZj8olmeJyQL1Iwm"/>
          <p>
            Then we can calculate the standard deviation after splitting the data according to a feature.
          </p>
          {String.raw`$$
          S(L, F) = \sum_{c \in F} P(c)S(c)
          $$`}
          <p>
            For example, we can calculate the standard deviation for outlook as below.
          </p>
          <FancyBox caption="SD" alt="SD" style={{width:'500px', height:'200px'}} link="https://drive.google.com/uc?id=1N88gFOgiphzm8RZALBudFTww6cn2cvcf" />
          <p>
            Then, the next thing we should do is calculate the standard deviation for all feature. And calculate the 
            Standard Deviation Reduction (SDR). We choose the highest standard deviation reduction to split the feature. the formula of 
            SDR is as below
          </p>
          {String.raw`$$
          SDR(L, F) = S(L) - S(L,F)
          $$`}
          <FancyBox caption="SDR" alt="SDR" style={{width:'500px', height:'200px'}} link="https://drive.google.com/uc?id=1Br5lbIr9ef1cfIhOPpWtCen12oXUjGau" />
          <p>
            In practice, we will not split forever for every single features. There will be some termination
            criteria for a node. For example, when the coefficient of deviation becomes smaller than a certain threshold (10%).
          </p>
          {String.raw`$$
          \text{Coefficient of Variation} = \frac{\text{Std}}{\bar{x}} * 100%
          $$`}
          <FancyBox caption="CV" alt="CV" style={{width:'500px', height:'200px'}} link="https://drive.google.com/uc?id=1wW57o3OW5yzq4G8p20luvtwYubdC9fCd" />
          <p>
            So in this case, we will not split overcast anymore and stop the splitting process for this node.
          </p>
          <FancyBox caption="CV_result" alt="CV_result" style={{width:'400px', height:'200px'}} link="https://drive.google.com/uc?id=11FS93NsVxV01NzD1bbK7SahRDzMGdtUQ" />
        </Page>
)}}

export default HomePage;