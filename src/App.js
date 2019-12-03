import React from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Food from './components/Foodfunc';

class App extends React.Component{
  render(){
    return(
      <div>
      <Header />
      <Banner />
      <Food />
      </div>
    );
  }
}

export default App;
