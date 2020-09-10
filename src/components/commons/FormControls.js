import React from 'react'
import s from "./FormControls.module.scss"

export const wErrValidationComponent = (Component) =>  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return <div className={s.formControl}>
    <Component {...input} {...props} className={hasError && s.inputError} />
    { hasError && <span className={s.spanError}>{meta.error}</span>}
    </div>
}