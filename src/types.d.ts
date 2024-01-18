export interface User {
    id:string;
    name: string;
    email: string;
    isActive: boolean;
    role:string
}

export interface UsersMutation {
    name: string;
    email:string;
    isActive: boolean;
    role:string;

}