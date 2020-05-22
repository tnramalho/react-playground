import React from 'react';
import { 
    List, 
    Datagrid, 
    TextField, 
    EmailField, 
    UrlField 
} from 'react-admin';

import MyUrlField from '../atoms/MyUrlField';


export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <EmailField source="email" />
            <TextField source="phone" />
            <MyUrlField source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);