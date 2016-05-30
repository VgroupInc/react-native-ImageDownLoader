'use strict';

var React = require('react-native');

var {
    View,
    Image,
    Component,
    ActivityIndicatorIOS,
    StyleSheet
   } = React;

   import {
     IMAGE_URL
   } from './APIUtils';

class ImageDownLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      imageDownLoadError : false
    };
  }

  componentWillMount(){
    this.setState({
      isLoading: this.props.renderProcess
    });
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.imageURL != this.props.imageURL){
      this.setState({
        isLoading: nextProps.renderProcess
      });
    }
  }

  renderImage() {
    return (
      <Image style = {[this.props.imageStyle,{alignItems :'center'}]}
             defaultSource =  {(this.props.renderDefaultImage)?this.props.defaultImage : null}
             source= { (this.state.imageDownLoadError)?  ((this.props.renderFailedImage)?this.props.defaultImage:null) : {uri: IMAGE_URL + this.props.imageURL}}
             onLoad={this.imageLoadedSuccessfully.bind(this)}
             onError={this.imageDownLoadFailed.bind(this)}
             key = {this.props.imageURL}
             >
             <ActivityIndicatorIOS
               size="small"
               animating = {this.state.isLoading}
               hidesWhenStopped = {true}
               style = {{flex: 1}}
               color="white"
                />
      </Image>
    );
  }


  imageLoadedSuccessfully() {
    console.log('imageLoadedSuccessfully');
    this.setState({
    isLoading: false,
    });
 }

 imageDownLoadFailed() {
   console.log('imageDownLoadFailed');
   this.setState({
     isLoading: false,
     imageDownLoadError : true
 });


}

  render() {
    return (
      <View style = {{flex : 1}}>
      {this.renderImage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf : 'center'
  },
  background: {
    flex : 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },

});


ImageDownLoader.propTypes = {
  imageURL:  React.PropTypes.string.isRequired,
  imageStyle : React.PropTypes.any.isRequired,
  defaultImage : React.PropTypes.any,
  renderProcess : React.PropTypes.bool,
  renderDefaultImage : React.PropTypes.bool,
  renderFailedImage : React.PropTypes.bool
};

module.exports  = ImageDownLoader;
