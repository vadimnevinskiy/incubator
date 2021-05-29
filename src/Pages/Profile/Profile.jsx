import React, {useCallback, useEffect, useState} from "react";
import classes from './Profile.module.css';
import {Redirect, useHistory} from 'react-router-dom';
import {authAPI, profileAPI} from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfile, setStatus} from "../../redux/actions/profile-action";
import PreloaderCircle from "../../components/Preloaders/PreloaderCircle";
import avatar from '../../assets/img/defaultimg.jpg'
import Contacts from "../../components/Contacts/Contacts";



const Profile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(({profilePage}) => profilePage.profile);
    const status = useSelector(({profilePage}) => profilePage.status);
    const myId = useSelector(({auth}) => auth.userId);
    const isAuth = useSelector(({auth}) => auth.isAuth);

    const [showStatusForrm, setShowStatusForm] = useState(false)



    const userId = history.location.pathname.split('/')[2];


    const getProfile = (userId) => {
        profileAPI.getProfile(userId)
            .then(response => {
                dispatch(setProfile(response.data))
            })
    }

    const getStatus = (userId) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data))
            })
    }


    useEffect(() => {
        if(isAuth && !userId) {
            getProfile(myId)
            getStatus(myId)
        }
    }, [isAuth])

    useEffect(() => {
        if(userId) {
            getProfile(userId)
            getStatus(userId)
        } else {
            history.push('/login')
        }
    }, [userId])


    const showStatusForm = useCallback((val) => {
        setShowStatusForm(val)
    }, [])


    if (profile) {
        return (
            <div className={classes.profile}>
                <div className={classes.ProfileHeader}>
                    <div className={classes.profileImg}>
                        {
                            profile.photos.small
                                ? <img className={"z-depth-2"} src={profile.photos.small} alt={profile.fullName}/>
                                : <img className={"z-depth-2"} src={avatar} alt={profile.fullName}/>
                        }
                    </div>
                    <h3 className={classes.uppercase}>{profile.fullName}</h3>
                    {
                        status &&
                        <div className={classes.status}>
                            {
                                !showStatusForrm &&
                                <>{status}</>
                            }
                            {
                                Number(myId) === Number(userId) &&
                                    <>
                                    {
                                        !showStatusForrm
                                            ? <i className={classes.editRight + " material-icons"} onClick={() => showStatusForm(true)}>create</i>
                                            : <i className={classes.editRight + " material-icons"} onClick={() => showStatusForm(false)}>close</i>
                                    }
                                    </>
                            }
                            {
                                showStatusForrm &&
                                <div className="input-field">
                                    <input id="status" type="text"  />
                                    <label htmlFor="status">Status</label>
                                </div>
                            }
                        </div>
                    }

                    <Contacts contacts={profile.contacts} />
                    <div className={classes.profileInfo}>
                        {
                            profile.aboutMe &&
                            <div className={classes.chipItem + " z-depth-2 chip"}>
                                {
                                    profile.photos.small
                                        ? <img src={profile.photos.small} alt={profile.fullName}/>
                                        : null
                                }
                                {profile.aboutMe}
                            </div>
                        }
                        {
                            profile.lookingForAJobDescription &&
                            <div className={profile.lookingForAJob ? `${classes.chipItem} z-depth-2 teal accent-3 chip` : `${classes.chipItem} z-depth-2 red chip`}>
                                {profile.lookingForAJobDescription}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
    return (
        <PreloaderCircle />
        // <Redirect to={`/login`} />
    )

}
export default Profile;
