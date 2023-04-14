import { CircularProgress, Slider } from '@mui/material';
import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'

const ProductData = () => {

    const [videoState, setVideoState] = useState({
        playing: false,
        muted: false,
        volume: 0.5,
        played: 0,
        seeking: false,
        Buffer: true
    });
    const { playing, muted, volume, playbackRate, played, seeking, buffer } = videoState
    const videoPlayerRef = useRef(null);


    // fetch('https://fakestoreapi.com/products').then(res => res.json()).then(json => console.log(json))

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
        console.log(value)
        setVideoState({ ...videoState, seeking: false });
        videoPlayerRef.current.seekTo(value / 100);
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
        <div>
            <h1>ProductData</h1>
            <div style={{
                width: '60%', height: 'auto', margin: '5% 20%',display:'flex', alignItems:'center', justifyContent:'center'
            }}>
                <div style={{ position:'absolute' }}>
                    {buffer && <CircularProgress />}
                </div>
                <ReactPlayer
                    ref={videoPlayerRef}
                    url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
                    controls={true}
                    width="100%"
                    height="100%"
                    playing={playing}
                    muted={muted}
                    onProgress={progressHandler}
                    onBuffer={bufferStartHandler}
                    onBufferEnd={bufferEndHandler}
                />
            </div>
            <div>
                <button onClick={playPauseHandler}>{playing ? 'Pause' : 'Play'}</button>
                <br /><br />
                <button onClick={muteHandler}>{muted ? 'Unmute' : 'Mute'}</button>
                <br /><br />
                <span>{formatCurrentTime} : {formatDuration}</span>
                <br /><br />
                <button onClick={rewindHandler}>Rewinds</button>
                <button onClick={fastFowardHandler}>fastFoward</button>
                <br /><br />
                <div style={{ width: '80%', marginLeft: '8%' }} >
                    <Slider
                        min={0}
                        max={100}
                        value={played * 100}
                        onChange={seekHandler}
                        onChangeCommitted={seekMouseUpHandler}
                    />
                </div>
            </div>
        </div>

    )
}

export default ProductData

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