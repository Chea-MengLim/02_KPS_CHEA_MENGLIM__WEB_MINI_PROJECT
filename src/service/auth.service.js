import { baseUrl } from "@/utils/constants";


export const loginService = async (userInfo) => {
    const res = await fetch(`${baseUrl}/api/todo/v1/auth/login`, {
        method : 'POST',
        body : JSON.stringify(userInfo),
        headers : {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();

    return data;
}

export const signUpService = async (userInfo) => {
    const res = await fetch(`${baseUrl}/api/todo/v1/auth/sign-up`, {
        method : "POST",
        body : JSON.stringify(userInfo),
        headers : {
            'Content-Type': 'application/json',
        }
    })
    const data = await res.json();
    return data;
}