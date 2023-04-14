import React, { Component } from 'react'
// import Duration from './Duration/index'

import ReactPlayer from 'react-player'
// import speacker_on from "../../../../assets/images/speacker_on.svg";
// import speacker_off from "../../../../assets/images/speacker_off.svg";
// import pause_btn from "../../../../assets/images/pause_btn_icon.svg";
// import play_btn from "../../../../assets/images/play_btn_icon.svg";



class CourseReactPlayer extends Component {
    state = {
        pip: false,
        controls: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
    };

    componentDidMount() {
        if (this?.props?.typeVideo === "vimeo" || this?.props?.typeVideo === "youtube") {
            this.setState({...this.state, controls: true});
        } else {
            this.setState({...this.state, controls: false});
        }
    };

    componentWillReceiveProps(nextProps) {
        console.log("url", nextProps?.url);
        this?.props?.url !== nextProps?.url && this?.props?.setUrl(nextProps?.url)
    }


    handlePlayPause = () => {
        this?.props?.setPlaying(!this?.props?.playing)
    }

    handleVolumeChange = e => {
        this.setState({ volume: parseFloat(e.target.value) })
        e.target.value === '0' ? this.setState({ muted: true }) : this.setState({ muted: false });

    }

    handleToggleMuted = () => {
        this.setState({ muted: !this.state.muted })
        !this.state.muted ? this.setState({ volume: parseFloat(0) }) : this.setState({ volume: parseFloat(1) });
    }

    handleSeekMouseDown = e => {
        this.setState({ seeking: true })
    }

    handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    }

    handleSeekMouseUp = e => {
        this.setState({ seeking: false })
        this.player.seekTo(parseFloat(e.target.value))
    }

    handleProgress = state => {
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    handleEnded = () => {
        this?.props?.setPlaying(!this?.props?.playing)
    }

    handleDuration = (duration) => {
        this.setState({ duration })
    }

    ref = (player) => {
        this.player = player
    }

    render() {
        const { controls, volume, muted, played, duration } = this.state;
        return (
            <div className='app'>
                <section className='section'>
                    <div className='player-wrapper'>
                        <ReactPlayer
                            ref={this.ref}
                            className='react-player'
                            width='100%'
                            height='100%'
                            url={this?.props?.url}
                            playing={this?.props?.playing}
                            controls={controls}
                            volume={volume}
                            muted={muted}
                            onSeek={e => console.log('onSeek', e)}
                            onProgress={this.handleProgress}
                            onDuration={this.handleDuration}
                            onEnded={this.handleEnded}
                            config={{
                                youtube: {
                                  playerVars: { controls: 1 }
                                },
                              }}
                        />
                      { (!(this?.props?.typeVideo === "vimeo" || this?.props?.typeVideo === "youtube")) && <div className="play_video">
                            <div className="d-flex-center pause cursor_pointer"><img src={!this?.props?.playing ? 'play_btn' : 'pause_btn'} alt="pause_icon" onClick={() => this?.props?.setPlaying(!this?.props?.playing)} /></div>
                            <div className="play_progress">
                                <div className="progressbar cursor_pointer">
                                    <input
                                        type='range' min={0} max={0.999999} step='any'
                                        value={played}
                                        onMouseDown={this.handleSeekMouseDown}
                                        onChange={this.handleSeekChange}
                                        onMouseUp={this.handleSeekMouseUp}
                                    />
                                </div>
                                {/* <span><Duration seconds={duration * played} /> / <Duration seconds={duration} /></span> */}
                            </div>

                            <div className="volume_up_down d-flex-center cursor_pointer position-relative"><img src={muted ? 'speacker_off' : 'speacker_on'} alt="pause_icon" onClick={this.handleToggleMuted} />
                                {/* <div className="volume position-relative"><span></span></div> */}
                                <input type='range' min={0} max={0.999999} step='any' style={{ borderRadius }} className="volum_btn" value={volume} onChange={this.handleVolumeChange} />
                            </div>
                        </div>}
                    </div>

                </section>
            </div>
        )
    }
}

export default CourseReactPlayer
