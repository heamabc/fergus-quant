import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import Mathjex from '../../CommonComponents/Mount/Mathjex'
import '../css/AllPages.scss';
import '../css/sunburst.css'

class HomePage extends Component {
    render() {
        return (
        <Page>
            <Mathjex />
            <Title label="One Sample T-Test" />
            <PassageTitle label="Usage" />
            <p>
                one sample t-test is to test if the mean of the sample is equal to a constant. For example, is the mean equal to 0.
            </p>
            <PassageTitle label="Inference" />
            <MinorTitle label="Central Limite Theorem" />
            <p>
                The central limit theorem stats that if the sample size is large, then the sampling distribution will be approximately
                normally distributed. Specifically, the sample means will be normally distributed as below
                {String.raw`$$ \bar{x} \sim N(\mu,\frac{\sigma}{\sqrt{n}}) $$`}
            </p>
            <MinorTitle label="t-distribution" />
            <p>
                However, in practice, the value of {String.raw`\( \sigma \)`} is unknown. We have to estimate the variance. As we know 
                the distribution of the estimate will also be affected by central limite theorem. Therefore, the final distriubtion of the 
                sample mean will not follow a normal distribution but instead of t-distribution when we use sample variance.
                {String.raw`$$ \bar{x} \sim t_{(n-1)} $$`}
            </p>
            <Title label="Two Samples T-Test" />
            <PassageTitle label="Usage" />
            <p>
                Two samples T-Test is to test whether the mean of two groups of variables are the same.
            </p>
            <PassageTitle label="Inference" />
            <MinorTitle label="From one sample to two sample" />
            <p>
                The inference of two sample is essentially the same as one sample. In the two sample test, our targeted data is no longer X,
                rather we focus on the difference between two data.
                {String.raw`$$ X_1 - X_2 $$`}
                We can see that all the inference in one sample can apply to this distribution.
            </p>

            <Title label="One way ANOVA" />
            <PassageTitle label="Why not multiple t test" />
            <p> 
                <p>
                    There are 2 problems with multiple t test, with increasing number of groups, the combination of pairs will increase very rapidly. It 
                    requires a lot of computing power and time.
                </p>
                <p>
                    The second problem is that we would have a great chance of making a Type 1 error (False positive, reject the true null hypothesis).
                    The explanation can be seen in this <a href="http://grants.hhp.coe.uh.edu/doconnor/PEP6305/Multiple%20t%20tests.htm" >page</a>.
                </p>
            </p>
            <PassageTitle label="Assumptions" />
            <p>
                Like many tests, F distribution has some assumptions. There are total of 3 assumptions
                <ul>
                    <li><strong>Independent Observation </strong>:Samples are independent.</li>
                    <li><strong>Normality </strong>:The variables are normally distributed or sample size is large</li>
                    <li><strong>Homogeneity of Variance </strong>: Population variances are the same accross groups. </li>
                </ul>
            </p>
            <PassageTitle label="F-distriubtion" />
            <p>
                The test statistic of F-test is the ratio of two scaled sums of squares reflecting different sources of variability.
                {String.raw`$$
                F= \frac{\text{between-group variability}}{\text{within-group variability}}
                $$`}
                <p>
                    Notice that as we are measuring two sources of data, there will be two different degress of freedom.
                    <p>
                        between-group (Numerator) degrees of freedom:
                        {String.raw`$$ \text{  } df_{between} = k-1, k=\text{number of groups} $$`}
                    </p>
                    <p>
                        within-group (Denominator) degress of freedom:
                        {String.raw`$$ df_{within} = n-k, n=\text{total sample size of all groups combines}, k=\text{number of groups} $$`}
                    </p>
                    <p>
                        {String.raw`$$ \frac{SS_{between}/df_{between}}{SS_{within}/df_{within}} $$`}
                    </p>
                </p>
            </p>
            <PassageTitle label="Hypothesis" />
            {String.raw`\begin{align}
            & H_0:\mu_1=\mu_2= \cdots = \mu_k \\
            & H_1:H_0 \text{ is not true}
            \end{align}`}
        </Page>
)}}

export default HomePage;