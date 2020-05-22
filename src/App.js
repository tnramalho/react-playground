// in src/App.js
import React from 'react';
import { 
  Admin, 
  Resource, 
  ListGuesser, 
  EditGuesser 
} from 'react-admin';
import { UserList } from './components/organisms/UserList';
import { PostList } from './components/organisms/PostList';
import { PostEdit } from './components/organisms/PostEdit';
import { PostCreate } from './components/organisms/PostCreate';
import Dashboard from './components/organisms/Dashboard';
import authProvider from './authProvider';

import jsonServerProvider from 'ra-data-json-server';

import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
              <Admin 
                dashboard={Dashboard} 
                dataProvider={dataProvider} 
                authProvider={authProvider}
                >
                <Resource 
                  name="posts" 
                  list={PostList} 
                  edit={PostEdit} 
                  create={PostCreate} 
                  icon={PostIcon}
                />
                <Resource 
                  name="users" 
                  list={UserList} 
                  icon={UserIcon} 
                  />
              </Admin>
            );

export default App;