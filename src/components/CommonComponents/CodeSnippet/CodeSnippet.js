import React, { Component } from 'react';

const CodeSnippet = () => {
    componentDidMount()  {
    const script = document.createElement("script");

    script.src = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?skin=desert";
    script.async = true;

    document.body.appendChild(script);
  }
}

export default CodeSnippet