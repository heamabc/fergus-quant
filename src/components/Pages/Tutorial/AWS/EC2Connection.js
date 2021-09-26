import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import '../../css/AllPages.scss';
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'

class HomePage extends Component {
    render() {
      return (
        <Page>
            <Title label={'EC2 Connection'}/>
            <p>
                In AWS, the server instances are called EC2. They are basically computers with different kind of specification. 
                Indeed, a weaker spec EC2 will cost you less money.
            </p>
            <p>
                Every newcomer of the AWS EC2 instances may face is how can I actually connect to the server. In this article I will
                give some common way to control the server
            </p>
            <PassageTitle label={'SSH Protocal'}/>
            <p>
                ssh is a protocal let us securely connect to a server with a key pair, that is the public key and private key. Once 
                we connect to the server, we can basically do whatever we want!
            </p>
            <pre className="prettyprint linenums lang-linux">
            ssh -i {String.raw`{directory_of_your_key_file}`} {String.raw`{user_name@public_dns}`}
            </pre>


        </Page>
    )}}

export default HomePage;