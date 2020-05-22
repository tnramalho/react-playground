import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { 
    Filter, 
    List, 
    Datagrid, 
    TextField, 
    TextInput,
    ReferenceField,
    ReferenceInput, 
    EditButton,
    SelectInput,
    SimpleList,
} from 'react-admin';



const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const PostList = props => {

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

   return ( <List filters={<PostFilter />} {...props}>
   {
    isSmall ? (
        <SimpleList
            primaryText={record => record.title}
            secondaryText={record => ( `${record.name} views` ) }
            tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
        />
    ) : (
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    )
   }  
    </List>)
};
 