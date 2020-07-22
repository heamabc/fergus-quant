import React from 'react';
import {NavLink } from 'react-router-dom';
import './NavigationTable.scss'

/* TODO
Add content within page navigation
*/

const PythonTable = (props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/python/basics/" activeClassName={"ActivePage"}>Basics</NavLink ></li>
            <li><NavLink  to="/tutorial/python/parallelization/" activeClassName={"ActivePage"}>Parallelization</NavLink ></li>
            <li><NavLink  to="/tutorial/python/numpy/" activeClassName={"ActivePage"}>Numpy</NavLink ></li>
        </ul>
    </div>
)

export default PythonTable

export const StatTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/statistics/probability/" activeClassName={"ActivePage"}>Probability</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/Heteroskedasticity/" activeClassName={"ActivePage"}>Heteroskedasticity</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/ttest-and-anova/" activeClassName={"ActivePage"}>T-Test & ANOVA</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/stochastic-process/" activeClassName={"ActivePage"}>Stochastic Process</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/moment-generating-functions/" activeClassName={"ActivePage"}>Moment Generating Functions</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/hurst-exponent/" activeClassName={"ActivePage"}>Hurst Exponent</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/time-series/" activeClassName={"ActivePage"}>Time Series</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/normal-distribution-theory/" activeClassName={"ActivePage"}>Normal Distribution Theory</NavLink ></li>
            <li><NavLink  to="/tutorial/statistics/PCA/" activeClassName={"ActivePage"}>Principal Components Analysis (PCA)</NavLink ></li>
        </ul>
    </div>
)

export const EconometricsTable = (props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/econometrics/OLS/" activeClassName={"ActivePage"}>Ordinary Least Squares (OLS)</NavLink ></li>
            <li><NavLink  to="/tutorial/econometrics/gaussian-markov-theorem/" activeClassName={"ActivePage"}>Gaussian-Markov Theorem</NavLink ></li>
            <li><NavLink  to="/tutorial/econometrics/GLS/" activeClassName={"ActivePage"}>Generalized Least Squared (GLS)</NavLink ></li>
        </ul>
    </div>
)

export const DataBaseTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/database/relational-database/" activeClassName={"ActivePage"}>Relational DataBase</NavLink ></li>
        </ul>
    </div>
)

export const SoftwareEngineeringTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/software-engineering/linux/" activeClassName={"ActivePage"}>Linux</NavLink ></li>
            <li><NavLink  to="/tutorial/software-engineering/git/" activeClassName={"ActivePage"}>Git</NavLink ></li>
            <li><NavLink  to="/tutorial/software-engineering/analysis-of-algorithms/" activeClassName={"ActivePage"}>Analysis of Algorithms</NavLink ></li>
            <li><NavLink  to="/tutorial/software-engineering/debug/" activeClassName={"ActivePage"}>Debug</NavLink ></li>
            <li><NavLink  to="/tutorial/software-engineering/network-protocol/" activeClassName={"ActivePage"}>Network Protocol</NavLink ></li>
            <li><NavLink  to="/tutorial/software-engineering/sorting-algorithm/" activeClassName={"ActivePage"}>Sorting Algorithm</NavLink ></li>
        </ul>
    </div>
)

export const FinanceTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/finance/options-strategy/" activeClassName={"ActivePage"}>Options</NavLink ></li>
        </ul>
    </div>
)

export const QuantTable = (props) =>(
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/quant/portfolio-theory/" activeClassName={"ActivePage"}>Portfolio Theory</NavLink ></li>
            <li><NavLink  to="/tutorial/quant/smart-beta/" activeClassName={"ActivePage"}>Smart Beta</NavLink ></li>
        </ul>
    </div>
)

export const MLTable = (props) =>(
    <div className="NavigationTableContainer" >
		<ul>
            <li><NavLink  to="/tutorial/machine-learning/common-problem/" activeClassName={"ActivePage"}>Common Problem</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/eda/" activeClassName={"ActivePage"}>EDA</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/data-cleaning/" activeClassName={"ActivePage"}>Data Cleaning</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/machine-learning-basics/" activeClassName={"ActivePage"}>Machine Learning Basics</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/regularization/" activeClassName={"ActivePage"}>Regularization</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/machine-learning-techniques/" activeClassName={"ActivePage"}>Machine Learning Techniques</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/evaluation-metrics/" activeClassName={"ActivePage"}>Evaluation Metrics</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/sequence-model-with-deep-learning/" activeClassName={"ActivePage"}>SequenceModel with Deep Learning</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/imbalanced-data/" activeClassName={"ActivePage"}>Imbalanced Data</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/feature-selection/" activeClassName={"ActivePage"}>Feature Selection</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/big-dataset/" activeClassName={"ActivePage"}>Big Dataset</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/logistic-regression/" activeClassName={"ActivePage"}>Logistic Regression</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/regression-decision-tree/" activeClassName={"ActivePage"}>Regression Decision Tree</NavLink ></li>
            <li><NavLink  to="/tutorial/machine-learning/xgboost/" activeClassName={"ActivePage"}>XGBoost</NavLink ></li>
        </ul>
    </div>
) 


export const NNTable = (props) =>(
    <div className="NavigationTableContainer" >
		<ul>
            <li><NavLink  to="/tutorial/neural-network/neural-network-basics/" activeClassName={"ActivePage"}>Neural Network Basics</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/activation-function/" activeClassName={"ActivePage"}>Activation Function</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/weight-initialization/" activeClassName={"ActivePage"}>Weight Initialization</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/learning-rate-scheduler/" activeClassName={"ActivePage"}>Learning Rate Scheduler</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/deep-learning/" activeClassName={"ActivePage"}>Deep Learning</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/convolutional-neural-network/" activeClassName={"ActivePage"}>Convolutional Neural Network</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/recurrent-neural-network/" activeClassName={"ActivePage"}>Recurrent Neural Network</NavLink ></li>
            <li><NavLink  to="/tutorial/neural-network/auto-encoder/" activeClassName={"ActivePage"}>Auto Encoder</NavLink ></li>
        </ul>
    </div>
)

export const BigDataTable = (props) =>(
    <div className="NavigationTableContainer" >
        <ul>
        <li><NavLink  to="/tutorial/big-data/aws-ec2-hadoop/" activeClassName={"ActivePage"}>AWS EC2 Hadoop</NavLink ></li>
        </ul>
    </div>
)

export const OthersTable =(props) => (
    <div className="NavigationTableContainer" >
        <ul>
            <li><NavLink  to="/tutorial/others/useful-website/" activeClassName={"ActivePage"}>Useful Website</NavLink ></li>
            <li><NavLink  to="/tutorial/others/aws-jupyter-notebook/" activeClassName={"ActivePage"}>AWS Juputer Notebook</NavLink ></li>
        </ul>
    </div>
)