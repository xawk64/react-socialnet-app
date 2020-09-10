import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import s from './Login.module.scss'
import { reduxForm, Field } from 'redux-form'
import { requiredField, maxLengthCreator, minLengthCreator } from '../../../utils/validators'
import { wErrValidationComponent } from '../../commons/FormControls'
const maxLength10 = maxLengthCreator(10)
const maxLength15 = maxLengthCreator(15)
const minLength4 = minLengthCreator(4)
const Input = wErrValidationComponent("input")

const LoginForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
        <Field placeholder={"username"} name={"username"} component={Input} validate={[minLength4, maxLength15]}/>
        <Field placeholder={"password"} name={"password"} component={Input} validate={[minLength4, maxLength10]}/>
        <button>Login</button>
    <div><span className={s.serverError}>{props.error}</span></div>
        </form>   
    )
}

const LoginFormRedux = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    return <div className={s.loginContainer}>
        <div>
    <h1>Login</h1>
    <LoginFormRedux onSubmit={props.onSubmit}/>
    <h3>Not registered? | </h3>
    <NavLink to="/signup" onClick={props.toggleSignUp}>Signup</NavLink>
    </div>
    </div>
}

export default Login