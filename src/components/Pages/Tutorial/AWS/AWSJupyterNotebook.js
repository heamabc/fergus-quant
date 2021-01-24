import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

class HomePage extends Component {
  render() {
    return (
      <Page>
        <CodeSnippet />
        <Title label="Connecting to jupyter notebook on AWS" />
        <a href="https://chrisalbon.com/aws/basics/run_project_jupyter_on_amazon_ec2/">Guide</a>
        <PassageTitle label="EC2" />
        <p>
            Launch an ubuntu server. Remember to set the security group inbound rules to all traffic. After launching the 
            EC2, it will give you a <code>.pem</code> file, which will store the private key.
        </p>
        <PassageTitle label="Bash" />
        <p>
            <MinorTitle label="Connection" />
            <pre className="prettyprint lang-bsh">
                ssh -i {"<.pem file>"} ubuntu@{"<Public DNS>"}
            </pre>
            <p>
                We can now connect to the EC2. Then we will help it install anaconda and do some configuration.
            </p>
            <MinorTitle label="Anaconda" />
            <p>You can choose the anaconda version that you want. Here we used 3-4.2.0</p>
            <pre className="prettyprint lang-bsh">
                wget https://repo.continuum.io/archive/Anaconda3-4.2.0-Linux-x86_64.sh
            </pre>
            <p>
                After the installation, we have to restart our bash session in order to see the Anaconda. We just need to type <code>logout</code>
                .Then reconnect to the EC2 the same way we mentioned before. To check if we have successfully install it, we can use the
                command <code>which python</code> and see If it is an anaconda path. 
            </p>
            <MinorTitle label="Certificates for https" />
            <p>
            <pre className="prettyprint linenums lang-bsh">
                mkdir certs {'\n'}
                cd certs {'\n'}
                openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout mycert.pem -out mycert.pem {'\n'}
            </pre>
            After entering the above script, it will ask you a few questions to generate a certificate. 
            </p>
            <MinorTitle label="Configure jupyter notebook" />
            <p>
                Next we need to configure the jupyter notebook. We first generate a configure file and edit it.
                <pre className="prettyprint linenums lang-bsh">
                    jupyter notebook --generate-config {'\n'}
                    cd ~/.jupyter/ {'\n'}
                    vi jupyter_notebook_config.py
                </pre>
                Then type <code>i</code> to enter insert mode. Then paste the follow script to the head of the jupyter_notebook_config.py
                <pre className="prettyprint linenums lang-python">
                c = get_config() {'\n'}
                {'\n'}
                # Kernel config {'\n'}
                c.IPKernelApp.pylab = 'inline'  # if you want plotting support always in your notebook {'\n'}
                {'\n'}
                # Notebook config {'\n'}
                c.NotebookApp.certfile = u'/home/ubuntu/certs/mycert.pem' #location of your certificate file {'\n'}
                c.NotebookApp.ip = '0.0.0.0' {'\n'}
                c.NotebookApp.open_browser = False  #so that the ipython notebook does not opens up a browser by default {'\n'}

                {'\n'}
                c.NotebookApp.port = 8888 # Set the port to 8888, the port we set up in the AWS EC2 set-up 
                </pre>
                Then type <code>esc</code> to exit edit mode. After that, we will exit the insert mode. Typing <code>:wq</code> can make us save the change and quit vi
                editor.
            </p>
            <MinorTitle label="Last Step : Open jupyter notebook" />
            <p>
                With the above instruction, we should be able to launch jupyter notebook. Type <code>jupyter notebook</code> in the bash. Then enter the 
                url <code>{String.raw`https://<DNS name>:8888/`}</code>. We should be able to use the jupyter notebook now!
            </p>
            <PassageTitle label="Upload file from local machine to AWS EC2" />
            <code> scp</code> helps us transfer file between local host and a remote host based on the authentication and 
            scurity of SSH.
            <pre className="prettyprint lang-bash">
                scp -i {"<.pem file>"} {"<Absolute file path>"} ubuntu@{"<DNS name>"}:/home/ubuntu/data
            </pre>
        </p>
      </Page>
    )}}

export default HomePage;