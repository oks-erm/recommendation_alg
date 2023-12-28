import React from 'react';
import { UserProvider } from './contexts/UserContext';
import { Provider } from 'react-redux';
import store from './redux/store';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <Provider store={store}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </Provider>
  );
}

export default App;

