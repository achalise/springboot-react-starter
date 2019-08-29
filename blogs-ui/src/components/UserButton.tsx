import { User } from "../models";
import React from "react";

export const UserButton: React.FC<UserButtonProps> = (props) => {
    const onClick = () => {
        props.selectUser(props.user);
    }
    const classes = `btn  mr-1 ${props.selectedUser && props.selectedUser.id === props.user.id ? 'btn-warning' : 'btn-primary'}`
    return (
        <button className={classes} type="button" onClick={onClick}>{props.user.username}</button>
    );
}

export interface UserButtonProps {
    user: User;
    selectedUser?: User;
    selectUser: (user: User) => void
}