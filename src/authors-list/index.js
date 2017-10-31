import React from 'react';
import { 
    List, Datagrid, TextField,
    EditButton
} from 'admin-on-rest';

export const AuthorsList = (props) => (
    <List title="Authors" {...props}>
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);
