import React from 'react';

const ScrollBox = (props) => {
  return (
    <div style={{overflowY: 'scroll', borderTop: '5px solid #000', width: '100%', height: '800px'}}>
      {props.children}
    </div>
  )
}

export default ScrollBox;