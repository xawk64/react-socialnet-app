import React from 'react'
import DialogsArea from './DialogsArea'
import { selectChatThunk } from '../../../redux/dialogs-reducer'
import { connect } from 'react-redux'



class DialogsAreaContainer extends React.Component {
  selectChat = (id) => {
    this.props.selectChatThunk(id)
  }

  render() {
    debugger
  return <DialogsArea {...this.props} selectChat={this.selectChat} />
  }
}

let MapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.usersFullnames
  }
}

export default connect(MapStateToProps, {selectChatThunk}) (DialogsAreaContainer)