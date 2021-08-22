import React, {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {doSignIn} from "../../store/actions/persons";

import {useForm} from "react-cool-form"
import InputField from "../FormComponents/InputField";

const SignIn = ({signIn}) => {

    let history = useHistory()

    const { form, use } = useForm({
        defaultValues: { email: '', password:'' },
        onSubmit: (values) => submitHandle(values),
    });

    const submitHandle = async values => {
        await signIn(values)
        history.push('/persons')
    }

    const errors = use("errors", { errorWithTouched: true })

    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <form ref={form} noValidate>

                    <InputField
                        type="email"
                        name="email"
                        id="email"
                        label="Email"
                        required
                        error={errors.email}
                    />
                    <InputField
                        type="password"
                        name="password"
                        id="password"
                        label="Password"
                        required
                        error={errors.password}
                    />

                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-primary w-100">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (person) => dispatch( doSignIn(person) )
    }
}

export default connect(null, mapDispatchToProps)(SignIn)