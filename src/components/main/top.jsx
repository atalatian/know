import React, {Component} from "react";

class Top extends Component{
    render() {
        return(
            <div className="top_image_div">
                <img src={this.props.info.url} alt={this.props.info.alt}/>
            </div>
        );
    }
}

export default Top;