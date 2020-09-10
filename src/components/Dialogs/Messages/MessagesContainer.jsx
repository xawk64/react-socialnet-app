import React from 'react'
import Messages from './Messages'
import { connect } from 'react-redux'
import { getChatsThunk, setMessageThunk, setMessageSocket } from '../../../redux/dialogs-reducer'
import { sendMessageSocket, setSocketId } from '../../../api/api'
import { getMessagesElements } from '../../../redux/dialogs-selectors'

class MessagesContainer extends React.Component {

  sendMessage = (data) => {
    this.props.setMessageThunk(data.messageText, this.props.selectedUserProfileId)
    sendMessageSocket(this.props.myProfileId, this.props.myName, this.props.selectedUserProfileId, data.messageText)
  }

  componentDidMount() {
    this.props.getChatsThunk ()
  }

  render() {
    return <Messages {...this.props} sendMessage={this.sendMessage}/>
  }
}

let MapStateToProps = (state) => {
  if (state.dialogsPage.chats) {
  return {
    messagesElements: getMessagesElements(state),
    selectedUser: state.dialogsPage.usersFullnames[state.dialogsPage.currentChat],
    selectedUserProfileId: state.dialogsPage.usersProfileId[state.dialogsPage.currentChat],
    myProfileId: state.auth.profileId,
    myName: state.auth.username
  }
}
  return {
  myProfileId: state.auth.profileId
  }
}

export default connect(MapStateToProps, {setMessageThunk, getChatsThunk, setMessageSocket})(MessagesContainer)