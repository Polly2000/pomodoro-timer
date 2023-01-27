import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import BackButton from './BackButton';
import SettingsButton from './SettingsButton';

const Timer = () => {

  const red = "#f54e4e";
  const green = "#4aec8c";

  return(
    <div className="timer">
      <CircularProgressbar 
        value={60} 
        text={`60%`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: red,
          trailColor: 'rgba(255, 255, 255, .2)',
        })}
      />
      <div>
        <div className="block">
          <PlayButton />
          <PauseButton />
        </div>
        <div className="block">
          <SettingsButton />
        </div>
      </div>
    </div>
  )
}

export default Timer;