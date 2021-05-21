import React, {useEffect} from "react";
import classes from './Users.module.css';
import {useDispatch, useSelector} from "react-redux";
import {usersAPI} from "../../redux/api";
import {setCurrentPage, setTotalUsersCount, setUsers} from "../../redux/actions/user-action";
import avatar from '../../assets/img/avatar.png'
import Paginator from "../../components/Paginator/Paginator";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userPage}) => userPage.users);
    const totalCount = useSelector(({userPage}) => userPage.totalCount);
    const pageSize = useSelector(({userPage}) => userPage.pageSize);
    const currentPage = useSelector(({userPage}) => userPage.currentPage);


    useEffect(() => {
        // requestUsers(1, 10)
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                // console.log(response);
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount))
            })
    }, [dispatch, currentPage, pageSize])

    const changeCurrentPage = (currentPage) => {
        dispatch(setCurrentPage(currentPage))
    }


    if (users.length > 0) {
        return (
            <div className="row">
                <Paginator changeCurrentPage={changeCurrentPage} totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} items={users}/>
                {
                    users.map((user, index) => {
                        return (
                            <div className="col s6 m6 l3 xl2" key={`${index}_${user}`}>
                                <div className="card">
                                    <div className={classes.cardImage + " card-image"}>
                                        {
                                            user.photos.small
                                                ? <img src={user.photos.small} alt={user.name}/>
                                                : <img src={avatar} alt={`${user.name}_1`}/>
                                        }


                                        <a href="!#" className="btn-floating halfway-fab waves-effect waves-light red"><i
                                            className="material-icons">add</i></a>
                                    </div>
                                    <div className={classes.cardContent + " card-content"}>
                                        <span className={classes.cardTitle + " card-title"}>{user.name}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
    )

}
export default Users;
