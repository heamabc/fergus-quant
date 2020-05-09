import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';
import img1 from '../../../assets/Pages/Multithreading/Illustration1.png'
import img2 from '../../../assets/Pages/Multithreading/Illustration2.png'
import img3 from '../../../assets/Pages/Multithreading/Illustration3.png'

class HomePage extends Component {
    componentDidMount()  {
        const script = document.createElement("script");
    
        script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert";
        script.async = true;
    
        document.body.appendChild(script);
      }

    render() {
      return (
        <Page>
            <Title label="Multithreading" />
            <PassageTitle label="Process vs Thread" />
            <p>
                First of all, both process and thread are operating environment feature, meaning that it is not some physical
                component in the computer. 
            </p>
            <p>
                Process provides the resourced need to execute a program. The address space, executable code, handles to system
                objects, etc.. Each process has at least one thread of execution. Process is started with a single thread, 
                the first thread is called primary thread. Process is isolated from other process in terms of recourses. 
            </p>
            <p>
                All threads use the resrouces provided by process. They reference to the same data in the process. Also, each threads
                can communicate with one and other efficiently.
            </p>

            <PassageTitle label="CPU Bound and I/O Bound" />
            <p>
                A program is CPU bound if it would go faster if the CPU were faster. An I/O bound job is a program that could run
                faster if the I/O or networking is faster.
            </p>
            <p>
                When it comes to threading, the program would only run faster if the task is I/O bound. In fact, some program would run 
                slower with multithreading because of the overhead cost of creating thread, managing thread, etc.
            </p>
            <PassageTitle label="Global Interpreter Lock (GIL)" />
            <img src={img1} />
            <img src={img2} />
            <p>
                The above graph show what happens if we implement multithreading. First of all, your python script will always first run on a
                primary thread that read the script from to bottom. Due to the Global interpreter lock (GIL) of python, there can actually be 
                only one thread executing script at a time. The above example show that, a new thread can only be initiate after the primary thread
                read and execute the script related to the thread. It caused some lag to execute the second thread instead of starting both thread 
                concurrently.
            </p>

            <Title label="Multiprocessing" />
            <p>
                Notice that process is more heavy-weighted component in the operating system, the creation and managment of processor will take more
                time compared to thread.
            </p>
            <img src={img1} />
            <img src={img3} />

            <Title label="How to use" />
            <PassageTitle label="Independence of the script" />
            <p>
                Before using multithreading and multiprocessing, we must ensure that the operation and result of each thread/process will not affect 
                each other. Otherwise, there will be some corruption to the operation and results.
            </p>
            <PassageTitle label="Script" />
            <MinorTitle label="Multiprocessing" />
            <pre className="prettyprint linenums lang-python">
                import concurrent.futures {'\n'}
                with concurrent.futures.ProcessPoolExecutor(max_workers=2) as executor: {'\n'}
                    result1 = executor.submit(function1, argument) {'\n'}
                    result2 = executor.submit(function2, argument) 
            </pre>
            <MinorTitle label="Multithreading" />
            <pre className="prettyprint linenums lang-python">
                import concurrent.futures {'\n'}
                with concurrent.futures.ThreadPoolExecutor(max_workers=2) as executor: {'\n'}
                    result1 = executor.submit(function1, argument) {'\n'}
                    result2 = executor.submit(function2, argument) 
            </pre>
        </Page>
    )}}

export default HomePage;