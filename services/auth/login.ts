import cookie from 'js-cookie'

import { isRequestSuccessful } from "@/utils/validatedRequestStatus";
import getConfig from "next/config";

const { publicRuntimeConfig} = getConfig();

export const login = (email: string, password: string): Promise<{status: number}> => {

    return fetch(`${publicRuntimeConfig.DIRECTUS_API}/auth/login`, {
        method: 'POST',
        credentials: 'include',
        headers: new Headers( {
            'Content-Type' : 'application/json'
        }),
        body: JSON.stringify( {
            email,
            password,
            mode: 'cookie'
        })
    }).then((res) => {
        if(isRequestSuccessful(res.status)) {
            return res.json().then((r) => {
                const expiringDate = new Date(new Date().getTime() + r.data.expires);
                cookie.set('ds_access_token', r.data.access_token, {expires: expiringDate});
                return {status: res.status};
            })
        } else return {status: res.status};
    },
    () => {
        return {status: 500};
    });
}