import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';

function App() {
  const [popup, setPopup] = React.useState(false)

  return (
    <div className="App">
      <h1>React Visualizer</h1>
      <Navbar setPopup={ setPopup } />
      <Body popup={ popup } setPopup={ setPopup }/>
    </div>
  );
}

export default App;
