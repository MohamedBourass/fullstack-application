export type Mode = 'signin' | 'signup';

export interface SignInRequest {
    email: string;
    password: string;
}

export interface SignUpRequest {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
}

export interface User {
    email: string;
    firstname: string;
    lastname: string;
}

export interface SignInResponse {
    token: string;
    // ...
}

export interface SignUpResponse {
    email: string;
    // ...
}


