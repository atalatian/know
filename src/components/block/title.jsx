import React, {Component} from "react";
class Title extends Component{
    render() {
        return(
            <div className={ this.props.info.class }>
                <h1>{ this.props.info.text1 }</h1>
                <h1>{ this.props.info.text2 }</h1>
            </div>
        );
    }
}

export default Title;