import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

import CodeSnippet from '../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>
            <CodeSnippet />
            <PassageTitle label="Multiprocessing" />
            <p>
                Multiprocessing means concurrent execution of multiple processes using more than one processor. 
                <p>
                    Process provides the resourced need to execute a program. The address space, executable code, handles to system
                    objects, etc.. Each process has at least one thread of execution. Process is started with a single thread, 
                    the first thread is called primary thread.
                </p>
                <p>
                    As such, each process has its own memory space.
                </p>
                <p>
                    Multiprocessing can be done by one machine with multiple CPUs, or by a collection of machines 
                    connected by a network. We usually call the collection of machines as a <strong>cluster</strong>.
                </p>
            </p>
            <PassageTitle label="Multithreading" />
            <p>
                All threads use the resrouces provided by process. They share the same memory space provided by the process. 
                Also, each threads can communicate with one and other efficiently.
            </p>
            <p>
                As thread only uses resources provided by process, it is more lightweight.
            </p>
            <p>
                However, it is hard to implement multithreading due to the GIL
            </p>
            <p>
                Libraries imported (e.g. numpy, xgboost) and JIT-compiled code run in low level execution environments can 
                prevent the GIL problem.
            </p>
            <PassageTitle label="Pros & Cons for Numerical Programming"/>
            <ul>
                <li>Thread is more lightweight</li>
                <li>Thread access a shared pool of memory is very convenient</li>
                <li>Thread is more flexible and can be distributed across clusters</li>
            </ul>
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
            <img src="https://drive.google.com/uc?id=158xE8bEGDbweY3BJWkFhALddiqE9_ofc" alt="img1" style={{width:"500px",height:"300px"}}/>
            <img src="https://drive.google.com/uc?id=1ZBJ-XYqxBTOmthna4IiLu1WNzDvrD_2F" alt="img2" style={{width:"500px",height:"300px"}}/>
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
            <img src="https://drive.google.com/uc?id=158xE8bEGDbweY3BJWkFhALddiqE9_ofc" alt="img1" style={{width:"500px",height:"300px"}}/>
            <img src="https://drive.google.com/uc?id=1ScH0oq3VKmXdJ2sTcMOpbCSTMPZUoSFP" alt="img3" style={{width:"500px",height:"300px"}}/>

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