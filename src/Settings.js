import { useContext } from "react";
import ReactSlider from "react-slider";

import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";

const Settings = () => {

  const settingsInfo = useContext(SettingsContext);

  return(
    <div className="settings">
      <label>Work: {settingsInfo.workMinutes}:00 </label>
      <ReactSlider
        className="slider slider_red"
        thumbClassName="slider__thumb slider__thumb_red"
        trackClassName=""
        value={settingsInfo.workMinutes}
        onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>Break: {settingsInfo.breakMinutes}:00 </label>
       <ReactSlider
        className="slider slider_green"
        thumbClassName="slider__thumb slider__thumb_green"
        trackClassName=""
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="settings__back">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
      </div>
    </div>
  )
}

export default Settings;