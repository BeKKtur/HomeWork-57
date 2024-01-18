import {User} from "../../types";
import React from "react";
import UsersItem from "./UsersItem";

interface UsersProps {
    addUsers: User[];
}

const Users:React.FC<UsersProps> = ({addUsers}) => {
    return (
        <div>
            <h3>Users</h3>
            {addUsers.map(user => (
                <UsersItem
                key={user.id}
                user={user}
                />
            ))}
        </div>
    );
};

export default Users;