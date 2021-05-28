import React from "react";
import classes from './Login.module.css'
import {useSelector} from "react-redux";
import LoginForm from "./LoginForm";
import {Redirect, useHistory} from "react-router-dom";


const Login = () => {
    const history = useHistory();
    const userId = useSelector(({auth}) => auth.userId);
    const isAuth = useSelector(({auth}) => auth.isAuth);




    if(isAuth) {
        return (
            <Redirect to={`/profile/${userId}`} />
        )
        // history.push(`/profile/${userId}`)
    }

    return (
        <LoginForm />
    )

}
export default Login;
