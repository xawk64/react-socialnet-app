import React from 'react'
import s from './Signup.module.scss'
import { Field, reduxForm } from 'redux-form'
import { wErrValidationComponent } from '../../commons/FormControls'
import { maxLengthCreator, minLengthCreator, emailValidator } from '../../../utils/validators'
const maxLength10 = maxLengthCreator(10)
const maxLength15 = maxLengthCreator(15)
const minLength4 = minLengthCreator(4)
const Input = wErrValidationComponent("input")

const Signup = (props) => {

    const SignupForm = (props) => {
        return   <form onSubmit={props.handleSubmit}>
        <Field name="username" component={Input} placeholder="username" validate={[minLength4, maxLength15]}></Field>
        <Field name="email" component={Input} placeholder="email" validate={[emailValidator]}></Field>
        <Field name="password" component={Input} placeholder="password" validate={[minLength4, maxLength10]}></Field>
        <button>SignUp</button>
        <div><span className={s.serverError}>{props.error}</span></div>
        </form>
    }

    const SignupFormRedux = reduxForm({form: "signup"})(SignupForm)
    
    return <div className={s.signupContainer}>
            <div>
            <h1>Signup</h1>
            <SignupFormRedux onSubmit={props.signUp}/>
            </div>
            </div>
}

export default Signup