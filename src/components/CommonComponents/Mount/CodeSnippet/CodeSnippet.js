import React, { Component } from 'react';

class CodeSnippet extends Component {
    componentDidMount()  {
    const script = document.createElement("script");

    script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert";
    script.async = true;

    document.body.appendChild(script);
  }
  render(){
    return(
        <div className="Hide" />
      )
  }
}

export default CodeSnippet