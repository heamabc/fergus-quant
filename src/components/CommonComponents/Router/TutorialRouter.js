import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

//======================================= Python =========================================
import Basics from '../../Pages/Python/Basics'
import Parallelization from '../../Pages/Python/Parallelization'
import Numpy from '../../Pages/Python/Numpy'
//======================================= Statistics =========================================
import Probability from '../../Pages/Statistics/Probability'
import BayesTheorem from '../../Pages/Statistics/BayesTheorem'
import TTestAndANOVA from '../../Pages/Statistics/TTestAndANOVA'
import Heteroskedasticity from '../../Pages/Statistics/Heteroskedasticity'
import StochasticProcess from '../../Pages/Statistics/StochasticProcess'
import MomentGeneratingFunctions from '../../Pages/Statistics/MomentGeneratingFunctions'
import HurstExponent from '../../Pages/Statistics/HurstExponent'
import TimeSeries from '../../Pages/Statistics/TimeSeries'
import NormalDistributionTheory from '../../Pages/Statistics/NormalDistributionTheory'
import PCA from '../../Pages/Statistics/PCA'
//======================================= Econometrics =========================================
import OLS from '../../Pages/Econometrics/OLS'
import GaussianMarkov from '../../Pages/Econometrics/GaussianMarkov'
import GLS from '../../Pages/Econometrics/GLS'
//======================================= DataBase =========================================
import RelationalDataBase from '../../Pages/Database/RelationalDatabase'
//======================================= Software Engineering =========================================
import Linux from '../../Pages/SoftwareEngineering/Linux'
import Git from '../../Pages/SoftwareEngineering/Git'
import AnalysisOfAlgorithms from '../../Pages/SoftwareEngineering/AnalysisOfAlgorithms'
import Debug from '../../Pages/SoftwareEngineering/Debug'
import NetworkProtocol from '../../Pages/SoftwareEngineering/NetworkProtocol'
import SortingAlgorithm from '../../Pages/SoftwareEngineering/SortingAlgorithm'
//======================================= Finance =========================================
import Indexation from '../../Pages/Finance/Indexation'
import TheoryBehindIndexation from '../../Pages/Finance/TheoryBehindIndexation'
import FuturesPricing from '../../Pages/Finance/FuturesPricing'
import OptionsStrategy from '../../Pages/Finance/OptionsStrategy'
//======================================= Portfolio Management =========================================
import SAATAA from '../../Pages/PortfolioManagement/SAATAA'
import OptimizingSAA from '../../Pages/PortfolioManagement/OptimizingSAA'
import Benchmark from '../../Pages/PortfolioManagement/Benchmark'
import RiskAdjustedPerformance from '../../Pages/PortfolioManagement/RiskAdjustedPerformance'
//======================================= Quant =========================================
import NoArbAndRiskNeuP from '../../Pages/Quant/NoArbAndRiskNeuP'
import PortfolioTheory from '../../Pages/Quant/PortfolioTheory'
import SmartBeta from '../../Pages/Quant/SmartBeta'
import RiskParity from '../../Pages/Quant/RiskParity'
//======================================= Machine Learning =========================================
import CommonProblem from '../../Pages/MachineLearning/CommonProblem'
import EDA from '../../Pages/MachineLearning/EDA'
import DataCleaning from '../../Pages/MachineLearning/DataCleaning'
import MLBasics from '../../Pages/MachineLearning/MLBasics'
import Regularization from '../../Pages/MachineLearning/Regularization'
import MLTechniques from '../../Pages/MachineLearning/MLTechniques'
import EvaluationMetrics from '../../Pages/MachineLearning/EvaluationMetrics'
import SequenceModelDL from '../../Pages/MachineLearning/SequenceModelDL'
import ImbalancedData from '../../Pages/MachineLearning/ImbalancedData'
import FeatureSelection from '../../Pages/MachineLearning/FeatureSelection'
import BigDataset from  '../../Pages/MachineLearning/BigDataset'
import LogisticRegression from  '../../Pages/MachineLearning/LogisticRegression'
import RegressionDecisionTree from  '../../Pages/MachineLearning/RegressionDecisionTree'
import XGBoost from  '../../Pages/MachineLearning/XGBoost'
import BayesianOptimization from  '../../Pages/MachineLearning/BayesianOptimization'
//======================================= Neural Network =========================================
import NeuralNetworkBascis from '../../Pages/NueralNetwork/NeuralNetworkBasics'
import LearningRateScheduler from '../../Pages/NueralNetwork/LearningRateScheduler'
import WeightInitialization from '../../Pages/NueralNetwork/WeightInitialization'
import ActivationFunction from '../../Pages/NueralNetwork/ActivationFunction'
import DeepLearning from '../../Pages/NueralNetwork/DeepLearning'
import ConvolutionalNN from '../../Pages/NueralNetwork/ConvolutionalNN'
import RecurrentNN from '../../Pages/NueralNetwork/RecurrentNN'
import AutoEncoder from '../../Pages/NueralNetwork/AutoEncoder'
//======================================= Time Series ML =========================================
import DenoisingData from '../../Pages/TimeSeriesML/DenoisingData'
//======================================= Time Series ML =========================================
import WordEmbedding from '../../Pages/NLP/WordEmbedding'
//======================================= GAN =========================================
import VanillaGAN from '../../Pages/GAN/VanillaGAN'
//======================================= AWS =========================================
import ExtendingDisk from '../../Pages/AWS/ExtendingDisk'
import AWSJupyterNotebook from '../../Pages/AWS/AWSJupyterNotebook'
//======================================= Big Data =========================================
import AWSEC2Hadoop from '../../Pages/BigData/AWSEC2Hadoop'
//======================================= Others =========================================
import UsefulWebsite from '../../Pages/Others/UsefulWebsite'

