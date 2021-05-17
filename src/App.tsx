import React from 'react';

import ActiveSectionProvider from 'src/context/activeSection.context';

import './App.scss';
import HomePage from './pages/home.page';

const App = () => {
  return (
    <ActiveSectionProvider>
      <HomePage />
    </ActiveSectionProvider>
  );
};

export default App;
