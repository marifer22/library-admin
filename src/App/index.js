import React from 'react';
import { jsonServerRestClient, Admin, Resource, fetchUtils, Delete } from 'admin-on-rest';

import Dashboard from '../dashboard';
import { BooksList, BookEdit, BookCreate } from '../books-list';
import { AuthorsList} from '../authors-list';
import { CategoriesList } from '../categories-list';
import { PublishersList } from '../publishers-list';
import { SectionEdit, SectionCreate } from '../edit-create';
import authClient from '../auth-client';
import { DOMAIN } from '../constants';

const fetchJson = (url, options = {}) => {
    options.credentials = 'include';
    return fetchUtils.fetchJson(url, options)
        .then(res => {
            if (Array.isArray(res.json)) {
                res.json = res.json.map(item => ({...item, id: item._id}));
            } else {
                res.json.id = res.json._id;
            }
            return res;
        })
};

const App = () => (
    <Admin authClient={authClient} dashboard={Dashboard} restClient={jsonServerRestClient(DOMAIN, fetchJson)}>
        <Resource name="books" list={BooksList} edit={BookEdit} create={BookCreate} remove={Delete} />
        <Resource name="authors" list={AuthorsList} edit={SectionEdit} create={SectionCreate} remove={Delete} />
        <Resource name="categories" list={CategoriesList} edit={SectionEdit} create={SectionCreate} remove={Delete} />
        <Resource name="publishers" list={PublishersList} edit={SectionEdit} create={SectionCreate} remove={Delete} />
    </Admin>
);

export default App;