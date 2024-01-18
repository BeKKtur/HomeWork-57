import {ROLE} from "../../constand";
import React, {useState} from "react";
import {User, UsersMutation} from "../../types";

interface UserFormProps {
    onSubmit: (user:User) => void
}
const UserForm: React.FC<UserFormProps> = ({onSubmit}) => {

    const [user, setUser] = useState<UsersMutation>({
        name: '',
        email: '',
        isActive: false,
        role: '',
    });

    const changeUser = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const onFormSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            id:Math.random().toString(),
            ...user,
        })
    }

    const changeIsActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prevState => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }))
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <h3>Create User</h3>
            <div>
                <label htmlFor="name">User name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={changeUser}
                />
            </div>
            <div>
                <label htmlFor="userName">User email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={changeUser}
                />
            </div>
            <div>
                <label htmlFor="isActive">Is active</label>
                <input
                    type="checkbox"
                    name="isActive"
                    id="isActive"
                    checked={user.isActive}
                    onChange={changeIsActive}
                />
            </div>
            <div>
                <label htmlFor="role">Role</label>
                <select
                    required
                    name="role"
                    id="role"
                    value={user.role}
                    onChange={changeUser}
                >
                    <option value="">Role not selected</option>
                    {ROLE.map(role => (
                        <option key={role.value} value={role.value}>{role.label}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="button">Add user</button>
        </form>
    );
};

export default UserForm;