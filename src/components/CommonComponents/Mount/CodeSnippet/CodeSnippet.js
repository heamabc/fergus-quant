import React, { Component } from 'react';

class CodeSnippet extends Component {
     componentDidMount()  {
    const script = document.createElement("script");

    script.src = "https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=sunburst";

    document.body.appendChild(script);
  }

  render(){
    return(
        <div className="Hide" />
      )
  }
}

export default CodeSnippet