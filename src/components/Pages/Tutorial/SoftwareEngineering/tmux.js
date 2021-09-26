import React, { Component } from 'react';
import Page from '../../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../../CommonComponents/Title/Title'
import CodeSnippet from '../../../CommonComponents/Mount/CodeSnippet/CodeSnippet'
import '../../css/AllPages.scss';

import Table2 from '../../../Table/Table2'

class HomePage extends Component {
    render() {
        return (
            <Page>
                <CodeSnippet />
                <Title label='tmux'/>
                <p>
                    tmux is one of the most powerful and popular terminal available on linux. It can help you do a lot of things.
                </p>
                <p>
                    In this article, all the command is in the form of prefix-key and command-key structure. When you see C-b, it means
                    holding control and press b.
                </p>
                <PassageTitle label='Session Management'/>
                <p>
                    Often, we want some session to be run on a server continuously. That is, keep running the script. However, with
                    normal terminal, it is pretty hard to configure, and it often involve some kind of bash script. With tmux, we 
                    can temporally "close" the terminal and come back to the terminal with every thing before we "close" the terminal. 
                </p>
                <p>
                    In this way, we can run a script and close the terminal. However, the script will still be running and we can come 
                    back to this terminal later as well.
                </p>
                <MinorTitle label='Create Session'/>
                <p>
                    By default, the name of the session will be named by a number that is incremental.
                    <pre className="prettyprint lang-bsh">
                        $ c+b 
                    </pre>
                </p>
                <MinorTitle label='Attach to a specific Session'/>
                <p>
                    <pre className="prettyprint lang-bsh">
                        $ tumax attach -d -t {"<session-name>"}
                    </pre>
                </p>
                <MinorTitle label='Dettach from a Session'/>
                <p>
                    Detaching from the session does not kill the program run inside the session. It only means that we do not look
                    at the session right now. Everything inside will be run concurrently without you seeing it.
                    <pre className="prettyprint lang-bsh">
                        c+b d
                    </pre>
                </p>
                <MinorTitle label='Kill current Session'/>
                <p>
                    Killing the session really stop all the operation within the session.
                    <pre className="prettyprint lang-bsh">
                        c+b :kill-session
                    </pre>
                </p>
                <MinorTitle label='List All Session'/>
                <p>
                    <pre className="prettyprint lang-bsh">
                        $ tumax ls
                    </pre>
                </p>
                <Title label='Reference'/>
                <p>
                    Utlimate cheatsheet of tmux : https://gist.github.com/MohamedAlaa/2961058
                </p>
            </Page>
        )}}

export default HomePage;