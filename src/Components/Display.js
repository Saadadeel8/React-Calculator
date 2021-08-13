import React, { Component } from 'react';
import Keypad from './Keypad.js';

class Display extends Component {

    render() {
        return (
            
                <div className='Display'>{this.props.count}</div>
              

           
        );
    }

}

export default Display
