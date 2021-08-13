import logo from './logo.svg';
import './App.css';
import Display from './Components/Display'
import Keypad from './Components/Keypad'
import React, { Component } from 'react'

class App extends Component {

        constructor(props) {
        super(props)

        this.state = {
            count: " "
        }
    }
    solveEquation = (value) => {
      try{  
        this.setState({ count: eval(this.state.count)})
    }
      catch(e){
      this.setState({count: "Error"})}
    
    }
    
    render() {

      
        const showDisplay = (value) => {
          switch(value) {
            case 'clear':
                this.setState({ count: ''});
                break;
            case 'equal':
            this.solveEquation();
            break;
            case 'backspace':
            this.setState({count: this.state.count.slice(0, -1)});
            break;
          default:
            this.setState({ count: this.state.count + value});
          }
 }              
        if(this.state.count == 9/0) {
          this.setState({count: "Syntax Error (Infinity)"});
        }
        

        return (
          <div className="Calculator">
                <Display count = {this.state.count} />
                <Keypad addToDisplay={showDisplay} />

          </div>
        );
    }
 
  }

export default App



