import React from 'react'
import Post from './Post/Post'
import NewPost from './NewPost/NewPost'
import { setPostThunk, getPostsThunk, putLikeThunk } from '../../../redux/posts-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import s from './MyPosts.module.scss'


class MyPostsContainer extends React.Component {
  componentDidMount() {
    this.userId = this.props.userProfileId
    if (!this.userId) {
      this.userId = this.props.myProfileId
    }
    this.props.getPostsThunk(this.userId)
  }

  addPost = (data) => {
    this.props.setPostThunk(data.newPost)
  }

  putLike = (likeId) => {
    this.props.putLikeThunk(this.userId, likeId)
  }

  render() {
    return <div className={s.myPosts}>
      {!this.props.userProfileId ? <NewPost addPost={this.addPost}/>  : null }
    
    <h2>{this.props.postAuthor} posts</h2>
    {this.props.posts.map( (post, i) => 
  (<Post text={post.text} likes={post.likesCount} 
  id={post._id} key={post._id} putLike={this.putLike} />))}
    </div>
  }
}

let MapStateToProps = (state) => {
return {
  myProfileId: state.auth.profileId,
  userProfileId: state.profilePage.profileId,
  postAuthor: state.profilePage.profile && state.profilePage.profile.public.fullname,
  posts: state.posts.posts
}
}

export default compose (
  connect(MapStateToProps, {setPostThunk, getPostsThunk, putLikeThunk}),
  withRouter
  )
 (MyPostsContainer)