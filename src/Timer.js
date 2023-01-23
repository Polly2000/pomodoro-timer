import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Button } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const Timer = () => {

  const red = '#f54e4e';
  const green = '#4aec8c';

  return(
    <div className="timer">
      <CircularProgressbar 
        value={50} 
        text={`50%`}
        styles={buildStyles({
          textColor: '#fff',
          pathColor: red,
          trailColor: 'rgba(255, 255, 255, .2)',
        })}
      />
      <div>
        <button className="button">
          <PlayCircleIcon fontSize="large"/>
        </button>
      </div>
    </div>
  )
}

export default Timer;