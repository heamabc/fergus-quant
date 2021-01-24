import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, { MinorTitle } from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import Mathjex from '../../../CommonComponents/Mount/Mathjex/Mathjex'
import FancyBox from '../../../CommonComponents/FancyBox/Fancybox'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

class HomePage extends Component {
    render() {
      const next_line = '\n'
      const tab = '  '
      return (
        <Page>    
          <Mathjex />
          <CodeSnippet />
          <Title label="Sorting Algorithm" />
          <p>
            In this post, I will discuss about some popular sorting algorithm, the logic behind it, and the python script of that algorithm.
            Before jumping into that, here are some good resources on this topic.
            <ul>
              <li><a href="https://www.bigocheatsheet.com/">Big O of sorting algorithm</a></li>
              <li><a href="https://www.youtube.com/watch?v=kPRA0W1kECg">Visualisation of sorting algorithm</a></li>
            </ul>
          </p>
          <Title label="Selection Sort" />
          <p>
            It is the most basic sorting algorithm. for each iteration, it will find the minimum of the array.
          </p>
          <pre className="prettyprint lang-python">
          {`def selection_sort(arr): 
    for i in range(len(arr)): 
  
        # Find minimum element from i to end of array 
        min_idx = i 
        for j in range(i+1, len(arr)): 
            if arr[min_idx] > arr[j]: 
              min_idx = j 
            
            # Swap the minimum with the ith element         
            arr[i], arr[min_idx] = arr[min_idx], arr[i]  
    return arr`}
          </pre>
          <Title label="Bubble Sort" />
          <p>
            It is an algorithm that swap the value of element repeatedly if the current element is greater than the next element. After 
            each iteration, we can shift the maximum to the end.
          </p>
          <pre className="prettyprint lang-python">
          {`def bubbleSort(arr): 
    n = len(arr) 

    for i in range(n): 
        for j in range(0, n-i-1): 

            # Traverse the array from 0 to n-i-1. Because last i elements are already in place 
            # Swap if the current element is greater than the next element 
            if arr[j] > arr[j+1] : 
                arr[j], arr[j+1] = arr[j+1], arr[j]
    return arr`}
          </pre>
          <Title label="Insertion Sort" />
          <p>
            It is an algorithm that iterate the array, and insert it to the front for a sorted order.
          </p>
          <pre className="prettyprint lang-python">
          {`def insertionSort(arr): 
  
    # Traverse through 1 to len(arr) 
    for i in range(1, len(arr)): 
  
        key = arr[i] 
        
        # Loop inversely from i-1 to 0 until the element is smaller than i element
        # Then insert i element to right after stopped element.
        j = i-1
        while j >= 0 and key < arr[j] : 
            arr[j + 1] = arr[j] 
            j -= 1
        arr[j + 1] = key 

    return arr`}
          </pre>
        </Page>
      )}}

export default HomePage;