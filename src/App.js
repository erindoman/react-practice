import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button'

const buttonIs = ['0', '1', '2', '3']

class App extends Component {
  state = { 
    selectedButtonIdx: 0
   }

   handleButtonChange = (newIdx) => {
     this.setState({ selectedButtonIdx: newIdx })
   }

  render() { 
    return ( 
      <div className="App">
        <header className="App-header">Button Picker</header>
      <main>
        <Button 
          handleButtonChange={this.handleButtonChange}
          selectedButtonIdx={this.state.selectedButtonIdx}
          buttonIs={buttonIs}
        />
      </main>
      </div>
     );
  }
}
 
export default App;
