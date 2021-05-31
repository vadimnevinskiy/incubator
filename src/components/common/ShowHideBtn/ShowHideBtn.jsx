import React from "react";
import classes from "./ShowHideBtn.module.css";

const ShowHideBtn = ({toggleForm, showForm}) => {
    return (
        <>
            {
                !showForm
                    ? <i className={classes.editRight + " material-icons"} onClick={() => toggleForm(true)}>create</i>
                    : <i className={classes.editRight + " material-icons"} onClick={() => toggleForm(false)}>close</i>
            }
        </>
    )
}
export default ShowHideBtn;
