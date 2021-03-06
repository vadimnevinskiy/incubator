import React, {useCallback, useEffect, useState} from "react";
import classes from './Profile.module.css';
import {useHistory} from 'react-router-dom';
import {profileAPI} from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfile, setStatus} from "../../redux/actions/profile-action";
import PreloaderCircle from "../../components/common/Preloaders/PreloaderCircle";
import avatar from '../../assets/img/defaultimg.jpg'
import Contacts from "../../components/Contacts/Contacts";
import Status from "../../components/Status/Status";
import ShowHideBtn from "../../components/common/ShowHideBtn/ShowHideBtn";
import {Field, Form} from "react-final-form";
import EditProfileForm from "../../components/EditProfileForm/EditProfileForm";



const Profile = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const profile = useSelector(({profilePage}) => profilePage.profile);
    const status = useSelector(({profilePage}) => profilePage.status);
    const myId = useSelector(({auth}) => auth.userId);
    const isAuth = useSelector(({auth}) => auth.isAuth);


    const userId = history.location.pathname.split('/')[2];



    // TOGGLE_FORM
    const [showForm, setShowForm] = useState(false)
    const toggleForm = useCallback((val) => {
        setShowForm(val)
    }, [])


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






    if (profile) {
        return (
            <div className={classes.profile}>
                <div className={classes.ProfileHeader}>
                    {
                        Number(myId) === Number(userId) &&
                        <ShowHideBtn toggleForm={toggleForm} showForm={showForm} />
                    }

                    {
                        !showForm &&
                        <>
                            <div className={classes.profileImg}>
                                {
                                    profile.photos?.small
                                        ? <img className={"z-depth-2"} src={profile.photos.small} alt={profile.fullName}/>
                                        : <img className={"z-depth-2"} src={avatar} alt={profile.fullName}/>
                                }
                            </div>
                            <h3 className={classes.uppercase}>{profile.fullName}</h3>
                            {
                                status &&
                                <Status status={status} myId={myId} userId={userId}/>
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
                        </>
                    }

                    {
                        showForm &&
                        <EditProfileForm profile={profile} userId={userId} setShowForm={setShowForm} />
                    }
                </div>
            </div>
        )
    }
    return (
        <PreloaderCircle />
    )

}
export default Profile;
