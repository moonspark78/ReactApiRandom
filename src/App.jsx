import './App.css';
import { FormInputs } from './Components/FormInputs';
import { Random } from './Components/Random';
import { Callback } from './Components/Callback';
import { useState } from 'react';

function App() {
  const [uiColor, setUiColor] = useState(null);

  const handleColrChange = (color) =>{
    setUiColor(color);
  };


  return (
    <div className="App">
      {/* <Random/> */}
      {/* <FormInputs/> */}
      <div className='coloo' style={{backgroundColor: uiColor}}>
      </div>

      <Callback changeColor={handleColrChange}/>
    </div>
  );
}
export default App;
