import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import ScrollToTop from './components/CommonComponents/ScrollToTop/ScrollToTop'
import './index.css';
//======================================= Info =========================================
import Home from './components/Pages/Home/Home';
import Education from './components/Pages/Home/Education';
import Experience from './components/Pages/Home/Experience';
import RecentProjects from './components/Pages/Home/RecentProjects';
import Resume from './components/Pages/Home/Resume';
import About from './components/Pages/Home/About';
import Tutorial from './components/Pages/Home/Tutorial';
//======================================= Python =========================================
import Basics from './components/Pages/Python/Basics'
import Parallelization from './components/Pages/Python/Parallelization'
import Numpy from './components/Pages/Python/Numpy'
//======================================= Statistics =========================================
import Probability from './components/Pages/Statistics/Probability'
import TTestAndANOVA from './components/Pages/Statistics/TTestAndANOVA'
import Heteroskedasticity from './components/Pages/Statistics/Heteroskedasticity'
import StochasticProcess from './components/Pages/Statistics/StochasticProcess'
import MomentGeneratingFunctions from './components/Pages/Statistics/MomentGeneratingFunctions'
import HurstExponent from './components/Pages/Statistics/HurstExponent'
import TimeSeries from './components/Pages/Statistics/TimeSeries'
import NormalDistributionTheory from './components/Pages/Statistics/NormalDistributionTheory'
import PCA from './components/Pages/Statistics/PCA'
//======================================= Econometrics =========================================
import OLS from './components/Pages/Econometrics/OLS'
import GaussianMarkov from './components/Pages/Econometrics/GaussianMarkov'
import GLS from './components/Pages/Econometrics/GLS'
//======================================= DataBase =========================================
import RelationalDataBase from './components/Pages/Database/RelationalDatabase'
//======================================= Software Engineering =========================================
import Linux from './components/Pages/SoftwareEngineering/Linux'
import Git from './components/Pages/SoftwareEngineering/Git'
import AnalysisOfAlgorithms from './components/Pages/SoftwareEngineering/AnalysisOfAlgorithms'
import Debug from './components/Pages/SoftwareEngineering/Debug'
import NetworkProtocol from './components/Pages/SoftwareEngineering/NetworkProtocol'
import SortingAlgorithm from './components/Pages/SoftwareEngineering/SortingAlgorithm'
//======================================= Finance =========================================
import OptionsStrategy from './components/Pages/Finance/OptionsStrategy'
//======================================= Quant =========================================
import PortfolioTheory from './components/Pages/Quant/PortfolioTheory'
import SmartBeta from './components/Pages/Quant/SmartBeta'
//======================================= Machine Learning =========================================
import EDA from './components/Pages/MachineLearning/EDA'
import DataCleaning from './components/Pages/MachineLearning/DataCleaning'
import MLBasics from './components/Pages/MachineLearning/MLBasics'
import Regularization from './components/Pages/MachineLearning/Regularization'
import MLTechniques from './components/Pages/MachineLearning/MLTechniques'
import EvaluationMetrics from './components/Pages/MachineLearning/EvaluationMetrics'
import SequenceModelDL from './components/Pages/MachineLearning/SequenceModelDL'
import ImbalancedData from './components/Pages/MachineLearning/ImbalancedData'
import FeatureSelection from './components/Pages/MachineLearning/FeatureSelection'
import BigDataset from  './components/Pages/MachineLearning/BigDataset'
import LogisticRegression from  './components/Pages/MachineLearning/LogisticRegression'
import RegressionDecisionTree from  './components/Pages/MachineLearning/RegressionDecisionTree'
import XGBoost from  './components/Pages/MachineLearning/XGBoost'
//======================================= Neural Network =========================================
import NeuralNetworkBascis from './components/Pages/NueralNetwork/NeuralNetworkBasics'
import LearningRateScheduler from './components/Pages/NueralNetwork/LearningRateScheduler'
import WeightInitialization from './components/Pages/NueralNetwork/WeightInitialization'
import ActivationFunction from './components/Pages/NueralNetwork/ActivationFunction'
import DeepLearning from './components/Pages/NueralNetwork/DeepLearning'
import RecurrentNN from './components/Pages/NueralNetwork/RecurrentNN'
import AutoEncoder from './components/Pages/NueralNetwork/AutoEncoder'
//======================================= Big Data =========================================
import AWSEC2Hadoop from './components/Pages/BigData/AWSEC2Hadoop'
//======================================= Others =========================================
import AWSJupyterNotebook from './components/Pages/Others/AWSJupyterNotebook'
import UsefulWebsite from './components/Pages/Others/UsefulWebsite'

