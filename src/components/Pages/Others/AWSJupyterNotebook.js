import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

class HomePage extends Component {
    componentDidMount() {
        const script = document.createElement("script");
    
        script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert";
        script.async = true;
    
        document.body.appendChild(script);
      }

    render() {
        return (
            <Page>
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
                    <code>ssh -i [.pem file] ubuntu@[Public DNS]</code>
                    <p>
                        We can now connect to the EC2. Then we will help it install anaconda and do some configuration.
                    </p>
                    <MinorTitle label="Anaconda" />
                    <p>You can choose the anaconda version that you want. Here we used 3-4.2.0</p>
                    <code>wget https://repo.continuum.io/archive/Anaconda3-4.2.0-Linux-x86_64.sh</code>
                    <p>
                        After the installation, we have to reboot the EC2 in order to see the Anaconda. We just need to <code>logout</code>
                        .Then reconnect to the EC2 the same way we mentioned before. To check we have successfully install it, we can use the
                        command <code>which python</code> If it is an anaconda path. 
                    </p>
                    <MinorTitle label="Certificates for https" />
                    <p>
                    <code>mkdir certs</code> 
                    <code>cd certs</code>
                    <code>openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout mycert.pem -out mycert.pem</code>
                    </p>
                    <MinorTitle label="Configure jupyter notebook" />
                    <p>
                        <pre>
                            jupyter notebook --generate-config
                            cd ~/.jupyter/
                            vi jupyter_notebook_config.py
                        </pre>
                        Then type<code>i</code> to enter insert mode. Then paste the follow script to the head of the jupyter_notebook_config.py
                        <pre className="prettyprint linenums lang-python">
                        c = get_config() {'\n'}

                        # Kernel config {'\n'}
                        c.IPKernelApp.pylab = 'inline'  # if you want plotting support always in your notebook {'\n'}

                        # Notebook config {'\n'}
                        c.NotebookApp.certfile = u'/home/ubuntu/certs/mycert.pem' #location of your certificate file {'\n'}
                        c.NotebookApp.ip = '0.0.0.0' {'\n'}
                        c.NotebookApp.open_browser = False  #so that the ipython notebook does not opens up a browser by default {'\n'}
                        c.NotebookApp.password = u'sha1:98ff0e580111:12798c72623a6eecd54b51c006b1050f0ac1a62d'  #the encrypted password we generated above {'\n'}
                        # Set the port to 8888, the port we set up in the AWS EC2 set-up {'\n'}
                        c.NotebookApp.port = 8888 
                        </pre>
                        Then type <code>esc</code>. After that, we will exit the insert mode. Typing <code>:wq</code> can make us save the change and quit vi
                        editor.
                    </p>
                    <MinorTitle label="Open jupyter notebook" />
                    <p>
                        With the above instruction, we should be able to launch jupyter notebook. Type <code>jupyter notebook</code> in the bash. Then enter the url 
                        <code>{String.raw`https://<DNS name>:8888/`}</code>. We should be able to use the jupyter notebook now!
                    </p>
                    <PassageTitle label="Upload file from local machine to AWS EC2" />
                    <code>
                        scp -i D:/aws/jupyter-notebook.pem D:/Study/FINA4380/project/data.csv ubuntu@ec2-52-74-115-198.ap-southeast-1.compute.amazonaws.com:/home/ubuntu/data
                    </code>
                </p>
            </Page>
        )}}

export default HomePage;