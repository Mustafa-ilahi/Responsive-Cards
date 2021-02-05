import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card';


// Class Components
class App extends React.Component{
  render(){
    return(
      <div>
        <h1 style={{textAlign:"center"}}>Responsive Cards</h1>
        <Card />
      </div>
    )
  }
}

export default App;
