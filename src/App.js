import React from "react";
import './App.css';
import 'materialize-css'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import Profile from "./Pages/Profile/Profile";
import Dialogs from "./Pages/Dialogs/Dialogs";
import Users from "./Pages/Users/Users";


function App() {
    return (
        <div>
            <Header />
            <div>
                <div className="row">
                    <Sidebar />
                    <div className="col s12 m9 l9 xl10">
                        <Route path={'/profile'} render={() => <Profile />} />
                        <Route path={'/users'} render={() => <Users />} />
                        <Route path={'/dialogs'} render={() => <Dialogs />} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
