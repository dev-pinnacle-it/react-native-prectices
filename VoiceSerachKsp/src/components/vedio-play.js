
/*Example of React Native Video*/
import React, { Component } from 'react';
//Import React
import { Platform, Dimensions,StyleSheet, Text, View } from 'react-native';
//Import Basic React Native Component
import Video ,{ TextTrackType }from 'react-native-video';
//Import React Native Video to play video

export default class VedioPlay extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      screenType: 'content',
    };
  }

  onSeek = seek => {
    //Handler for change in seekbar
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    //Handler for Video Pause
    this.setState({
      paused: !this.state.paused,
     
    });
  };

  onReplay = () => {
    //Handler for Replay
    // this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    // Video Player will continue progress even if the video already ended
    // if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
    //   this.setState({ currentTime: data.currentTime });
    // }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };
  renderToolbar = () => (
    <View>
      <Text> toolbar </Text>
    </View>
  );
  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    return (
      <View style={styles.container}>
        <Video
       //disableFocus={true}
          //onEnd={this.onEnd}
          selectedAudioTrack={{
  type: "title",
  value: "Dubbing"
}}
          fullscreen={true}
          hideShutterView={true}
          repeat={true}
          posterResizeMode='center'
          pictureInPicture={true}
          onLoad={this.onLoad}
          //paused={true}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          //paused={this.state.paused}
          controls={true}
           onBuffer={this.onBuffer} 
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          //resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{ uri: 'http://techslides.com/demos/sample-videos/small.mp4' }}
          style={styles.mediaPlayer}
          volume={10}
          maxBitRate={2000000} 
          resizeMode='stretch'
          title='kajal'
          volume={10}
          selectedTextTrack={{
  type: "title",
  value: "English Subtitles"
}}

        />

        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    width:Dimensions.get('window').width,
    height:200,
    borderWidth:2,
    right:10,
    //position: 'absolute',
    padding:10,
    marginLeft:20,
    right:20,
    
  },
});
