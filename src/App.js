import React, {useEffect} from "react";
import './App.css';
import 'materialize-css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, useHistory} from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import Users from "./Pages/Users/Users";
import Login from "./Pages/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {authAPI} from "./redux/api";
import {setAuthUserData} from "./redux/redusers/auth-reducer";


function App() {
    const history = useHistory();
    const dispatch = useDispatch();
    const isAuth = useSelector(({auth}) => auth.isAuth);



    useEffect(() => {
        if (!isAuth) {
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
                    }
                })
        }
    }, [])


    return (
        <div>
            <Header />
            <div>
                <div className="row">
                    <Sidebar />
                    <div className="col s12 m9 l9 xl10">
                        <Route path={'/profile/:userId?'} render={() => <Profile />} />
                        <Route path={'/users'} render={() => <Users />} />
                        <Route path={'/dialogs'} render={() => <Dialogs />} />
                        <Route path={'/login'} render={() => <Login />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
