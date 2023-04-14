import React from 'react';
import Slider from 'react-slider-simple';
import './videostyle.css';
import videoTesting from '../../assate/image/videoTesting.mp4'
import playIcon from "../../assate/image/pushIcon.png";
import pauseIcon from "../../assate/image/pauseIcon.png";

class VideoSmoth extends React.Component {

    // const vidbuttonW = useRef();

    state = {
        progressBarWidth: 0,
        inputValue: 0,
        playPushe: false
    }

    toggle = () => {
        if (this.video.paused) {
            this.video.play();
            this.setState({ playPushe: true })
        } else {
            this.video.pause();
            this.setState({ playPushe: false })
        }
    }

    onPlay = () => {
        const { currentTime, duration } = this.video;

        this.videoDuration = duration;
        this.animationStartTime = Date.now();
        this.videoStartTime = currentTime;

        this.updateProgressBar();
    }

    onPause = () => {
        cancelAnimationFrame(this.animationId);
    }

    updateProgressBar = () => {
        const elapsedTime = (Date.now() - this.animationStartTime) / 1000;
        const currentTime = elapsedTime + this.videoStartTime;

        if (currentTime <= this.videoDuration) {
            const inputsdgfj = 100 * (currentTime / this.videoDuration);
            this.setState({ inputValue: inputsdgfj })
            this.animationId = requestAnimationFrame(this.updateProgressBar);

            // console.log('inputsdgfj', inputsdgfj)
        }
    }

    handleChange = (e) => {
        console.log('sdfjdgf', e)
        this.setState({ inputValue: (e / this.videoDuration) * 100 })
    }

    heandlerChangeValue = (e) => {
        console.log(e)
    }


    render() {
        return (
            <div className="VideoPlayer">
                <div className='videoContainer'>
                    <video
                        ref={(ref) => { this.video = ref; }}
                        src={videoTesting}
                        onClick={this.toggle}
                        onPlay={this.onPlay}
                        onPause={this.onPause}
                        controls={false}
                        className='videoTag'
                    />
                    <button className='btnplay' onClick={this.toggle}>
                        {this.state.playPushe ? (
                            <img src={pauseIcon} alt={'Icon'} />
                        ) : (
                            <img src={playIcon} alt={'Icon'} />
                        )}
                    </button>
                </div>
                <div className="progress-bar-wrapper">
                    {/* <progress value={20} ref={(ref) => { this.progressBar = ref; }} className="progress-bar" onChange={this.heandlerChangeValue} /> */}
                </div>
                <div className='sekbarvideo'>
                    <Slider value={this.state.inputValue} min='0' max='100' onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}
export default VideoSmoth