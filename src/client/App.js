import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser, fetchUsers } from './actions';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes()}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser()),
};
