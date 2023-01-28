import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState, useEffect, useContext, useRef } from "react";

import SettingsContext from "./SettingsContext";
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

const red = "#f54e4e";
const green = "#4aec8c";

const Timer = () => {

  const settingsInfo = useContext(SettingsContext);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState('work');
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  const tick = () => {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }

  useEffect(() => {

    const switchMode = () => {
      const nextMode = modeRef.current === 'work' ? 'break' : 'work';
      const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode; 

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      } 

      tick();
    }, 1000)

    return () => clearInterval(interval);
  }, [settingsInfo]);

  const totalSeconds = mode === 'work' 
    ? settingsInfo.workMinutes * 60 
    : settingsInfo.breakMinutes * 60;
  const percentage = Math.round(secondsLeft / totalSeconds * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = '0' + seconds;

  return(
    <div>
      <CircularProgressbar 
        value={percentage} 
        text={minutes + ':' + seconds}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: mode === 'work' ? red : green,
          trailColor: 'rgba(255, 255, 255, .2)',
        })}
      />
      <div>
        <div className="block">
          {isPaused 
            ? <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false;}}/> 
            : <PauseButton onClick={() => {setIsPaused(true); isPausedRef.current = true;}}/>
          }
          
          
        </div>
        <div className="block">
          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)}/>
        </div>
      </div>
    </div>
  )
}

export default Timer;