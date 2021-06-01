import React, {useEffect} from "react";
import classes from './Dialogs.module.css';
import {NavLink, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setDialogs, setMessages} from "../../redux/actions/dialogs-action";


const Dialogs = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const dialogId = history.location.pathname.split('/')[2];
    const dialogs = useSelector(({dialogsPage}) => dialogsPage.dialogs);
    const messages = useSelector(({dialogsPage}) => dialogsPage.messages);

    const dialogsArr = [
        {id: 0, name: 'Dima', messageCount: 3},
        {id: 1, name: 'Vadim', messageCount: 1},
        {id: 2, name: 'Lena', messageCount: 0},
        {id: 3, name: 'Alan', messageCount: 0},
    ]

    const messagesArr = [
        {
            dialogId: 0,
            messages: [
                {id: 0, message: 'DimaLorem ipsum dolor sit amet.'},
                {id: 1, message: 'DimaLorem ipsum dolor sit.'},
                {id: 2, message: 'DimaLorem ipsum dolor.'},
            ]
        },
        {
            dialogId: 1,
            messages: [
                {id: 0, message: 'VadimDolor sit amet.'},
                {id: 1, message: 'VadimIpsum dolor sit.'},
                {id: 2, message: 'VadimLorem dolor.'},
            ]
        },
        {
            dialogId: 2,
            messages: [
                {id: 0, message: 'LenaSit amet.'},
                {id: 1, message: 'LenaDolor sit.'},
                {id: 2, message: 'LenaLorem dolor sit.'},
            ]
        },
        {
            dialogId: 3,
            messages: [
                {id: 0, message: 'AlanAmet.'},
                {id: 1, message: 'AlanDolor sit.'},
                {id: 2, message: 'AlanSit dolor'},
            ]
        }
    ]

    useEffect(() => {
        dispatch(setDialogs(dialogsArr))
    }, [])

    useEffect(() => {
        dispatch(setMessages(messagesArr))
    }, [])


    return (
        <div className={classes.dialogs}>
            <div className={"row"}>
                <div className={"col s5 m5 l4 xl3"}>
                    <div className="collection">
                        {
                            dialogs.map((dialog, index) => {
                                return (
                                    <NavLink key={`${dialog.id}_${index}`} to={`/dialogs/${dialog.id}`}
                                             className="collection-item">
                                        {
                                            dialog.messageCount !== 0 &&
                                            <span className="new badge">{dialog.messageCount}</span>
                                        }
                                        {dialog.name}
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
                <div className={"col s7 m7 l7 xl7"}>
                    <div className={classes.messages}>
                        {
                            messages
                                .filter(dialogs => {
                                    if(Number(dialogs.dialogId) === Number(dialogId)) {
                                        return dialogs.messages
                                    }
                                })
                                .map((messageList) => {
                                    return messageList.messages.map(item => {
                                        return (
                                            <div key={item.id} className={classes.messageItem}>
                                                {item.message}
                                            </div>
                                        )
                                    })
                                })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;
