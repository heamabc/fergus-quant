import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <Mathjex />
                <Title label="Time Complexity" />
                <p><a href="https://www.bigocheatsheet.com/">Cheatsheet</a></p>
                <PassageTitle label="Meaning of Big O" />
                <p>
                    The big O notation is to measure the upper bound of the number of operations needed aymptotically for an algorithm. The n inside the big O notation referse to he input size. 
                    When we tak about big O, we need to think, as the input size grow larger and larger, how many operation will be increased?
                </p>
                <p>
                    The below graph can give you an idea how the input size affect the number of operation.
                </p>
                <FancyBox caption="Big O Graph" alt="Big O Graph" link="https://drive.google.com/uc?id=18LM8KObV7jlY298kf-HEE14-09QBFW0K"/>
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
                    Logarithmic time complexities usually apply to algorithms that divide problems in half. But what does that mean? Think of how the binary search work. It 
                    first search the middle of the list. If our wanted number is larger than the middle one, we will continue the above process in the larger half part of the 
                    list. Otherwise, we will search it in the smaller part.
                </p>
                <p>
                    We can see that for each iteration, we will divide the list in half. When we think of the worst-case scenario, i.e. the element we wanted is at the very 
                    last half that only contains one element. It will run the loop for {String.raw`\( log_2(n) \)`} times. That is, if the length of list is 2, we need to run once, 
                    if it is 4, we need to run twice, if it is 8, we need to run 3 times, and so on and so forth. Therefore, the number of operations depends on the logarithm of the 
                    length of the list.
                </p>

                <MinorTitle label="Example" />
                <ul>
                    <li>Binary search in a sorted array</li>
                </ul>
                <PassageTitle label="Upper Bound of number of operations" />
                <p>
                    Remember big O notation only measures the upper bound of the number of operations. When we have 2 algorithms that need to be run. We only use the larger one as our 
                    big O notation. For example, if we need to run a linear search (O(n)) than run a binary search (O(log n )). The big O notation is the larger one, ie. O(n).
                </p>
            </Page>
        )}}

export default HomePage;