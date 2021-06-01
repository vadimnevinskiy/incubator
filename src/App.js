import React, {Suspense, useEffect} from "react";
import './App.css';
import 'materialize-css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route, useHistory} from "react-router-dom";


import {useDispatch, useSelector} from "react-redux";
import {authAPI} from "./redux/api";
import {setAuthUserData} from "./redux/redusers/auth-reducer";
import PreloaderCircle from "./components/common/Preloaders/PreloaderCircle";
import PreloaderHorizontal from "./components/common/Preloaders/PreloaderHorizontal";


// import Profile from "./Pages/Profile/Profile";
// import Dialogs from "./Pages/Dialogs/Dialogs";
// import Users from "./Pages/Users/Users";
// import Login from "./Pages/Login/Login";
const Profile = React.lazy(() => import ("./Pages/Profile/Profile"));
const Dialogs = React.lazy(() => import ("./Pages/Dialogs/Dialogs"));
const Users = React.lazy(() => import ("./Pages/Users/Users"));
const Login = React.lazy(() => import ("./Pages/Login/Login"));


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
                    if (response.data.resultCode === 1 && window.M) {
                            window.M.toast({html: response.data.messages})
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
                        <Suspense fallback={<PreloaderHorizontal />}>
                            <Route path={'/profile/:userId?'} render={() => <Profile />} />
                            <Route path={'/users'} render={() => <Users />} />
                            <Route path={'/dialogs'} render={() => <Dialogs />} />
                            <Route path={'/login'} render={() => <Login />} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