export default function TutorialRouter({ match }) {
  return (
    <div>
      <Router>
        <Switch>
            {/*======================================= Python =========================================*/}
          <Route exact path="/tutorial/python/basics" component={Basics} />
          <Route exact path="/tutorial/python/parallelization" component={Parallelization} />
          <Route exact path="/tutorial/python/numpy" component={Numpy} />
          {/*======================================= Statistics =========================================*/}
          <Route exact path="/tutorial/statistics/Probability" component={Probability} />
          <Route exact path="/tutorial/statistics/bayes-theorem" component={BayesTheorem} />
          <Route exact path="/tutorial/statistics/Heteroskedasticity" component={Heteroskedasticity} />
          <Route exact path="/tutorial/statistics/ttest-and-anova" component={TTestAndANOVA} />
          <Route exact path="/tutorial/statistics/stochastic-process" component={StochasticProcess} />
          <Route exact path="/tutorial/statistics/moment-generating-functions" component={MomentGeneratingFunctions} />
          <Route exact path="/tutorial/statistics/hurst-exponent" component={HurstExponent} />
          <Route exact path="/tutorial/statistics/time-series" component={TimeSeries} />
          <Route exact path="/tutorial/statistics/normal-distribution-theory" component={NormalDistributionTheory} />
          <Route exact path="/tutorial/statistics/PCA" component={PCA} />
          {/*======================================= Econometrics =========================================*/}
          <Route exact path="/tutorial/econometrics/OLS" component={OLS} />
          <Route exact path="/tutorial/econometrics/gaussian-markov-theorem" component={GaussianMarkov} />
          <Route exact path="/tutorial/econometrics/GLS" component={GLS} />
          {/*======================================= Database =========================================*/}
          <Route exact path="/tutorial/database/relational-database" component={RelationalDataBase} />
          {/*======================================= Software Engineering =========================================*/}
          <Route exact path="/tutorial/software-engineering/linux" component={Linux} />
          <Route exact path="/tutorial/software-engineering/git" component={Git} />
          <Route exact path="/tutorial/software-engineering/analysis-of-algorithms" component={AnalysisOfAlgorithms} />
          <Route exact path="/tutorial/software-engineering/debug" component={Debug} />
          <Route exact path="/tutorial/software-engineering/network-protocol" component={NetworkProtocol} />
          <Route exact path="/tutorial/software-engineering/sorting-algorithm" component={SortingAlgorithm} />
          {/*======================================= Finance =========================================*/}
          <Route exact path="/tutorial/finance/indexation" component={Indexation} />
          <Route exact path="/tutorial/finance/theory-behind-indexation" component={TheoryBehindIndexation} />
          <Route exact path="/tutorial/finance/futures-pricing" component={FuturesPricing} />
          <Route exact path="/tutorial/finance/options-strategy" component={OptionsStrategy} />
          {/*======================================= Portfolio Management =========================================*/}
          <Route exact path="/tutorial/portfolio-management/SAA-TAA" component={SAATAA} />
          <Route exact path="/tutorial/portfolio-management/optimizing-SAA" component={OptimizingSAA} />
          <Route exact path="/tutorial/portfolio-management/risk-adjusted-performance" component={RiskAdjustedPerformance} />
          <Route exact path="/tutorial/portfolio-management/benchmark" component={Benchmark} />
          {/*======================================= Quant =========================================*/}
          <Route exact path="/tutorial/quant/no-arb&risk-neu-p/" component={NoArbAndRiskNeuP} />
          <Route exact path="/tutorial/quant/portfolio-theory" component={PortfolioTheory} />
          <Route exact path="/tutorial/quant/smart-beta" component={SmartBeta} />
          <Route exact path="/tutorial/quant/risk-parity" component={RiskParity} />
          {/*======================================= Machine Learning =========================================*/}
          <Route exact path="/tutorial/machine-learning/common-problem" component={CommonProblem} />
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
          <Route exact path="/tutorial/machine-learning/bayesian-optimization" component={BayesianOptimization} />
          {/*======================================= Neural Network =========================================*/}
          <Route exact path="/tutorial/neural-network/neural-network-basics" component={NeuralNetworkBascis} />
          <Route exact path="/tutorial/neural-network/activation-function" component={ActivationFunction} />
          <Route exact path="/tutorial/neural-network/weight-initialization" component={WeightInitialization} />
          <Route exact path="/tutorial/neural-network/learning-rate-scheduler" component={LearningRateScheduler} />
          <Route exact path="/tutorial/neural-network/deep-learning" component={DeepLearning} />
          <Route exact path="/tutorial/neural-network/convolutional-neural-network" component={ConvolutionalNN} />
          <Route exact path="/tutorial/neural-network/recurrent-neural-network" component={RecurrentNN} />
          <Route exact path="/tutorial/neural-network/auto-encoder" component={AutoEncoder} />
          {/*======================================= Time Series ML =========================================*/}
          <Route exact path="/tutorial/time-series-ml/denoising-data" component={DenoisingData} />
          {/*======================================= Time Series ML =========================================*/}
          <Route exact path="/tutorial/time-series-ml/word-embeddings" component={WordEmbedding} />
          {/*======================================= GAN =========================================*/}
          <Route exact path="/tutorial/GAN/vanilla-GAN" component={VanillaGAN} />
          {/*======================================= AWS =========================================*/}
          <Route exact path="/tutorial/AWS/extending-disk-space" component={ExtendingDisk} />
          <Route exact path="/tutorial/AWS/aws-jupyter-notebook" component={AWSJupyterNotebook} />
          {/*======================================= Big Data =========================================*/}
          <Route exact path="/tutorial/big-data/aws-ec2-hadoop" component ={AWSEC2Hadoop} />
          {/*======================================= Others =========================================*/}
          <Route exact path="/tutorial/others/useful-website" component={UsefulWebsite} />
        </Switch>
        </Router>
      </div>
  )}