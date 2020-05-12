import React from 'react'
import s from './Profile.module.scss'
import AboutMe from './AboutMe/AboutMe';
import ProfileImg from './ProfileImg/ProfileImg';
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
  return (
    <content>
      <ProfileImg />
      <AboutMe />
      <MyPostsContainer store={props.store} />
    </content>
  );
}

export default Profile