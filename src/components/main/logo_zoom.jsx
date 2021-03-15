import React, {Component} from "react";

class LogoZoom extends Component{
    render() {
        return(
            <div className={ this.props.info.class }>
                <img src={ this.props.info.url } alt={this.props.info.alt}/>
            </div>
        );
    }
}

export default LogoZoom;