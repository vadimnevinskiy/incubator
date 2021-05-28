import React, {useCallback, useEffect, useRef} from "react";
import classes from './Users.module.css';
import {useDispatch, useSelector} from "react-redux";
import {usersAPI} from "../../redux/api";
import {
    setCurrentPage,
    setFollowingUser,
    setTotalUsersCount,
    setUnfollowingUser,
    setUsers
} from "../../redux/actions/user-action";
import {setToggleFetching} from "../../redux/actions/general-actions";
import avatar from '../../assets/img/defaultimg.jpg'
import Paginator from "../../components/Paginator/Paginator";
import PreloaderHorizontal from "../../components/Preloaders/PreloaderHorizontal";
import PreloaderCircle from "../../components/Preloaders/PreloaderCircle";
import {NavLink} from "react-router-dom";


const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(({userPage}) => userPage.users);
    const totalCount = useSelector(({userPage}) => userPage.totalCount);
    const pageSize = useSelector(({userPage}) => userPage.pageSize);
    const currentPage = useSelector(({userPage}) => userPage.currentPage);
    const fetching = useSelector(({general}) => general.fetching);
    const tooltipRef = useRef(null);


    useEffect(() => {
        dispatch(setToggleFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(response => {
                dispatch(setToggleFetching(false))
                dispatch(setUsers(response.data.items));
                dispatch(setTotalUsersCount(response.data.totalCount))
            })

        window.M.Tooltip.init(tooltipRef, {});
    }, [dispatch, currentPage, pageSize])


    const changeCurrentPage = useCallback((currentPage) => {
        dispatch(setCurrentPage(currentPage))
    }, [currentPage, dispatch])


    const followUser = useCallback((userId) => {
        usersAPI.followUser(userId)
            .then(response => {
                message('Following!')
                dispatch(setFollowingUser(userId))
            })
    }, [dispatch])

    const unfollowUser = useCallback((userId) => {
        dispatch(setUnfollowingUser(userId))
    }, [dispatch])


    const message = useCallback((text) => {
        if (window.M && text) {
            window.M.toast({html: text})
        }
    }, [])


    if (users.length > 0) {
        return (
            <div className={classes.userContainer + " row"}>
                {
                    fetching &&
                    <PreloaderCircle/>
                }
                <Paginator changeCurrentPage={changeCurrentPage} totalCount={totalCount} pageSize={pageSize}
                           currentPage={currentPage} items={users}/>
                {
                    users.map((user, index) => {
                        return (
                            <div className="col s6 m6 l3 xl2" key={`${index}_${user}`}>
                                <div className="card">
                                    <div className={classes.cardImage + " card-image"}>
                                        {
                                            user.photos.small
                                                ? <img src={user.photos.small} alt={user.name}/>
                                                : <img src={avatar} alt={`${user.name}`} className={classes.avatar}/>
                                        }
                                        {
                                            user.followed === true &&
                                            <span className="btn-floating halfway-fab waves-effect waves-light red">
                                                <i className="material-icons"
                                                   onClick={() => unfollowUser(user.id)}>remove</i>
                                            </span>
                                        }
                                        {
                                            user.followed === false &&
                                            <span className="btn-floating halfway-fab waves-effect waves-light teal">
                                                <i className="material-icons"
                                                   onClick={() => followUser(user.id)}>add</i>
                                            </span>
                                        }
                                    </div>
                                    <div className={classes.cardContent + " card-content"}>
                                        <NavLink to={`/profile/${user.id}`}><span
                                            className={classes.cardTitle + " card-title"}>{user.name}</span></NavLink>
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
        <PreloaderHorizontal/>
    )

}
export default Users;
