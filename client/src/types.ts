export interface User {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
}

export interface PostgreDBUser {
    id: string;
    user_id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
}