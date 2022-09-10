import React, {Component} from "react";

class Footer extends Component{
    render() {
        return(
            <div className="footer_image_div">
                <a href="#"><img src={this.props.info.img1.url} alt={this.props.info.img1.alt}/></a>
                <a href="#"><img src={this.props.info.img2.url} alt={this.props.info.img1.alt}/></a>
                <a href="#"><img src={this.props.info.img3.url} alt={this.props.info.img1.alt}/></a>
            </div>
        );
    }
}

export default Footer;