import React from "react";
import PropTypes from "prop-types";
import {getDurationWithColons} from "../../utils";

const PlayerControlsTime = (props) => {
  const {
    runtime,
    currentTimeSeconds,
  } = props;

  const runtimeInSeconds = runtime * 60;

  const timeLeft = runtimeInSeconds - currentTimeSeconds;
  const timeInPercent = Math.round(currentTimeSeconds / runtimeInSeconds * 100);
  const timeLeftFormatted = getDurationWithColons(timeLeft / 60);

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
  currentTimeSeconds: PropTypes.number.isRequired,
};

export default PlayerControlsTime;
