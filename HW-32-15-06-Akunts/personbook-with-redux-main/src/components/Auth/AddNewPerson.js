import React, {useState} from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {addNewPerson} from "../../store/actions/persons";

import {useForm} from "react-cool-form"
import InputField from "../FormComponents/InputField";

const AddNewPerson = ({addPerson}) => {

    let history = useHistory()

    const { form, use } = useForm({
        defaultValues: {f_name: '', l_name: '', age: '', email: '', password:'', phone: '', avatar: '' },
        onSubmit: (values) => submitHandle(values),
    });

    const submitHandle = values => {
        console.log( values )
        addPerson(values)
        history.push('/signin')
    }

    const errors = use("errors", { errorWithTouched: true })

    return (
        <div className="container">
            <div className="w-50 mx-auto">
                <form ref={form} noValidate>
                    <InputField
                        type="text"
                        name="f_name"
                        id="f_name"
                        label="First Name"
                        required
                        error={errors.f_name}
                    />
                    <InputField
                        type="text"
                        name="l_name"
                        id="l_name"
                        label="Last Name"
                        error={errors.l_name}
                    />
                    <InputField
                        type="text"
                        name="age"
                        id="age"
                        label="Age"
                        error={errors.age}
                    />
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
                    <InputField
                        type="text"
                        name="phone"
                        id="phone"
                        label="Phone"
                        error={errors.phone}
                    />
                    <InputField
                        type="text"
                        name="avatar"
                        id="avatar"
                        label="Avatar"
                        error={errors.avatar}
                    />
                    <div className="form-group mt-3">
                        <button type="submit" className="btn btn-primary w-100">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (person) => dispatch( addNewPerson(person) )
    }
}

export default connect(null, mapDispatchToProps)(AddNewPerson)