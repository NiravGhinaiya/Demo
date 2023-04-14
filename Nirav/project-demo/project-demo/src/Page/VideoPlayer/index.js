import React, { useRef, useState } from 'react'
import ReactPlayer from "react-player";
import { Container } from "@mui/material";
import '../../Style/videoPlayer.css'
import Control from './Control';


const VideoPlayer = () => {

    const [videoState, setVideoState] = useState({
        playing: true,
        muted: false,
        volume: 0.5,
        played: 0,
        seeking: false,
        Buffer: true
    });
    const { playing, muted, volume, playbackRate, played, seeking, buffer } = videoState
    const videoPlayerRef = useRef(null);
    const controlRef = useRef(null)

    const playPauseHandler = () => {
        //plays and pause the video (toggling)
        setVideoState({ ...videoState, playing: !videoState.playing });
    };

    const rewindHandler = () => {
        //Rewinds the video player reducing 5
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    };

    const fastFowardHandler = () => {
        //FastFowards the video player by adding 10
        videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 10);
    };

    const progressHandler = (state) => {

        if (!seeking) {
            setVideoState({ ...videoState, ...state });
        }
    };

    const seekHandler = (e, value) => {
        setVideoState({ ...videoState, played: parseFloat(value) / 100 });
    };

    const seekMouseUpHandler = (e, value) => {
        setVideoState({ ...videoState, seeking: false });
        videoPlayerRef.current.seekTo(value / 100);
    };


    const volumeChangeHandler = (e, value) => {
        console.log(e,value)
        const newVolume = parseFloat(value) / 100;
        setVideoState({
            ...videoState,
            volume: newVolume,
            muted: Number(newVolume) === 0 ? true : false, // volume === 0 then muted
        })

    };

    const volumeSeekUpHandler = (e, value) => {
        const newVolume = parseFloat(value) / 100;
        setVideoState({
            ...videoState,
            volume: newVolume,
            muted: newVolume === 0 ? true : false,
        })
    };

    const muteHandler = () => {
        //Mutes the video player
        setVideoState({ ...videoState, muted: !videoState.muted });
    };

    const bufferStartHandler = () => {
        console.log("Bufering.......");
        setVideoState({ ...videoState, buffer: true })
    };

    const bufferEndHandler = () => {
        console.log("buffering stoped ,,,,,,play");
        setVideoState({ ...videoState, buffer: false })
    };

    const currentTime = videoPlayerRef.current ? videoPlayerRef.current.getCurrentTime() : "00:00";
    const duration = videoPlayerRef.current ? videoPlayerRef.current.getDuration() : "00:00";
    const formatCurrentTime = formatTime(currentTime)
    const formatDuration = formatTime(duration)


    return (
        <div className="video_container">
            <div>
            {buffer && <p>Loading</p>}
                <h2>React player</h2>
            </div>
            <Container maxWidth="md" justify="center">
                <div className="player__wrapper">
                    <ReactPlayer
                        ref={videoPlayerRef}
                        className="player"
                        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
                        width="100%"
                        height="100%"
                        playing={playing}
                        volume={volume}
                        muted={muted}
                        onProgress={progressHandler}
                    />
                    <Control
                        controlRef={controlRef}
                        onPlayPause={playPauseHandler}
                        playing={playing}
                        onRewind={rewindHandler}
                        onForward={fastFowardHandler}
                        played={played}
                        onSeek={seekHandler}
                        onSeekMouseUp={seekMouseUpHandler}
                        Volume={volume}
                        onVolumeChangeHandler={volumeChangeHandler}
                        onVolumeSeekUp={volumeSeekUpHandler}
                        mute={muted}
                        onMute={muteHandler}
                        duration={formatDuration}
                        currentTime={formatCurrentTime}
                        onBuffer={bufferStartHandler}
                        onBufferEnd={bufferEndHandler}
                    />
                </div>
            </Container>
           
        </div>
    )
}

export default VideoPlayer

export const formatTime = (time) => {
    //formarting duration of video
    if (isNaN(time)) {
        return "00:00";
    }

    const date = new Date(time * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    if (hours) {
        //if video have hours
        return `${hours}:${minutes.toString().padStart(2, "0")} `;
    } else return `${minutes}:${seconds}`;
};