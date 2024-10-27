import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'; 
import Header from './components/header';
import ContentForm from './components/contentForm';
import Icon from './components/Icon';

export default function App() {
  return (
    <Provider store={store}> 
      <div className="min-h-screen flex flex-col items-center justify-center bg-white"> 
        <Header />
        <Icon />
        <ContentForm /> 
      </div>
    </Provider>
  );
}
