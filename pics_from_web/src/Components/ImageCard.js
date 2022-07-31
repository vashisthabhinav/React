import React from "react";

class ImageCard extends React.Component{
    constructor(props){
        super(props);

        this.imageRef = React.createRef();

        this.state = {spans:0};
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);//setSpans is a callback
        // Anytime an image is successfully uploaded and displayed on the screen, it emits this load event.
        // Once it emits this load event, that means that we now have successfully downloaded the image and we can get the actual height of the image.
        
    }
    
    setSpans = () => {
        // console.log(this.imageRef.current.clientHeight);

        const height = this.imageRef.current.clientHeight;
    
        const spans = Math.ceil(height / 10);
    
        this.setState({ spans });
      };

    render() {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
export default ImageCard; 