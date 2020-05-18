import * as React from 'react';
import './Fancybox.scss'

const FancyBox = (props) => (
  <div className="FancyboxImageContainer">
    <a data-fancybox="gallery" href={props.link} data-caption={props.caption}>
      <img src={props.link} alt={props.alt}/>
    </a>
  </div>
)

export default FancyBox