/* TODO
separate router component for each table
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

          <Route exact path="/tutorial/python/basics" component={Basics} />
          <Route exact path="/tutorial/python/parallelization" component={Parallelization} />
          <Route exact path="/tutorial/python/numpy" component={Numpy} />

          <Route exact path="/tutorial/statistics/Probability" component={Probability} />
          <Route exact path="/tutorial/statistics/Heteroskedasticity" component={Heteroskedasticity} />
          <Route exact path="/tutorial/statistics/ttest-and-anova" component={TTestAndANOVA} />
          <Route exact path="/tutorial/statistics/stochastic-process" component={StochasticProcess} />
          <Route exact path="/tutorial/statistics/moment-generating-functions" component={MomentGeneratingFunctions} />
          <Route exact path="/tutorial/statistics/hurst-exponent" component={HurstExponent} />
          <Route exact path="/tutorial/statistics/time-series" component={TimeSeries} />
          <Route exact path="/tutorial/statistics/normal-distribution-theory" component={NormalDistributionTheory} />
          <Route exact path="/tutorial/statistics/PCA" component={PCA} />

          <Route exact path="/tutorial/econometrics/OLS" component={OLS} />
          <Route exact path="/tutorial/econometrics/gaussian-markov-theorem" component={GaussianMarkov} />
          <Route exact path="/tutorial/econometrics/GLS" component={GLS} />

          <Route exact path="/tutorial/database/relational-database" component={RelationalDataBase} />

          <Route exact path="/tutorial/software-engineering/linux" component={Linux} />
          <Route exact path="/tutorial/software-engineering/git" component={Git} />
          <Route exact path="/tutorial/software-engineering/analysis-of-algorithms" component={AnalysisOfAlgorithms} />
          <Route exact path="/tutorial/software-engineering/debug" component={Debug} />
          <Route exact path="/tutorial/software-engineering/network-protocol" component={NetworkProtocol} />
          <Route exact path="/tutorial/software-engineering/sorting-algorithm" component={SortingAlgorithm} />

          <Route exact path="/tutorial/finance/options-strategy" component={OptionsStrategy} />

          <Route exact path="/tutorial/quant/portfolio-theory" component={PortfolioTheory} />
          <Route exact path="/tutorial/quant/smart-beta" component={SmartBeta} />

          <Route exact path="/tutorial/machine-learning/eda" component={EDA} />
          <Route exact path="/tutorial/machine-learning/data-cleaning" component={DataCleaning} />
          <Route exact path="/tutorial/machine-learning/machine-learning-basics" component={MLBasics} />
          <Route exact path="/tutorial/machine-learning/regularization" component={Regularization} />
          <Route exact path="/tutorial/machine-learning/machine-learning-techniques" component={MLTechniques} />
          <Route exact path="/tutorial/machine-learning/evaluation-metrics" component={EvaluationMetrics} />
          <Route exact path="/tutorial/machine-learning/sequence-model-with-deep-learning" component={SequenceModelDL} />
          <Route exact path="/tutorial/machine-learning/imbalanced-data" component={ImbalancedData} />
          <Route exact path="/tutorial/machine-learning/feature-selection" component={FeatureSelection} />
          <Route exact path="/tutorial/machine-learning/big-dataset" component={BigDataset} />
          <Route exact path="/tutorial/machine-learning/logistic-regression" component={LogisticRegression} />
          <Route exact path="/tutorial/machine-learning/regression-decision-tree" component={RegressionDecisionTree} />
          <Route exact path="/tutorial/machine-learning/xgboost" component={XGBoost} />
          
          <Route exact path="/tutorial/neural-network/neural-network-basics" component={NeuralNetworkBascis} />
          <Route exact path="/tutorial/neural-network/activation-function" component={ActivationFunction} />
          <Route exact path="/tutorial/neural-network/weight-initialization" component={WeightInitialization} />
          <Route exact path="/tutorial/neural-network/learning-rate-scheduler" component={LearningRateScheduler} />
          <Route exact path="/tutorial/neural-network/deep-learning" component={DeepLearning} />
          <Route exact path="/tutorial/neural-network/recurrent-neural-network" component={RecurrentNN} />
          <Route exact path="/tutorial/neural-network/auto-encoder" component={AutoEncoder} />

          <Route exact path="/tutorial/big-data/aws-ec2-hadoop" component ={AWSEC2Hadoop} />

          <Route exact path="/tutorial/others/aws-jupyter-notebook" component={AWSJupyterNotebook} />
          <Route exact path="/tutorial/others/useful-website" component={UsefulWebsite} />
          <Redirect to="/" />
      </Switch>
    </Router>
    </React.StrictMode>
)

ReactDOM.render(routing, document.getElementById('root'))
