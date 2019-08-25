import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import HeroCard from './components/HeroCard';
import Heros from './heros.json';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Main>
        {Heros.map(hero =>  
          <HeroCard
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


export default App;
