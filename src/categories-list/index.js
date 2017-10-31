import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'admin-on-rest';

export const CategoriesList = (props) => (
    <List title="Categories" {...props}>
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);