import React from 'react'
import s from './Profile.module.scss'
import AboutMe from './AboutMe/AboutMe';
import ProfileImg from './ProfileImg/ProfileImg';
import MyPosts from './MyPosts/MyPosts';

function Profile(props) {
  return (
    <content>
      <ProfileImg />
      <AboutMe />
      <MyPosts posts={props.profilePage.posts} 
      newPostText={props.profilePage.newPostText}
      dispatch={props.dispatch}
      />
    </content>
  );
}

export default Profile