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
      updateNewPostText={props.methods.updateNewPostText}
      addPost={props.methods.addPost} 
      />
    </content>
  );
}

export default Profile