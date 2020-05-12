import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Title label="Time Complexity" />
                <p><a href="https://www.bigocheatsheet.com/">Cheatsheet</a></p>
                <PassageTitle label="Meaning of Big O" />
                <p>
                    We can think of the big O notation is to count the maximum number of operations needed to perform the function.
                </p>
                <img src="https://drive.google.com/uc?id=18LM8KObV7jlY298kf-HEE14-09QBFW0K" style={{height: "100%", width: "100%", "object-fit": "contain"}} alt="img1"/>
                <PassageTitle label="O(1)" />
                <p>
                    An O(1) function is a function that has a constant runtime. Therefore, it is a function that doesn't contain loop, 
                    recursion and call to any other non-constant time function. Even when the function has a loop, if the loop run a constant
                    number of time, it is still an O(1).
                </p>
                <MinorTitle label="Example" />
                <ul>
                    <li>Determine if a number is even</li>
                    <li>Find a value on a map</li>
                </ul>
                <PassageTitle label="O(n)" />
                <p>
                    Runtime grows directly proportion to n
                </p>
                <MinorTitle label="Example" />
                <ul>
                    <li>Get the max value in an array</li>
                    <li>Find an element in a collection (Linear Search)</li>
                </ul>
                <PassageTitle label="O(n^2)" />
                <p>
                    We can think of it as are there 2 inner loops. It has to go through every element twice.
                </p>
                <MinorTitle label="Example" />
                <ul>
                    <li>Check if a collection has duplicated items</li>
                </ul>
                <PassageTitle label="O(log n)" />
                <p>
                    Logarithmic time complexities usually apply to algorithms that divide problems in half.
                </p>
                <MinorTitle label="Example" />
                <ul>
                    <li>Binary search in a sorted array</li>
                </ul>
            </Page>
        )}}

export default HomePage;