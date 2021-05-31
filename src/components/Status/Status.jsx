import React, {useCallback, useState} from "react";
import classes from "./Status.module.css";
import {Field, Form} from "react-final-form";
import {profileAPI} from "../../redux/api";
import {useDispatch} from "react-redux";
import {setStatus} from "../../redux/actions/profile-action";
import ShowHideBtn from "../common/ShowHideBtn/ShowHideBtn";




const Status = ({status, myId, userId}) => {
    const dispatch = useDispatch();

    // TOGGLE_FORM
    const [showForm, setShowForm] = useState(false)
    const toggleForm = useCallback((val) => {
        setShowForm(val)
    }, [])





    const onSubmit = values => {
        if (values.status) {
            profileAPI.updateStatus(values.status)
                .then(response => {
                    if(response.status )
                        dispatch(setStatus(values.status))
                    setShowForm(false)
                })
        } else {
            window.M.toast({html: 'Empty data!'})
        }
    }



    return (
        <div className={classes.status + " z-depth-1"}>
            {
                !showForm &&
                <>{status}</>
            }
            {
                Number(myId) === Number(userId) &&
                <ShowHideBtn toggleForm={toggleForm} showForm={showForm} />
            }
            {
                showForm &&
                <Form
                    onSubmit={onSubmit}
                    initialValues={{ status: status}}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <div className="input-field">
                                    <Field
                                        name="status"
                                        component="input"
                                        type="text"
                                    />
                                    <label htmlFor="status" className={"active"}>Status</label>
                                </div>
                            </div>
                            <div className="buttons ">
                                <button className={"btn waves-effect waves-light"} type="submit" disabled={submitting || pristine}>
                                    Update
                                </button>
                            </div>
                        </form>
                    )}
                />
            }
        </div>
    )
}
export default Status;
