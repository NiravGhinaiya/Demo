import React from "react";
import PlayPause from "./PlayPause";
import Seeker from "./Seeker";

const convertTimeFormat = totalSeconds => {
    const sec_num = parseInt(totalSeconds, 10);
    let hours = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  };

  const percent = (current, total) => (current / total) * 100;

class Video extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        duration: 0,
        currentTime: convertTimeFormat(0),
        currentPositionPercentual: 0,
        playing: false,
        width: 0
      };
  
      this.onTimeUpdate = this.onTimeUpdate.bind(this);
      this.onLoadMetadata = this.onLoadMetadata.bind(this);
      this.onSeeked = this.onSeeked.bind(this);
      this.onResize = this.onResize.bind(this);
    }
  
    componentDidMount() {
      this.video.controls = false;
      this.video.addEventListener('timeupdate', this.onTimeUpdate);
      this.video.addEventListener('loadedmetadata', this.onLoadMetadata);
      this.video.addEventListener('seeked', this.onSeeked);
      window.addEventListener('resize', this.onResize);
    }
    
    componentWillUnmount() {
      this.video.removeEventListener('timeupdate', this.onTimeUpdate);
      this.video.removeEventListener('loadedmetadata', this.onLoadMetadata);
    }
  
    onResize() {
      this.setState({ width: document.querySelector('.seeker').offsetWidth });
    }
  
    onLoadMetadata() {
      this.setState({ duration: convertTimeFormat(this.video.duration) });
    }
  
    onTimeUpdate() {
      this.setState({
        currentTime: convertTimeFormat(this.video.currentTime),
        currentPositionPercentual: percent(this.video.currentTime, this.video.duration)
      });
  
      if (this.video.ended) {
        this.setState({
          playing: false,
          currentTime: convertTimeFormat(0),
          currentPositionPercentual: 0
        });
        this.video.load();
      }
    }
  
    onSeeked() {
      const interval = setTimeout(() => {
        this.setState({ playing: true });
        this.video.play();
        clearTimeout(interval);
      }, 300);
    }
  
    seek(percent) {
      this.setState({ playing: false });
      this.video.pause();
  
  
      const interval = setTimeout(() => {
        this.video.currentTime = (percent * this.video.duration) / 100;
        clearTimeout(interval);
      }, 100);
  
    }
  
    onPlayPauseClick(playing) {
      this.setState({ playing: playing });
  
      if (this.state.playing) {
        this.video.pause();
      } else {
        this.video.play();
      }
    }
  
    toggleFullScreen() {
      if (this.video.requestFullScreen){
        this.video.requestFullScreen();
      } else if (this.video.webkitRequestFullScreen){
        this.video.webkitRequestFullScreen();
      } else if (this.video.mozRequestFullScreen){
        this.video.mozRequestFullScreen();
      }
    }
  
    render() {
      const { playing, currentTime, duration, width, currentPositionPercentual } = this.state;
      const { bgImage, source } = this.props;
      return (
        <div className='player'>
          <div className='video-container' style={{backgroundImage: `url(${bgImage})`}}>
            <video className='video' poster={bgImage} ref={video => this.video = video}>
              <source src={source} type='video/mp4' />
            </video>
            <PlayPause onClick={this.onPlayPauseClick.bind(this)} playing={playing} />
          </div>
          <p className='time-current'>{currentTime}</p>
          <p className='time-duration'>{duration}</p>
          <Seeker onSeek={this.seek.bind(this)} duration={duration} width={width} currentPositionPercentual={currentPositionPercentual} />
          <p className='toggle-full-screen' onClick={this.toggleFullScreen.bind(this)}>[ &nbsp;]</p>
        </div>
      );
    }
  }

  export default Video