import { useState } from 'react';

import Timer from './Timer';
import Settings from './Settings';
import './App.scss';

const App = () => {

  const [showSettings, setShowSettings] = useState(true);

  return (
    <div className="app">
      {showSettings ? <Settings /> : <Timer />}
    </div>
  );
}

export default App;
