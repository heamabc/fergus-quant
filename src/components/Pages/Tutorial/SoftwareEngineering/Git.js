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
                <PassageTitle label="Checking Status" />
                <o>
                <code>git status</code> is a very powerful command. It allows us to see what changes is staged/unstaged and committed/not committed.
                
                </o>
                <PassageTitle label="Staging" />
                <p>
                    The command <code>git add</code> is staging of a file. Git only concern with the changes of the files.
                    Which means that any changes after staging cannot be committed. Staging is to put the changes of files
                    to staging area for git to prepare to commit it.
                </p>
                <img src="https://drive.google.com/uc?id=1YdM_zrNq8K3RNz7DCWCtsu5ZhDM8o6dV" alt="img1" style={{height: "100%", width: "100%", "object-fit": "contain"}}/>
                <Title label="Useful Command" />
                <PassageTitle label="Fetching and Pushing" />
                <pre className="prettyprint lang-bsh">
                    git remote -v # view remote, check if our remote is correct. {'\n'}
                    git fetch # Fetch remote to local repo{'\n'}
                    git add * # Add all changes to stagin area {'\n'}
                    git commit -m {"<commit name>"} # Commit changes to local repo{'\n'}
                    git push origin master # push local repo to remote origin in master branch
                </pre>
                <PassageTitle label="Checking" />
                <pre className="prettyprint lang-bsh">
                    git remote -v #view remote
                    git status # view staged and unstaged changes
                </pre>
                <PassageTitle label="Branching and Merging" />
                <pre className="prettyprint lang-bsh">
                    git checkout -b {'<branch name>'} # Create branch and checkout branch (local environemnt to the branch) {'\n'}
                    git branch -d {'<branch name>'} # Delete a branch {'\n'}
                    git merge {'<branch name>'} # Make our current branch merged with change from the other branch {'\n'}
                    git rebase {'<branch name>'} # Make our current branch exactly the same as the other branch
                </pre>
                <PassageTitle label="Redo Commits" />
                <pre className="prettyprint lang-bsh">
                    git reset {'<filename>'} # Unstage file {'\n'}
                    git reset {'<commit name'} # Make us back to the past commit 
                </pre>
            </Page>
        )}}

export default HomePage;