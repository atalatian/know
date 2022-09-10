import React, {Component} from "react";

class Center extends Component{
    render() {
        return(
            <div className="center_image_div">
                <img src={ this.props.info.url } alt={ this.props.info.alt }/>
            </div>
        );
    }
}

export default Center;