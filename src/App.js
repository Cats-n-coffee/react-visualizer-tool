import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import ComponentPopup from './components/Body/ComponentPopup';

function App() {
  const [popup, setPopup] = React.useState(false);
  const [popupType, setPopupType] = React.useState('')

  React.useEffect(() => {
    if (popup === false) {
      setPopupType('')
      return;
    }
  }, [popup])

  return (
    <div className="App">
      <h1>React Visualizer</h1>
      <Navbar setPopup={ setPopup } setType={ setPopupType }/>
      <Body setPopup={ setPopup } setType={ setPopupType }/>
      {
        popup ? 
        <ComponentPopup setPopup={ setPopup } type={ popupType } />
        : null
      }
    </div>
  );
}

export default App;
