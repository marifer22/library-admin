import React from 'react';
import { 
    List, Datagrid, TextField,
    ReferenceField, Edit,
    SimpleForm, DisabledInput,
    TextInput, ReferenceInput,
    SelectInput, LongTextInput,
    Create, EditButton, Filter
} from 'admin-on-rest';

const PostFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="author" source="author" reference="authors" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="category" source="category" reference="categories" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput label="publisher" source="publisher" reference="publishers" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const BooksList = (props) => (
    <List {...props} filters={<PostFilter />}>
        <Datagrid>
            <TextField source="title" />
            <ReferenceField label="author" source="author" reference="authors" allowEmpty>
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="category" source="category" reference="categories" allowEmpty>
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="publisher" source="publisher" reference="publishers" allowEmpty>
                <TextField source="name" />
            </ReferenceField>
            <TextField source="code" />
            <EditButton />
        </Datagrid>
    </List>
);

const BookTitle = ({record}) => {
    return <span>{record ? `${record.title}` : ''}</span>;
};

export const BookEdit = (props) => (
    <Edit title={<BookTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="subtitle" />
            <ReferenceInput label="author" source="author._id" reference="authors" >
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="year" />
            <ReferenceInput label="category" source="category._id" reference="categories" >
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <ReferenceInput label="publisher" source="publisher._id" reference="publishers" >
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="image" />
            <TextInput source="thumb" />
            <TextInput source="code" />
            <TextInput source="price" />
            <TextInput source="rank" />
            <TextInput source="descriptionTitle" />
            <LongTextInput source="descriptionContent" />
        </SimpleForm>
    </Edit>
);

export const BookCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <TextInput source="subtitle" />
            <ReferenceInput label="author" source="author" reference="authors" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="year" />
            <ReferenceInput label="category" source="category" reference="categories" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <ReferenceInput label="publisher" source="publisher" reference="publishers" allowEmpty>
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="image" />
            <TextInput source="thumb" />
            <TextInput source="code" />
            <TextInput source="price" />
            <TextInput source="rank" />
            <TextInput source="descriptionTitle" />
            <LongTextInput source="descriptionContent" />
        </SimpleForm>
    </Create>
);