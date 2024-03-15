export interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface User {
    id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
    address: Address;
}

export interface PostgreDBUser {
    id: string;
    user_id: number;
    name: string;
    company: string;
    email: string;
    phone: string;
}