import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_CHECK } from 'admin-on-rest';
import { DOMAIN } from '../constants';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        const request = new Request(`${DOMAIN}/account/login`, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            });
    }

    if (type === AUTH_LOGOUT) {
        const request = new Request(`${DOMAIN}/account/logout`)
        return fetch(request);
    }

    if (type === AUTH_CHECK) {
        if(document.cookie.includes('connect.sid')) {
            return Promise.resolve();
        }

        return Promise.reject();
    }

    return Promise.reject('Unknown method');
}