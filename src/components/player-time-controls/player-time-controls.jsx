import React from "react";
import PropTypes from "prop-types";
import {getDuration} from "../../utils";

const PlayerControlsTime = (props) => {
  const {
    runtime,
    currentTime,
  } = props;

  const timeLeft = runtime - currentTime;
  const timeInPercent = Math.round(currentTime / runtime * 100);
  const timeLeftFormatted = getDuration(timeLeft);

  return (
    <div className="player__controls-row">
      <div className="player__time">
        <progress className="player__progress" value={timeInPercent} max="100"></progress>
        <div className="player__toggler" style={{left: `${timeInPercent}%`}}>Toggler</div>
      </div>
      <div className="player__time-value">{timeLeftFormatted}</div>
    </div>
  );
};

PlayerControlsTime.propTypes = {
  runtime: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
};

export default PlayerControlsTime;
