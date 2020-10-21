import React from 'react';

import Header from './components/Header';

import './App.css';

function App() {
  const user = {
    age:'35', 
    status:'student', 
    poulet:"yami"
  }
  return (
    <div className="App">
      <Header age='42' status='Chicken Lord'/>
      <Header {...user}/>
    </div>
  )
}

export default App;
