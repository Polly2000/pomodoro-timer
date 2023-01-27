import ReactSlider from "react-slider";

const Settings = () => {
  return(
    <div className="settings">
      <label>Work minutes:</label>
      <ReactSlider
        className="slider slider_red"
        thumbClassName="slider__thumb slider__thumb_red"
        trackClassName="slider__track slider__track_red"
        value={45}
        min={1}
        max={120}
      />
      <label>Break minutes:</label>
       <ReactSlider
        className="slider slider_green"
        thumbClassName="slider__thumb slider__thumb_green"
        trackClassName="slider__track slider__track_green"
        value={45}
        min={1}
        max={120}
      />
    </div>
  )
}

export default Settings;