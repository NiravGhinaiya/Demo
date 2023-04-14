import { FastForward, FastRewind, Pause, PlayArrow, SkipNext, VolumeUp } from '@mui/icons-material'
import { makeStyles, Slider, withStyles } from '@mui/material'
import React from 'react'

// import {
//     makeStyles, Slider, withStyles, Button, Tooltip, Popover, Grid

// } from "@material-ui/core";
// import {
//     FastForward,
//     FastRewind,
//     Pause,
//     PlayArrow,
//     SkipNext,
//     VolumeUp,
// } from "@material-ui/icons";
import "./Control.css";


// const useStyles = makeStyles({
//     volumeSlider: {
//       width: "100px",
//       color: "#9556CC",
//     },

//     bottomIcons: {
//       color: "#999",
//       padding: "12px 8px",


//     "&:hover": {
//         color: "#fff",
//       },
//     },
//    });

//    const PrettoSlider = withStyles({
//     root: {
//       height: "20px",
//       color: "#9556CC",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     thumb: {
//       height: 20,
//       width: 20,
//       backgroundColor: "#9556CC",
//       border: "2px solid currentColor",
//       marginTop: -3,
//       marginLeft: -12,
//     "&:focus, &:hover, &$active": {
//         boxShadow: "inherit",
//       },
//     },
//     active: {},
//     valueLabel: {
//       left: "calc(-50% + 4px)",
//     },
//     track: {
//       height: 5,
//       borderRadius: 4,
//       width: "100%",
//     },
//     rail: {
//       height: 5,
//       borderRadius: 4,
//     },
//    })(Slider);

const Control = ({ controlRef, onPlayPause, playing, onForward, onRewind, played, onSeekMouseUp, onSeek, onBufferEnd, onBuffer, onVolumeSeekUp, onVolumeChangeHandler, Volume, onMute, mute, duration, currentTime }) => {
    return (
        <div className="control_Container" ref={controlRef}>
            <div className="top_container">
                <h2>Video PLayer</h2>
            </div>
            <div className="mid__container">
                <div className="icon__btn" onDoubleClick={onRewind}>
                    <FastRewind fontSize="medium" />
                </div>

                <div className="icon__btn" onClick={onPlayPause}>
                    {playing ? (
                        <Pause fontSize="medium" />
                    ) : (
                        <PlayArrow fontSize="medium" />
                    )}{" "}
                </div>

                <div className="icon__btn">
                    <FastForward fontSize="medium" onDoubleClick={onForward} />
                </div>
            </div>
            <div className="bottom__container">
                <div className="slider__container">
                    <Slider
                        min={0}
                        max={100}
                        value={played * 100}
                        onChange={onSeek}
                        onChangeCommitted={onSeekMouseUp}
                    />
                </div>
                <div className="control__box">
                    <div className="inner__controls">
                        <div className="icon__btn">
                            <PlayArrow fontSize="medium" />
                        </div>
                        <div className="icon__btn">
                            <SkipNext fontSize="medium" />
                        </div>
                        <div className="icon__btn" onClick={onMute} >
                            {mute ? (
                                <Volume fontSize="medium" />
                            ) : (
                                <VolumeUp fontSize="medium" />
                            )}
                        </div>

                        <Slider
                            // className={`${classes.volumeSlider}`}
                            onChange={onVolumeChangeHandler}
                            value={Volume * 100}
                            onChangeCommitted={onVolumeSeekUp}
                        />
                        <span className='spanVideo'>{currentTime} : {duration}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Control