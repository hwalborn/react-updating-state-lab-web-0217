import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
    this.newBitrate = this.newBitrate.bind(this)
    this.newResolution = this.newResolution.bind(this)
  }

  newBitrate() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12,
      })
    })
  }

  newResolution() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p',
        })
      })
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.newBitrate}></button>
        <button className="resolution" onClick={this.newResolution}></button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
