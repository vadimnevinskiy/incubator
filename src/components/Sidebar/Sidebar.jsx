import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setMenu} from "../../redux/actions/sidebar-action";

const Sidebar = () => {
    const dispatch = useDispatch();
    const menu = useSelector(({sidebar}) => sidebar.menu);
    const isAuth = useSelector(({auth}) => auth.isAuth);

    const menuItems = [
        {id: 0, name: 'Profile', link: 'profile'},
        {id: 1, name: 'Users', link: 'users'},
        {id: 2, name: 'Dialogs', link: 'dialogs'}
    ];
    useEffect(() => {
        dispatch(setMenu(menuItems))
    }, [dispatch])

    return (
        <div className="col s12 m3 l3 xl2">
            <div className="collection">
                {

                    menu
                        .filter(item => {
                            if (!isAuth) {
                                if (item.id !== 0) {
                                    return item
                                }
                            } else {
                                return item
                            }
                        })
                        .map(item => {
                        return (
                            <NavLink key={item.id} to={`/${item.link}`} className="collection-item"><span className="blue-text text-darken-2">{item.name}</span></NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Sidebar;
