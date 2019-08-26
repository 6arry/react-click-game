import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import HeroCard from './components/HeroCard';
import Heros from './heros.json';
import Footer from './components/Footer';

class App extends React.Component {
  state = {
    Heros,
    power: 0, // Current Power Level (Current Score for the session)
    highPower: 0 // Highest Power Level (highest score)
  };

  targetHit = value => {
    // console.log(value); the value of the hero within heros.json
    // console.log(this.state.power); the current state of the power level
    this.setState({ power: this.state.power + value});

    // If the current state power level is greater than highest power level, 
    // then set this.state.highPower to this.state.power
      if (this.state.power >= this.state.highPower) {
        this.setState({ highPower: this.state.power})
    }
  }

  render(){
    return (
      <div className="container">
        <Navbar 
          power={this.state.power}
          highPower={this.state.highPower}
        />
        <Header />
        <Main>
          {this.state.Heros.map(hero =>  
            <HeroCard
              targetHit={this.targetHit}
              id={hero.id}
              key={hero.id}
              name={hero.name}
              image={hero.image}
              value={hero.value}
            />
            )}
        </Main>
        <Footer />
      </div>
    );
  }
}


export default App;
