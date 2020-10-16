import React from 'react';
import s from './App.scss';
import texasHoldem from './texasHoldem';

class App extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <h2 className={s.title} data-hook="app-title">
          {texasHoldem('2S 2H 4H 5S 4C', 'AH AC 5H 6H 7S')}
        </h2>
      </div>
    );
  }
}

export default App;
