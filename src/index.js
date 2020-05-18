import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import ScrollToTop from './components/CommonComponents/ScrollToTop/ScrollToTop'
import './index.css';
//======================================= Info =========================================
import Home from './components/Pages/Home';
import Education from './components/Pages/Education';
import Experience from './components/Pages/Experience';
import RecentProjects from './components/Pages/RecentProjects';
import Resume from './components/Pages/Resume';
import About from './components/Pages/About';
import Tutorial from './components/Pages/Tutorial';
//======================================= Python =========================================
import Basics from './components/Pages/Python/Basics'
import Parallelization from './components/Pages/Python/Parallelization'
import Numpy from './components/Pages/Python/Numpy'
//======================================= Statistics =========================================
import Econometrics from './components/Pages/Statistics/Econometrics'
import TTestAndANOVA from './components/Pages/Statistics/TTestAndANOVA'
import Heteroskedasticity from './components/Pages/Statistics/Heteroskedasticity'
import StochasticProcess from './components/Pages/Statistics/StochasticProcess'
import MomentGeneratingFunctions from './components/Pages/Statistics/MomentGeneratingFunctions'
import HurstExponent from './components/Pages/Statistics/HurstExponent'
import TimeSeries from './components/Pages/Statistics/TimeSeries'
//======================================= DataBase =========================================
import RelationalDataBase from './components/Pages/Database/RelationalDatabase'
//======================================= Software Engineering =========================================
import Linux from './components/Pages/SoftwareEngineering/Linux'
import Git from './components/Pages/SoftwareEngineering/Git'
import AnalysisOfAlgorithms from './components/Pages/SoftwareEngineering/AnalysisOfAlgorithms'
import Debug from './components/Pages/SoftwareEngineering/Debug'
import NetworkProtocol from './components/Pages/SoftwareEngineering/NetworkProtocol'
//======================================= Quant =========================================
import PortfolioTheory from './components/Pages/Quant/PortfolioTheory'
import SmartBeta from './components/Pages/Quant/SmartBeta'
//======================================= Machine Learning =========================================
import EDA from './components/Pages/MachineLearning/EDA'
import MLBasics from './components/Pages/MachineLearning/MLBasics'
import MLTechniques from './components/Pages/MachineLearning/MLTechniques'
import NeuralNetworkBascis from './components/Pages/MachineLearning/NeuralNetworkBasics'
import DeepLearning from './components/Pages/MachineLearning/DeepLearning'
import SequenceModelDL from './components/Pages/MachineLearning/SequenceModelDL'
//======================================= Big Data =========================================
import AWSEC2Hadoop from './components/Pages/BigData/AWSEC2Hadoop'
//======================================= Others =========================================
import AWSJupyterNotebook from './components/Pages/Others/AWSJupyterNotebook'
import UsefulWebsite from './components/Pages/Others/UsefulWebsite'

/* TODO
separate router and rename the url
*/

const routing = (
    <React.StrictMode>
      <ScrollToTop />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
          <Route exact path="/info/education" component={Education} />
          <Route exact path="/info/experience" component={Experience} />
          <Route exact path="/info/recent-projects" component={RecentProjects} />
          <Route exact path="/info/resume" component={Resume} />
          <Route exact path="/info/about" component={About} />

          <Route exact path="/tutorial" component={Tutorial} />

          <Route exact path="/tutorial/basics" component={Basics} />
          <Route exact path="/tutorial/parallelization" component={Parallelization} />
          <Route exact path="/tutorial/numpy" component={Numpy} />

          <Route exact path="/tutorial/econometrics" component={Econometrics} />
          <Route exact path="/tutorial/Heteroskedasticity" component={Heteroskedasticity} />
          <Route exact path="/tutorial/ttest-and-anova" component={TTestAndANOVA} />
          <Route exact path="/tutorial/stochastic-process" component={StochasticProcess} />
          <Route exact path="/tutorial/moment-generating-functions" component={MomentGeneratingFunctions} />
          <Route exact path="/tutorial/hurst-exponent" component={HurstExponent} />
          <Route exact path="/tutorial/time-series" component={TimeSeries} />

          <Route exact path="/tutorial/relational-database" component={RelationalDataBase} />

          <Route exact path="/tutorial/linux" component={Linux} />
          <Route exact path="/tutorial/git" component={Git} />
          <Route exact path="/tutorial/analysis-of-algorithms" component={AnalysisOfAlgorithms} />
          <Route exact path="/tutorial/debug" component={Debug} />
          <Route exact path="/tutorial/network-protocol" component={NetworkProtocol} />

          <Route exact path="/tutorial/portfolio-theory" component={PortfolioTheory} />
          <Route exact path="/tutorial/smart-beta" component={SmartBeta} />

          <Route exact path="/tutorial/eda" component={EDA} />
          <Route exact path="/tutorial/machine-learning-basics" component={MLBasics} />
          <Route exact path="/tutorial/machine-learning-techniques" component={MLTechniques} />
          <Route exact path="/tutorial/neural-network-basics" component={NeuralNetworkBascis} />
          <Route exact path="/tutorial/deep-learning" component={DeepLearning} />
          <Route exact path="/tutorial/sequence-model-with-deep-learning" component={SequenceModelDL} />

          <Route exact path="/tutorial/aws-ec2-hadoop" component ={AWSEC2Hadoop} />

          <Route exact path="/tutorial/aws-jupyter-notebook" component={AWSJupyterNotebook} />
          <Route exact path="/tutorial/useful-website" component={UsefulWebsite} />
          <Redirect to="/" />
      </Switch>
    </Router>
    </React.StrictMode>
)

ReactDOM.render(routing, document.getElementById('root'))
