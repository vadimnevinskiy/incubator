import React, {useCallback, useEffect, useState} from "react";
import classes from './Profile.module.css';
import {useHistory} from 'react-router-dom';
import {profileAPI} from "../../redux/api";
import {useDispatch, useSelector} from "react-redux";
import {setProfile, setStatus} from "../../redux/actions/profile-action";
import PreloaderCircle from "../../components/Preloaders/PreloaderCircle";
import avatar from '../../assets/img/defaultimg.jpg'
import Contacts from "../../components/Contacts/Contacts";
import Status from "../../components/Status/Status";
import ShowHideBtn from "../../components/common/ShowHideBtn/ShowHideBtn";
import {Field, Form} from "react-final-form";



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



    const onSubmit = values => {
        window.alert(JSON.stringify(values, 0, 2))
    }


    if (profile) {
        return (
            <div className={classes.profile}>
                <div className={classes.ProfileHeader}>
                    <ShowHideBtn toggleForm={toggleForm} showForm={showForm} />
                    {
                        !showForm &&
                        <>
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
                        <>
                            <Form
                                onSubmit={onSubmit}
                                initialValues={{
                                    lookingForAJob: profile.lookingForAJob,
                                    fullName: profile.fullName,
                                    aboutMe: profile.aboutMe,
                                    lookingForAJobDescription: profile.lookingForAJobDescription,
                                    github: profile.contacts.github,
                                    vk: profile.contacts.vk,
                                    facebook: profile.contacts.facebook,
                                    instagram: profile.contacts.instagram,
                                    twitter: profile.contacts.twitter,
                                    website: profile.contacts.website,
                                    youtube: profile.contacts.youtube,
                                    mainLink: profile.contacts.mainLink,
                                }}
                                render={({ handleSubmit, form, submitting, pristine, values }) => (
                                    <form onSubmit={handleSubmit}>
                                        <div className={"row"}>
                                            <div className={"col s12 m12 l12 xl12"}>
                                                <div className={classes.profileImg}>
                                                    {
                                                        profile.photos.small
                                                            ? <img className={"z-depth-2"} src={profile.photos.small} alt={profile.fullName}/>
                                                            : <img className={"z-depth-2"} src={avatar} alt={profile.fullName}/>
                                                    }
                                                </div>

                                            </div>
                                            {/*<div className={"col s12 m12 l12 xl12"}>*/}
                                            {/*    <div className="file-field input-field">*/}
                                            {/*        <div className="btn">*/}
                                            {/*            <span>File</span>*/}
                                            {/*            <input type="file" />*/}
                                            {/*        </div>*/}
                                            {/*        <div className="file-path-wrapper">*/}
                                            {/*            <input className="file-path validate" type="text" />*/}
                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*</div>*/}
                                            <div className={"col s12 m12 l12 xl12 left-align"}>
                                                <label>
                                                    <Field name="lookingForAJob" component="input" type="checkbox" />
                                                    <span>Looking for a job</span>
                                                </label>
                                            </div>
                                            <div className={"col s12 m12 l4 xl4"}>
                                                <div className="input-field">
                                                    <Field
                                                        name="fullName"
                                                        component="input"
                                                        type="text"
                                                        id={"fullName"}
                                                    />
                                                    <label className={"active"} htmlFor="fullName">Login</label>
                                                </div>
                                            </div>
                                            <div className={"col s12 m12 l4 xl4"}>
                                                <div className="input-field">
                                                    <Field
                                                        name="aboutMe"
                                                        component="input"
                                                        type="text"
                                                        id={"aboutMe"}
                                                    />
                                                    <label className={"active"} htmlFor="aboutMe">About me</label>
                                                </div>
                                            </div>
                                            <div className={"col s12 m12 l4 xl4"}>
                                                <div className="input-field">
                                                    <Field
                                                        name="lookingForAJobDescription"
                                                        component="input"
                                                        type="text"
                                                        id={"lookingForAJobDescription"}
                                                    />
                                                    <label className={"active"} htmlFor="lookingForAJobDescription">Looking for a job description</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={classes.contactsBlock}>
                                            <h5>Contacts</h5>
                                            <div className={"row"}>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="github"
                                                            component="input"
                                                            type="text"
                                                            id={"github"}
                                                        />
                                                        <label className={"active"} htmlFor="github">github</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="vk"
                                                            component="input"
                                                            type="text"
                                                            id={"vk"}
                                                        />
                                                        <label className={"active"} htmlFor="vk">vk</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="facebook"
                                                            component="input"
                                                            type="text"
                                                            id={"facebook"}
                                                        />
                                                        <label className={"active"} htmlFor="facebook">facebook</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="instagram"
                                                            component="input"
                                                            type="text"
                                                            id={"instagram"}
                                                        />
                                                        <label className={"active"} htmlFor="instagram">instagram</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="twitter"
                                                            component="input"
                                                            type="text"
                                                            id={"twitter"}
                                                        />
                                                        <label className={"active"} htmlFor="twitter">twitter</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="website"
                                                            component="input"
                                                            type="text"
                                                            id={"website"}
                                                        />
                                                        <label className={"active"} htmlFor="website">website</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="youtube"
                                                            component="input"
                                                            type="text"
                                                            id={"youtube"}
                                                        />
                                                        <label className={"active"} htmlFor="youtube">youtube</label>
                                                    </div>
                                                </div>
                                                <div className={"col s12 m12 l6 xl4"}>
                                                    <div className="input-field">
                                                        <Field
                                                            name="mainLink"
                                                            component="input"
                                                            type="text"
                                                            id={"mainLink"}
                                                        />
                                                        <label className={"active"} htmlFor="mainLink">mainLink</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="fixed-action-btn buttons">
                                            <button type="submit" className="btn-floating btn-large waves-effect waves-light red" disabled={submitting || pristine}>
                                                <i className="material-icons">save</i>
                                            </button>
                                        </div>
                                    </form>
                                )}
                            />
                        </>
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
