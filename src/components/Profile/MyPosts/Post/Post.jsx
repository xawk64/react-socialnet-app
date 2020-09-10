import React from 'react'
import s from './Post.module.scss'

function Post(props) {
  return (
        <div className={ s.post }>
          <div>
            <img src="https://cdn.worldvectorlogo.com/logos/facebook-like.svg" onClick={() => props.putLike(props.id)}></img>
            <h3>{ props.likes }</h3>
          </div>
          <p>
            { props.text }
          </p>
        </div>
  );
}

export default Post