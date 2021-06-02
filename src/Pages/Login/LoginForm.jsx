import React from "react";
import classes from './LoginForm.module.css';
import {Field, Form} from "react-final-form";
import {useDispatch} from "react-redux";
import {setToggleFetching} from "../../redux/actions/general-actions";
import {authAPI} from "../../redux/api";
import {useHistory} from "react-router-dom";
import {setAuthUserData} from "../../redux/actions/auth-action";


const LoginForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();


    const onSubmit = values => {
        dispatch(setToggleFetching(true))
        authAPI.login(values.email, values.password, values.rememberMe, values.captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setToggleFetching(false))
                    authMe()
                }
            })
    }

    const authMe = () => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const payload = {
                        userId: response.data.data.id,
                        email: response.data.data.email,
                        login: response.data.data.login,
                        isAuth: true
                    }
                    dispatch(setAuthUserData(payload))
                    // history.push(`/profile/${response.data.data.id}`)
                } else {
                    history.push('/login')
                }
            })
    }


            return (
                <div className={classes.login + " z-depth-2"}>
                    <h4 className={classes.blockTitle}>Login</h4>
                    <Form
                        onSubmit={onSubmit}
                        initialValues={{email: '', password: '', rememberMe: false, captcha: false}}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <form onSubmit={handleSubmit}>
                                <div className="input-field">
                                    <Field
                                        name="email"
                                        component="input"
                                        type="text"
                                        id="email"
                                    />
                                    <label htmlFor="email">First Name</label>
                                </div>
                                <div className="input-field">
                                    <Field
                                        id="password"
                                        name="password"
                                        component="input"
                                        type="password"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>

                                <div>
                                    <label>
                                        <input type="checkbox" name="rememberMe" component="input"/>
                                        <span>Remember me</span>
                                    </label>
                                </div>

                                {/*<div className="row">*/}
                                {/*    <div className="col s6"></div>*/}
                                {/*    <div className="col s6">*/}
                                {/*        <div className="input-field">*/}
                                {/*            <Field*/}
                                {/*                id="captcha"*/}
                                {/*                name="captcha"*/}
                                {/*                component="input"*/}
                                {/*                type="text"*/}
                                {/*            />*/}
                                {/*            <label htmlFor="captcha">Captcha</label>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}

                                <div className={classes.buttons + " buttons"}>
                                    <button className={'btn'} type="submit" disabled={submitting || pristine}>
                                        Login
                                    </button>
                                </div>
                            </form>
                        )}
                    />
                </div>
            )

}
export default LoginForm;
