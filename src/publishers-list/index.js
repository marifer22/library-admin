import React from 'react';
import { List, Datagrid, TextField, EditButton } from 'admin-on-rest';

export const PublishersList = (props) => (
    <List title="Publishers" {...props}>
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);