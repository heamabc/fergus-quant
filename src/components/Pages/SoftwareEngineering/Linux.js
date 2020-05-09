import React, { Component } from 'react';
import Page from '../../CommonComponents/PageTemplate/PageTemplate'
import PassageTitle, {MinorTitle} from '../../CommonComponents/PassageTitle/PassageTitle'
import Title from '../../CommonComponents/Title/Title'
import '../css/AllPages.scss';

import img1 from '../../../assets/Pages/Linux/Illustration1.png'

import Table2 from '../../Table/Table2'

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
                <Title label="Tools" />
                <PassageTitle label="Git Bash" />
                <p>
                    Many of you may wonder, how can I use linux, how to install linux? I found that <a href="https://git-scm.com/downloads" >Git Bash</a>
                    is a very useful tool for us to use linux. It runs on Linux Bash and many of the Linux tools are installed with Git Bash. So play around with linux with Git Bash!
                </p>
                <PassageTitle label="ConEmu" />
                <p>
                    If you are frequently dealing with CLI, <a href="https://sourceforge.net/projects/conemu/">ConeEmu</a> is definitely one of the best tools. It 
                    allows us to generate multiple console, and the keybinding of the application is very productive.
                </p>
                <Title label="Linux Command" />
                <PassageTitle label="sudo" />
                <p>
                    <code>sudo</code>(Super User DO) command in linux is to do some command as a superuser. It is equivalent of "run as administrator"
                    option in Windows. Notice that in order to use <code>sudo</code>, the user has to have an entry in the <strong>sudoers</strong> file
                </p>
                <PassageTitle label="apt-get" />
                <p>
                apt-get is a command-line tool which helps in handling packages in Linux. Its main task is to retrieve the information and packages from
                 the authenticated sources for installation, upgrade and removal of packages along with their dependencies. Here APT stands for the Advanced Packaging Tool.
                </p>
                <PassageTitle label="screen" />
                <p>
                    <code>screen</code> can help us open any number of screen session of bash. To start, simply type <code>screen</code>.
                    Belows are some useful command.
                    <ul>
                        <li><code>ctrl+a c</code> create a new window.</li> 
                        <li><code>ctrl+a "</code> list all window.</li>
                        <li><code>ctrl+a d</code> detach from screen session.</li>
                    </ul>
                </p>
                <Title label="Basics" />
                <PassageTitle label="PATH" />
                <p>
                    <code>PAHT</code> is a variable that keep tracks of where all the executable files are located at. For example, if you type <code>python</code>
                    . Linux iterate over all the PATH and find a executable file called python. Then execute the python file. Youn can check the current 
                    setting of PATH by 
                    <pre className="prettyprint  lang-python">
                        $ echo $PATH
                    </pre> 
                    All the path will be shown and each directory is separated by ":".
                </p>
                <MinorTitle label="Modify PATH" />
                <p>
                    To modify <code>PATH</code>, we need to modify bashrc file. It is a bash script that bash loads every time a news bash session starts. To edit
                    the file, type 
                    <pre className="prettyprint  lang-python">
                        $ vi ~/.bashrc
                    </pre>
                    You will now open the .bashrc in vi, we need to add some scripts to the end of the file. You can enter the following script to the end of .bashrc 
                    <pre className="prettyprint  lang-python"> 
                        {String.raw`export PATH="$PATH:<target_directory>"`}
                    </pre>
                    That's it! The directory will be added to the PATH! To reload the bashrc file, you need to type 
                    <pre className="prettyprint  lang-python">
                        $ source ~/.bashrc
                    </pre>
                    But don't worry, next time you open the bash session it will be automatically loaded.
                </p>
                <Title label="Files Permission" />
                <p>
                    Linux is a multi-user operating system. It uses the conecept of "permission" and "ownership" to ensure the security of the files. Every files 
                    and directories are owned by a specific user and group. Therefore, the permission of files/directories are defined separately for <strong>user</strong>, 
                    <strong> group</strong>, <strong>others</strong>.
                    <MinorTitle label="User" />
                    <p>
                        It means that the username who owns the file/directory. By default it is the user who created the file/directory.
                    </p>
                    <MinorTitle label="Group" />
                    <p>
                        The user group that owns the file/directory. All user within the group will have the same permission to the file/directory.
                    </p>
                    <MinorTitle label="Other" />
                    <p>
                        If the user is neither owner nor in the owner group, it will be affected by this permission. That is, everyone else. Therefore, some will call 
                        it "world" permission.
                    </p>
                </p>
                <PassageTitle label="rwx" />
                <p>
                    There are 4 types of permissions.
                    <ul>
                        <li><strong>r</strong> = read permission</li>
                        <li><strong>w</strong> = write permission</li>
                        <li><strong>x</strong> = execution permission</li>
                        <li><strong>-</strong> = no permission</li>
                    </ul>
                    In linux, we will see the file/directory permission in this order. The below image demonstrate the format.
                    <img src={img1} style={{width:'500px', height:'300px'}} alt='rwx'/>
                </p>
                <PassageTitle label="Octal Mode" />
                <p>
                    In linux, the most convinient way to set permission is to use the numeric representation of the permissions. 
                    Each permission is assigned a value, as the following table shows. There are total of 7 combination of permission.
                    <Table2 />
                </p>
                <PassageTitle label="Check Permission" />
                <p>
                    We can check the permission of file/directory by the command
                    <pre className="prettyprint lang-bsh">
                            $ ls -l {'\n'}
                            -rwxr-xr--  1 amrood   users 1024  Nov 2 00:10  myfile {'\n'}
                            drwxr-xr--- 
                            1 amrood   users 1024  Nov 2 00:10  mydir
                    </pre>  
                </p>
                <PassageTitle label="Set Permission" />
                <p>
                    There are two ways to set the permission of file/directory.
                    <MinorTitle label="Symbolic Mode"/>
                    <pre className="prettyprint lang-bsh">
                        # Add write and execute permission to other {'\n'}
                        $ chmod o+wx testfile {'\n'}
                        # Remove execute permission to user {'\n'}
                        $ chmod u-x testfile {'\n'}
                        # Set group permission to read and execute permission {'\n'}
                        $ chmod g = rx testfile
                    </pre>
                    <MinorTitle label="Octal Mode" />
                    <pre className="prettyprint lang-bsh">
                        # Set user to 6, group to 6, other to 4 {'\n'}
                        $ chmod 664 sharedFile
                    </pre>
                </p>
                <PassageTitle label="Change Owner" />
                <p>
                    The command <code>chown</code> can help us change the owner of file/directory
                    <pre className="prettyprint lang-bsh">
                        $ chown user filelist
                    </pre>
                    where the value of user can be the name of the user on the system or the user ID.
                </p>
                <PassageTitle label="Change Group" />
                <p>
                    The command <code>chgrp</code> can help us change the group ownership of file/directory
                    <pre className="prettyprint lang-bsh">
                        $ chgrp group filelist
                    </pre>
                    Again, the value group can be the group name or the group id.
                </p>
            </Page>
)}}

export default HomePage;