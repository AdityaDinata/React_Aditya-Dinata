import React from 'react';
import Header from './components/Header';
import ContentForm from './components/ContentForm';
import Icon from './components/Icon';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white"> 
      <Header />
      <hr />
      <Icon />
      <ContentForm />
    </div>
  );
}
