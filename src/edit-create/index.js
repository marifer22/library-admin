import React from 'react';
import { 
    Edit, Create, SimpleForm,
    DisabledInput, TextInput 
} from 'admin-on-rest';

const SectionTitle = ({record}) => {
    return <span>{record ? `${record.title}` : ''}</span>;
};

export const SectionEdit = (props) => (
    <Edit  title={<SectionTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const SectionCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);