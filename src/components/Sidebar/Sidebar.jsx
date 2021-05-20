import React from "react";
import {NavLink} from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="col s4 m3 l3 xl2">
            <div className="collection">
                <NavLink to={'/profile'} className="collection-item"><span className="blue-text text-darken-2">Profile</span></NavLink>
                <NavLink to={'/users'} className="collection-item"><span className="blue-text text-darken-2">Users</span></NavLink>
                <NavLink to={'/dialogs'} className="collection-item"><span className="blue-text text-darken-2">Dialogs</span></NavLink>
            </div>
        </div>
    )
}
export default Sidebar;
