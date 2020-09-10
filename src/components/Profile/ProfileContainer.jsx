import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Profile from './Profile';
import { getProfileThunk, setProfileThunk } from '../../redux/profile-reducer';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
  state = {
    isProfileEdit: false
  }

  setProfile = (data) => {
    this.props.setProfileThunk({public: {
      fullname: data.fullname,
      status: data.status,
      location: {
        city: data.city,
        country: data.country
      },
      photoUrl: {
        small: data.smallPhotourl,
        large: data.largePhotourl
      },
      profession: data.profession,
      date: data.date,
      follows: this.props.profile.public.follows
    },
    private: {
      sexOrientation: data.sexOrientation
    }
  })
    this.toggleIsProfileEdit()
  }
  
  toggleIsProfileEdit = () =>{
    this.setState({isProfileEdit: !this.state.isProfileEdit})
  }

  componentDidMount () {
    this.props.history.push("/profile")
    this.props.getProfileThunk(this.props.match.params.userId)
  }

  render () {
    return <Profile profile={this.props.profile} isFetched={this.props.isFetched} setProfile={this.setProfile}
    toggleIsProfileEdit={this.toggleIsProfileEdit} isProfileEdit={this.state.isProfileEdit} />
  }
}

let MapStateToProps = (state) => {
  return { profile: state.profilePage.profile,
    isFetched: state.profilePage.isFetched
}
}

export default compose (
connect(MapStateToProps, {
getProfileThunk,
setProfileThunk
}),
withRouter)
(ProfileContainer)