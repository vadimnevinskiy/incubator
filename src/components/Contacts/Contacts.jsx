import React from "react";
import classes from "./Contacts.module.css";

import vk from "../../assets/img/contacts/vk.png";
import facebook from "../../assets/img/contacts/fb.png";
import githhub from "../../assets/img/contacts/github.png";
import instagram from "../../assets/img/contacts/instagram.png";
import link from "../../assets/img/contacts/link.png";
import twitter from "../../assets/img/contacts/twitter.png";
import website from "../../assets/img/contacts/website.png";
import youtube from "../../assets/img/contacts/youtube.png";



const Contacts = ({contacts}) => {
    return (
        <div className={classes.contacts}>
            {
                !contacts.vk &&
                <span className={classes.disable}><img src={vk} alt=""/></span>
            }
            {
                contacts.vk &&
                <a href={contacts.vk} target='_blank'><img src={vk} alt=""/></a>
            }

            {
                !contacts.facebook &&
                <span className={classes.disable}><img src={facebook} alt=""/></span>
            }
            {
                contacts.facebook &&
                <a href={contacts.facebook} target='_blank'><img src={facebook} alt=""/></a>
            }

            {
                !contacts.githhub &&
                <span className={classes.disable}><img src={githhub} alt=""/></span>
            }
            {
                contacts.githhub &&
                <a href={contacts.githhub} target='_blank'><img src={githhub} alt=""/></a>
            }

            {
                !contacts.instagram &&
                <span className={classes.disable}><img src={instagram} alt=""/></span>
            }
            {
                contacts.instagram &&
                <a href={contacts.instagram} target='_blank'><img src={instagram} alt=""/></a>
            }

            {
                !contacts.link &&
                <span className={classes.disable}><img src={link} alt=""/></span>
            }
            {
                contacts.link &&
                <a href={contacts.link} target='_blank'><img src={link} alt=""/></a>
            }

            {
                !contacts.twitter &&
                <a className={classes.disable}><img src={twitter} alt=""/></a>
            }
            {
                contacts.twitter &&
                <a href={contacts.twitter} target='_blank'><img src={twitter} alt=""/></a>
            }

            {
                !contacts.website &&
                <a className={classes.disable}><img src={website} alt=""/></a>
            }
            {
                contacts.website &&
                <a href={contacts.website} target='_blank'><img src={website} alt=""/></a>
            }

            {
                !contacts.youtube &&
                <span className={classes.disable}><img src={youtube} alt=""/></span>
            }
            {
                contacts.youtube &&
                <a href={contacts.youtube} target='_blank'><img src={youtube} alt=""/></a>
            }
        </div>
    )
}
export default Contacts;
