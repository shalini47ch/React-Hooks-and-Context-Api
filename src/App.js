import React from 'react'
// import ComponentC from './components/ComponentC/ComponentC';
// import { UserProvider } from './components/UserContext';
import Counter from '../src/ReactHooks/useState/useState'
import Resource from './ReactHooks/UseEffect/UseEffect';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value="Shalini">
        <ComponentC/>
      </UserProvider> */}
      <Counter/>
     <Resource/>
    </div>
  );
}

export default App;
