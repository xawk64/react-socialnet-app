import React from 'react'
import s from './About.module.scss'
import { Field, reduxForm } from 'redux-form'

function About(props) {

  const ProfileEditForm = (props) => {
    return  <form onSubmit={props.handleSubmit}>
    <label>Fullname: </label><Field name="fullname" component="input"></Field><br></br> <br></br>
    <label>Date of birth: </label><Field name="date" component="input"></Field><br></br>
    <label>Location: </label><Field name="country" component="input"></Field>, 
    <Field name="city" component="input"></Field> <br></br>
    <label>Profession: </label><Field name="profession" component="input"></Field> <br></br>
    <label>Status: </label><Field name="status" component="input"></Field> <br></br>
    <label>Large picture url: </label><Field name="largePhotourl" component="input"></Field><br></br>
    <label>Small picture url: </label><Field name="smallPhotourl" component="input"></Field>
    <p>Private information:</p> <br></br>
    <label>Sex orientation: </label><Field name="sexOrientation" component="input"></Field><br></br>
    <button>Save</button> <br></br>
    </form>
  }

  const ProfileEditFormRedux = reduxForm({form: "profileEdit"})(ProfileEditForm)

    return ( (props.profile !== null) ? <> 
    {!props.isProfileEdit ?
    <>
       <div className={s.profileImg}>
        <img src={props.profile.public.photoUrl.large}></img>
      </div>

      <div className={s.person}>
    <img src={props.profile.public.photoUrl.small}></img>
        <div className={s.personInfo}>
          <p>
            {props.profile.public.fullname} <br></br> <br></br>
            Date of birth: {props.profile.public.date} <br></br>
            Location: {props.profile.public.location.city}, {props.profile.public.location.country} <br></br>
            Profession: {props.profile.public.profession} <br></br>
            Status: {props.profile.public.status} <br></br>
            </p>
            {props.profile.private ? <>
            <p>Private information: <br></br>
            Sex orientation: {props.profile.private.sexOrientation}
            </p> <button onClick={props.toggleIsProfileEdit}>Edit</button> </>: null}
        </div>
        </div></> : <>
        <div className={s.profileImg}>
        <img src={props.profile.public.photoUrl.large}></img>
      </div>
      <div className={s.person}>
    <img src={props.profile.public.photoUrl.small}></img>
        <div className={s.personInfo}>
      <ProfileEditFormRedux onSubmit={props.setProfile} initialValues={{
      fullname: props.profile.public.fullname,
      status: props.profile.public.status,
      city: props.profile.public.location.city,
      country: props.profile.public.location.country,
      smallPhotourl: props.profile.public.photoUrl.small,
      largePhotourl: props.profile.public.photoUrl.large,
      profession: props.profile.public.profession,
      date: props.profile.public.date,
      sexOrientation: props.profile.private.sexOrientation
    }}/>
              <button onClick={props.toggleIsProfileEdit}>Cancel</button>
        </div>
        </div>
        </>
        }
        </>
        : null
    )
}

export default About