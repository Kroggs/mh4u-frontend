import getConfig from "next/config";
import cookie from 'js-cookie'
import { isRequestSuccessful } from "@/utils/validatedRequestStatus";

const { publicRuntimeConfig } = getConfig();

let isRefreshing = false;

export async function retrieveToken(): Promise<string | undefined> {
    let token = cookie.get('ds_access_token');
    if(!token) {
        if(isRefreshing) {
            await refreshToken();
            return cookie.get('ds_access_token');
        }
        isRefreshing = true;
        await refreshToken();
        token = cookie.get('ds_access_token');
        isRefreshing = false;
    }
    return token;
}

export const refreshToken = () => {
    return fetch(`${publicRuntimeConfig.DIRECTUS_API}/auth/refresh`, {
        method: 'POST',
        credentials: 'include',
        headers: new Headers({'Content-Type' : 'application/json'}),
    }).then(
        (res) => {
            if(isRequestSuccessful(res.status)){
                return res.json().then(
                    (r) => {
                        const expiringDate = new Date(new Date().getTime() + r.data.expires);
                        cookie.set('ds_access_token', r.data.access_token, { expires: expiringDate});
                        return Promise.resolve();
                    },
                    () => {
                        cookie.remove('ds_access_token');
                        return Promise.reject();
                    }
                )
            } else {
                cookie.remove('ds_access_token');
                return Promise.reject();
            }
        },
        () => {
            cookie.remove('ds_access_token');
            return Promise.reject();
        }
    );
};