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
import PaperReview from './components/Pages/Home/PaperReview';
import Hireme from './components/Pages/Home//HireMe';
//======================================= Python =========================================
import Basics from './components/Pages/Tutorial/Python/Basics'
import Parallelization from './components/Pages/Tutorial/Python/Parallelization'
import Numpy from './components/Pages/Tutorial/Python/Numpy'
//======================================= Statistics =========================================
import BayesTheorem from './components/Pages/Tutorial/Statistics/BayesTheorem'
import TTestAndANOVA from './components/Pages/Tutorial/Statistics/TTestAndANOVA'
import Heteroskedasticity from './components/Pages/Tutorial/Statistics/Heteroskedasticity'
import StochasticProcess from './components/Pages/Tutorial/Statistics/StochasticProcess'
import MomentGeneratingFunctions from './components/Pages/Tutorial/Statistics/MomentGeneratingFunctions'
import HurstExponent from './components/Pages/Tutorial/Statistics/HurstExponent'
import TimeSeries from './components/Pages/Tutorial/Statistics/TimeSeries'
import NormalDistributionTheory from './components/Pages/Tutorial/Statistics/NormalDistributionTheory'
import PCA from './components/Pages/Tutorial/Statistics/PCA'
//======================================= OPT & EST =========================================
import NewtonMethod from './components/Pages/Tutorial/OptAndEst/NewtonMethod'
import ApproximationOfDerivatives from './components/Pages/Tutorial/OptAndEst/ApproximationOfDerivatives'
//======================================= Econometrics =========================================
import OLS from './components/Pages/Tutorial/Econometrics/OLS'
import GaussianMarkov from './components/Pages/Tutorial/Econometrics/GaussianMarkov'
import GLS from './components/Pages/Tutorial/Econometrics/GLS'
//======================================= DataBase =========================================
import RelationalDataBase from './components/Pages/Tutorial/Database/RelationalDatabase'
//======================================= Software Engineering =========================================
import Linux from './components/Pages/Tutorial/SoftwareEngineering/Linux'
import LinuxEditors from './components/Pages/Tutorial/SoftwareEngineering/LinuxEditors'
import tmux from './components/Pages/Tutorial/SoftwareEngineering/tmux'
import Git from './components/Pages/Tutorial/SoftwareEngineering/Git'
import AnalysisOfAlgorithms from './components/Pages/Tutorial/SoftwareEngineering/AnalysisOfAlgorithms'
import Debug from './components/Pages/Tutorial/SoftwareEngineering/Debug'
import NetworkProtocol from './components/Pages/Tutorial/SoftwareEngineering/NetworkProtocol'
import SortingAlgorithm from './components/Pages/Tutorial/SoftwareEngineering/SortingAlgorithm'
//======================================= Cypto =========================================
import HowBitcoinWorks from './components/Pages/Tutorial/Crypto/HowBitcoinWorks'
import ETH2 from './components/Pages/Tutorial/Crypto/ETH2.0'
import PerpectualSwap from './components/Pages/Tutorial/Crypto/PerpectualSwap'
//======================================= Finance =========================================
import Indexation from './components/Pages/Tutorial/Finance/Indexation'
import TheoryBehindIndexation from './components/Pages/Tutorial/Finance/TheoryBehindIndexation'
import ETP from './components/Pages/Tutorial/Finance/ETP'
import FuturesPricing from './components/Pages/Tutorial/Finance/FuturesPricing'
import BlackScholes from './components/Pages/Tutorial/Finance/BlackScholes'
import OptionsStrategy from './components/Pages/Tutorial/Finance/OptionsStrategy'
import VarianceSwap from './components/Pages/Tutorial/Finance/VarianceSwap'
import VIXIntro from './components/Pages/Tutorial/Finance/VIXIntro'
import CDS from './components/Pages/Tutorial/Finance/CDS'
//======================================= Portfolio Management =========================================
import SAATAA from './components/Pages/Tutorial/PortfolioManagement/SAATAA'
import OptimizingSAA from './components/Pages/Tutorial/PortfolioManagement/OptimizingSAA'
import Benchmark from './components/Pages/Tutorial/PortfolioManagement/Benchmark'
import RiskAdjustedPerformance from './components/Pages/Tutorial/PortfolioManagement/RiskAdjustedPerformance'
import BlackLitterman from './components/Pages/Tutorial/PortfolioManagement/BlackLitterman'
import CovarianceShrinkage from './components/Pages/Tutorial/PortfolioManagement/CovarianceShrinkage'
//======================================= Quant =========================================
import NoArbAndRiskNeuP from './components/Pages/Tutorial/Quant/NoArbAndRiskNeuP'
import PortfolioTheory from './components/Pages/Tutorial/Quant/PortfolioTheory'
import SmartBeta from './components/Pages/Tutorial/Quant/SmartBeta'
import RiskParity from './components/Pages/Tutorial/Quant/RiskParity'
import FamaFrench from './components/Pages/Tutorial/Quant/FamaFrench'
import FamaMcbeth from './components/Pages/Tutorial/Quant/FamaMcbeth'
//======================================= Probability =========================================
import ProbabilityBasics from './components/Pages/Tutorial/Probability/Basics'
import ProbabilityDistributions from './components/Pages/Tutorial/Probability/ProbabilityDistributions'
//======================================= Machine Learning =========================================
import CommonProblem from './components/Pages/Tutorial/MachineLearning/CommonProblem'
import EDA from './components/Pages/Tutorial/MachineLearning/EDA'
import DataCleaning from './components/Pages/Tutorial/MachineLearning/DataCleaning'
import MLBasics from './components/Pages/Tutorial/MachineLearning/MLBasics'
import Regularization from './components/Pages/Tutorial/MachineLearning/Regularization'
import MLTechniques from './components/Pages/Tutorial/MachineLearning/MLTechniques'
import EvaluationMetrics from './components/Pages/Tutorial/MachineLearning/EvaluationMetrics'
import SequenceModelDL from './components/Pages/Tutorial/MachineLearning/SequenceModelDL'
import ImbalancedData from './components/Pages/Tutorial/MachineLearning/ImbalancedData'
import FeatureSelection from './components/Pages/Tutorial/MachineLearning/FeatureSelection'
import BigDataset from  './components/Pages/Tutorial/MachineLearning/BigDataset'
import LogisticRegression from  './components/Pages/Tutorial/MachineLearning/LogisticRegression'
import RegressionDecisionTree from  './components/Pages/Tutorial/MachineLearning/RegressionDecisionTree'
import XGBoost from  './components/Pages/Tutorial/MachineLearning/XGBoost'
import BayesianOptimization from  './components/Pages/Tutorial/MachineLearning/BayesianOptimization'
//======================================= Neural Network =========================================
import NeuralNetworkBascis from './components/Pages/Tutorial/NueralNetwork/NeuralNetworkBasics'
import LearningRateScheduler from './components/Pages/Tutorial/NueralNetwork/LearningRateScheduler'
import WeightInitialization from './components/Pages/Tutorial/NueralNetwork/WeightInitialization'
import ActivationFunction from './components/Pages/Tutorial/NueralNetwork/ActivationFunction'
import DeepLearning from './components/Pages/Tutorial/NueralNetwork/DeepLearning'
import ConvolutionalNN from './components/Pages/Tutorial/NueralNetwork/ConvolutionalNN'
import RecurrentNN from './components/Pages/Tutorial/NueralNetwork/RecurrentNN'
import AutoEncoder from './components/Pages/Tutorial/NueralNetwork/AutoEncoder'
//======================================= Time Series ML =========================================
import DenoisingData from './components/Pages/Tutorial/TimeSeriesML/DenoisingData'
//======================================= Time Series ML =========================================
import WordEmbedding from './components/Pages/Tutorial/NLP/WordEmbedding'
//======================================= GAN =========================================
import VanillaGAN from './components/Pages/Tutorial/GAN/VanillaGAN'
//======================================= AWS =========================================
import ExtendingDisk from './components/Pages/Tutorial/AWS/ExtendingDisk'
import AWSJupyterNotebook from './components/Pages/Tutorial/AWS/AWSJupyterNotebook'
import EC2Connection from './components/Pages/Tutorial/AWS/EC2Connection'
//======================================= Big Data =========================================
import AWSEC2Hadoop from './components/Pages/Tutorial/BigData/AWSEC2Hadoop'
//======================================= Others =========================================
import UsefulWebsite from './components/Pages/Tutorial/Others/UsefulWebsite'

