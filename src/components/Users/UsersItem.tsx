import {User} from "../../types";
import React from "react";

interface UsersItemsProps {
    user: User;
}
const UsersItem: React.FC<UsersItemsProps> = ({user}) => {
    return (
        <div className="userItem">
            <h5>{user.name}</h5>
            <p>{user.email}</p>
            <p>Active: {user.isActive ? 'да' : 'нет'}</p>
            <p>{user.role}</p>
        </div>
    );
};

export default UsersItem;