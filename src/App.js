import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import HeroCard from './components/HeroCard';
import Heros from './heros.json';
import Footer from './components/Footer';

class App extends Component {
  state = {
    Heros
  };

  targetHit = value => {
    console.log(value);
  }

  render(){
    return (
      <div className="container">
        <Navbar />
        <Header />
        <Main>
          {Heros.map(hero =>  
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
