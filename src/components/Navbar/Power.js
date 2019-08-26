import React from 'react';
import Navbar from './index.js'

class Power extends React.Component {
    // Setting the inital (begining) state of the Power component
    state = {
        power: 0
    };

    // The powerUp method increases this.state.power by 750
    powerUp = () => {
        this.setState({ count: this.state.count + 750 });
    };
    
}

export default Power;