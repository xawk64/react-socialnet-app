import React from 'react'
import About from './About/About';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../Global/preloader/Preloader';

function Profile(props) {
  return ( (props.isFetched) ? <Preloader/> :
    <content>
      <About {...props}/>
      <MyPostsContainer />
    </content>
  );
}

export default Profile