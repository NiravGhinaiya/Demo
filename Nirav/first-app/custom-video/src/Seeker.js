import React from "react";

const convertTimeFormat = totalSeconds => {
  const sec_num = parseInt(totalSeconds, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  let seconds = sec_num - (hours * 3600) - (minutes * 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  return `${minutes}:${seconds}`;
};

const percent = (current, total) => (current / total) * 100;

class Seeker extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        scale: 0,
        duration: this.props.duration,
        mousePosition: 0
      }
    }
  
    onClick(e) {
      this.props.onSeek(percent(e.nativeEvent.layerX, e.currentTarget.offsetWidth));
    }
  
    onMouseMove(e) {
      const percentTime = percent(e.nativeEvent.layerX, e.currentTarget.offsetWidth);
      const seconds = (percentTime * this.props.duration) / 100;
  
      this.setState({ display: true, time: convertTimeFormat(seconds), mousePosition: e.nativeEvent.layerX, scale: (e.nativeEvent.layerX / e.currentTarget.offsetWidth) });
    }
  
    onMouseLeave() {
      this.setState({ scale: 0, display: false });
    }
  
    render() {
      return (
        <div className='seeker' onClick={this.onClick.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} onMouseMove={this.onMouseMove.bind(this)}>
          <div className='seeker-line bg'/>
          <div className='seeker-line mover' style={{transform: `scaleX(${this.state.scale})`}}/>
          <div className='seeker-line current' style={{transform: `scaleX(${this.props.currentPositionPercentual / 100})`}} />
        </div>
      );
    }
  }
  
export default Seeker