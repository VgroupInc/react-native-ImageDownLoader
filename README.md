# REACT NATIVE ImageDownloader

 [React Native ImageDownloader](https://github.com/TroyVGroup/react-native-ImageDownLoader) is a component to Support Animation process view for networked images.

## Installation

```bash
$ npm install react-native-imagedownloader --save
```

## Features

  - download the Networked image 
  - show process view or default Image while Downloading the images
 
## Usage

Available props:

* `imageURL` — Required property. set the networked URL to download the image from the remote. 
* `imageStyle` — Required property. set the image view style to add the image view in the parent view.
* `defaultImage` — set the default image while the image downloading is progress.
* `renderProcess` — set Yes if you want to render the process view while downloading the image. Default is No.
* `renderDefaultImage` — set Yes it you want to render the default image while image is downloading. `defaultImage` should be set if use this property. Default is No. 
* `renderFailedImage` — set Yes it you want to render the default image when image downlaods failed . `defaultImage` should be set if use this property.Default is No. 


```javascript
var React = require('react-native');
var ImageDownLoader = require('./ImageDownLoader');

var styles = StyleSheet.create({

thumbnail: {
    width: any, 
    height: any
  }
  });
  
React.createClass({
  render: function () {
      <ImageDownLoader
                    renderProcess = {false}
                    defaultImage = {require('image!imageIcon')}
                    imageStyle = {styles.thumbnail}
                    imageURL = {imageURL}
                    renderDefaultImage = {true}
                    renderFailedImage = {false}
                    />
  }
});
```



## Authors

  * VGroup Inc
  * mobility.vgroupinc.com
