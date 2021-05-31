import React from "react";
import classes from './Preloaders.module.css';


const PreloaderCircle = () => {
    return (
        <>
            <div className={classes.opacity}>&nbsp;</div>
            <div className={classes.loader + " preloader-wrapper big active"}>
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PreloaderCircle;