//======================================= Asset Allocation =========================================
import AQuantitativeApproachtoTacticalAssetAllocation from './components/Pages/PaperReview/AssetAllocaion/AQuantitativeApproachtoTacticalAssetAllocation'
import TheBlackLittermanApproachOriginalModelandExtensions from './components/Pages/PaperReview/AssetAllocaion/TheBlack-LittermanApproachOriginalModelandExtensions'

/* TODO
separate router component for each table
*/

const routing = (
    <React.StrictMode>
      <ScrollToTop />
      <Router>
        <Switch>
        <Route exact path="/" component={Home} />
          {/*======================================= Info =========================================*/}

            <Route exact path="/info/education" component={Education} />
            <Route exact path="/info/experience" component={Experience} />
            <Route exact path="/info/recent-projects" component={RecentProjects} />
            <Route exact path="/info/resume" component={Resume} />
            <Route exact path="/info/about" component={About} />
            <Route exact path="/info/hire-me" component={Hireme} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route exact path="/paper-review" component={PaperReview} />

          {/*======================================= Tutorial Route =========================================*/}

          {/*======================================= Python =========================================*/}
          <Route exact path="/tutorial/python/basics" component={Basics} />
          <Route exact path="/tutorial/python/parallelization" component={Parallelization} />
          <Route exact path="/tutorial/python/numpy" component={Numpy} />
          {/*======================================= Statistics =========================================*/}
          <Route exact path="/tutorial/statistics/bayes-theorem" component={BayesTheorem} />
          <Route exact path="/tutorial/statistics/Heteroskedasticity" component={Heteroskedasticity} />
          <Route exact path="/tutorial/statistics/ttest-and-anova" component={TTestAndANOVA} />
          <Route exact path="/tutorial/statistics/stochastic-process" component={StochasticProcess} />
          <Route exact path="/tutorial/statistics/moment-generating-functions" component={MomentGeneratingFunctions} />
          <Route exact path="/tutorial/statistics/hurst-exponent" component={HurstExponent} />
          <Route exact path="/tutorial/statistics/time-series" component={TimeSeries} />
          <Route exact path="/tutorial/statistics/normal-distribution-theory" component={NormalDistributionTheory} />
          <Route exact path="/tutorial/statistics/PCA" component={PCA} />
          \{/*======================================= Opt & Est =========================================*/}
          <Route exact path="/tutorial/opt-and-est/optimization-and-newton-method" component={NewtonMethod} />
          <Route exact path="/tutorial/opt-and-est/approximation-of-derivatives" component={ApproximationOfDerivatives} />
          {/*======================================= Econometrics =========================================*/}
          <Route exact path="/tutorial/econometrics/OLS" component={OLS} />
          <Route exact path="/tutorial/econometrics/gaussian-markov-theorem" component={GaussianMarkov} />
          <Route exact path="/tutorial/econometrics/GLS" component={GLS} />
          {/*======================================= Database =========================================*/}
          <Route exact path="/tutorial/database/relational-database" component={RelationalDataBase} />
          {/*======================================= Software Engineering =========================================*/}
          <Route exact path="/tutorial/software-engineering/linux" component={Linux} />
          <Route exact path="/tutorial/software-engineering/linux-text-editors" component={LinuxEditors} />
          <Route exact path="/tutorial/software-engineering/tmux" component={tmux} />
          <Route exact path="/tutorial/software-engineering/git" component={Git} />
          <Route exact path="/tutorial/software-engineering/analysis-of-algorithms" component={AnalysisOfAlgorithms} />
          <Route exact path="/tutorial/software-engineering/debug" component={Debug} />
          <Route exact path="/tutorial/software-engineering/network-protocol" component={NetworkProtocol} />
          <Route exact path="/tutorial/software-engineering/sorting-algorithm" component={SortingAlgorithm} />
          {/*======================================= Finance =========================================*/}
          <Route exact path="/tutorial/crypto/ETH2.0" component={ETH2} />
          <Route exact path="/tutorial/crypto/how-bitcoin-works" component={HowBitcoinWorks} />
          <Route exact path="/tutorial/crypto/perpectual-swap" component={PerpectualSwap} />
          {/*======================================= Finance =========================================*/}
          <Route exact path="/tutorial/finance/indexation" component={Indexation} />
          <Route exact path="/tutorial/finance/theory-behind-indexation" component={TheoryBehindIndexation} />
          <Route exact path="/tutorial/finance/ETP/" component={ETP} />
          <Route exact path="/tutorial/finance/futures-pricing" component={FuturesPricing} />
          <Route exact path="/tutorial/finance/black-scholes" component={BlackScholes} />
          <Route exact path="/tutorial/finance/options-strategy" component={OptionsStrategy} />
          <Route exact path="/tutorial/finance/variance-swap" component={VarianceSwap} />
          <Route exact path="/tutorial/finance/VIX-Introduction" component={VIXIntro} />
          <Route exact path="/tutorial/finance/CDS-Introduction" component={CDS} />
          {/*======================================= Portfolio Management =========================================*/}
          <Route exact path="/tutorial/portfolio-management/SAA-TAA" component={SAATAA} />
          <Route exact path="/tutorial/portfolio-management/optimizing-SAA" component={OptimizingSAA} />
          <Route exact path="/tutorial/portfolio-management/risk-adjusted-performance" component={RiskAdjustedPerformance} />
          <Route exact path="/tutorial/portfolio-management/benchmark" component={Benchmark} />
          <Route exact path="/tutorial/portfolio-management/covariance-shrinkage" component={CovarianceShrinkage} />
          <Route exact path="/tutorial/portfolio-management/black-litterman" component={BlackLitterman} />
          {/*======================================= Quant =========================================*/}
          <Route exact path="/tutorial/quant/no-arb&risk-neu-p/" component={NoArbAndRiskNeuP} />
          <Route exact path="/tutorial/quant/portfolio-theory" component={PortfolioTheory} />
          <Route exact path="/tutorial/quant/smart-beta" component={SmartBeta} />
          <Route exact path="/tutorial/quant/risk-parity" component={RiskParity} />
          <Route exact path="/tutorial/quant/fama-french" component={FamaFrench} />
          <Route exact path="/tutorial/quant/fama-mcbeth" component={FamaMcbeth} />
          {/*======================================= Quant =========================================*/}
          <Route exact path="/tutorial/probability/basics" component={ProbabilityBasics} />
          <Route exact path="/tutorial/probability/probability-distributions" component={ProbabilityDistributions} />
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
          <Route exact path="/tutorial/AWS/ec2-connection" component={EC2Connection} />
          {/*======================================= Big Data =========================================*/}
          <Route exact path="/tutorial/big-data/aws-ec2-hadoop" component ={AWSEC2Hadoop} />
          {/*======================================= Others =========================================*/}
          <Route exact path="/tutorial/others/useful-website" component={UsefulWebsite} />

            
          {/*======================================= Paper Review Route =========================================*/}

          {/*======================================= Asset Allocation =========================================*/}
          <Route exact path="/paper-review/asset_allocation/A-Quantitative-Approach-to-Tactical-Asset-Allocation" component={AQuantitativeApproachtoTacticalAssetAllocation} />
          <Route exact path="/paper-review/asset_allocation/The-Black-Litterman-Approach-Original-Model-and-Extensions" component={TheBlackLittermanApproachOriginalModelandExtensions} />
            

          <Redirect to="/" />
      </Switch>
    </Router>
    </React.StrictMode>
)

ReactDOM.render(routing, document.getElementById('root'))
