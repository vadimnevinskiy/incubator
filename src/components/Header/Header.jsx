import React, {useCallback, useEffect} from "react";
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {authAPI} from "../../redux/api";
import {setProfile} from "../../redux/actions/profile-action";
import {setAuthUserData} from "../../redux/actions/auth-action";

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth);
    const login = useSelector(({auth}) => auth.login);
    const userId = useSelector(({auth}) => auth.userId);



    // useEffect(() => {
    //     if (!isAuth) {
    //         authAPI.authMe()
    //             .then(response => {
    //                 if (response.data.resultCode === 0) {
    //                     const payload = {
    //                         userId: response.data.data.id,
    //                         email: response.data.data.email,
    //                         login: response.data.data.login,
    //                         isAuth: true
    //                     }
    //                     dispatch(setAuthUserData(payload))
    //                 } else {
    //                     history.push('/login')
    //                 }
    //             })
    //     }
    // }, [isAuth])


    const logout = useCallback(() => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    const payload = {
                        userId: null,
                        email: null,
                        login: null,
                        isAuth: false
                    }
                    dispatch(setProfile(null))
                    dispatch(setAuthUserData(payload))
                    history.push('/login')
                }
            })
    }, [])

    console.log('isAuth = ' + isAuth)
    return (
        <>
            <nav>
                <div className="ph20 nav-wrapper indigo accent-4">
                    <ul id="nav-mobile" className="right">

                        {
                            isAuth === true
                                ? <li><NavLink to={`/profile/${userId}`}>{login}</NavLink></li>
                                : <li><NavLink to={'/login'}>Login</NavLink></li>
                        }
                        {
                            isAuth === true &&
                            <li><a className="waves-effect waves-light btn" onClick={logout}>Logout</a></li>
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header;
