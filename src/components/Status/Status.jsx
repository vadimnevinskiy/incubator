import React, {useCallback, useState} from "react";
import classes from "./Status.module.css";
import {Field, Form} from "react-final-form";
import {profileAPI} from "../../redux/api";
import {useDispatch} from "react-redux";
import {setStatus} from "../../redux/actions/profile-action";




const Status = ({status, myId, userId}) => {
    const dispatch = useDispatch();
    const [showStatusForrm, setShowStatusForm] = useState(false)

    const showStatusForm = useCallback((val) => {
        setShowStatusForm(val)
    }, [])

    const onSubmit = values => {
        if (values.status) {
            profileAPI.updateStatus(values.status)
                .then(response => {
                    if(response.status )
                        dispatch(setStatus(values.status))
                    showStatusForm(false)
                })
        } else {
            window.M.toast({html: 'Empty data!'})
        }
    }



    return (
        <div className={classes.status + " z-depth-1"}>
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
