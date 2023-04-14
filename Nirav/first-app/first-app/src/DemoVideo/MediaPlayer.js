import ReactPlayer from 'react-player'
import React, { useState } from 'react';
// import CustomVideoPlayerControlPanel from './CustomVideoPlayerControlPanel';



const MediaPlayer = () => {

    const [currentSeek, setCurrentSeek] = useState(0)
    const [isPlay, setIsPlay] = useState(false)
    const [volumeBar, setVolumeBar] = useState(100)
    const [totalDurationOfVideo, setTotalDurationOfVideo] = useState(0)

    const handlePause = async (e) => {
        setIsPlay(false)
        const data = {
            play: false,
            pause: true,
            isVideoPlayed: false,
            currentTime: currentSeek,
            actionBy: 'host'
        }
        // await db.collection('events')
        //     .doc(this.WatchParty.firebaseEventId)
        //     .update(data)
    }

    const handlePlay = async (e) => {
        if (totalDurationOfVideo === 0) {

            // setTotalDurationOfVideo(totalDurationOfVideo: this.hostVideo.current.getDuration())
        }
        setIsPlay(true)
        const data = {
            play: true,
            pause: false,
            isVideoPlayed: true,
            currentTime: this.state.currentSeek,
            actionBy: 'host'
        }
        // await db.collection('events')
        //     .doc(this.WatchParty.firebaseEventId)
        //     .update(data)
    }

    const handleSeekChange = async (e) => {
        setCurrentSeek(e.target.value)
        this.hostVideo.current.seekTo(e.target.value)
        const data = {
            currentTime: e.target.value,
            actionBy: 'host'
        }
        // await db.collection('events')
        //     .doc(this.WatchParty.firebaseEventId)
        //     .update(data)
    }

    const handleVolumeChange = async (e) => {
        setVolumeBar(e.target.value)
        const data = {
            volume: e.target.value / 100,
            actionBy: 'host'
        }
        // await db.collection('events')
        //     .doc(this.WatchParty.firebaseEventId)
        //     .update(data)
    }

    return (
        <>
            <div className='player' style={{
                width: "100%",
                height: '92%'
            }}>
                <ReactPlayer url={this.state.videoUrl}
                    width='100%'
                    height='100%'
                    // volume={volume}
                    // muted={muted}/
                    onError={this.handleError}
                    onReady={(e) => this.handleVideoReady(e)}
                    ref={this.hostVideo}
                    // onProgress={this.handleProgress}
                    playing={this.state.isPlay}
                    onProgress={(e) => this.handleOnProgress(e)}
                >
                </ReactPlayer>
                {/* <CustomVideoPlayerControlPanel
                    currentSeek={currentSeek}
                    playing={isPlay}
                    volume={volumeBar}
                    handlePause={(e) => this.handlePause(e)}
                    handlePlay={(e) => this.handlePlay(e)}
                    handleSeekChange={this.handleSeekChange}
                    totalDurationOfVideo={totalDurationOfVideo}
                    handleVolumeChange={this.handleVolumeChange} /> */}
            </div>
            <div className='row d-flex m-0 custom-player-controller'>
                <div className='custom-player-controller-play-pause text-center' >
                    {/* {playing && <p onClick={handlePause} className='m-0'><i className="fa fa-pause text-white" /></p>}
                    {!playing && <p onClick={handlePlay} className='m-0'><i className="fa fa-play text-white" /></p>} */}
                </div>
                <div className='custom-player-controller-volumne row m-0 ' style={{
                    alignItems: 'center'
                }}>
                    <div style={{ alignSelf: 'center', margin: '0px 5px', width: '10%' }}>
                        {/* {volume > 50 && <i className='fa fa-volume-up text-white' />}
                        {
                            // eslint-disable-next-line
                            volume == 0 && <i className='fa fa-volume-mute text-white' />}
                        {volume <= 50 && volume > 0 && <i className='fa fa-volume-down text-white' />} */}
                    </div>
                    <input
                        className='volum-range'
                        style={{ width: "80%" }}
                        type="range"
                        min={0} max={100}
                        // value={volume}
                        onInput={(e) => handleVolumeChange(e)} />
                </div>
                <div className='custom-player-controller-video-progress row m-0 justify-content-center align-self-center'>
                    <input
                        className='seek-range'
                        style={{ width: "90%" }}
                        type="range"
                        min={0}
                        max={totalDurationOfVideo}
                        onInput={(e) => handleSeekChange(e)}
                        value={currentSeek} />
                </div>
            </div>
        </>

    )
}
export default MediaPlayer;
