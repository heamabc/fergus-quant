import React, { Component } from 'react';
import './Mathjex.scss'

class Mathjex extends Component {

    componentDidMount() {
        var script = document.createElement("script");

        script.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js";
        script.async = true;
        script.type = "text/javascript"

        document.body.appendChild(script);

        script = document.createElement("script");
        script.src = "https://polyfill.io/v3/polyfill.min.js?features=es6"

        document.body.appendChild(script);
  }
  render(){
      return(
          <div className="Hide" />
        )
  }
}

export default Mathjex