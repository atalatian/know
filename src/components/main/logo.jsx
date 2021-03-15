import React, {Component} from "react";
import DelayLink from 'react-delay-link';

class Logo extends Component{
    state = {
        redirect: {redirect: false},
    }

    delayRedirect = ()=>{
        this.props.onClick();
    }

    render() {
        return(
            <div className="logo">
                <div className={ this.props.info.class }>
                    <img src={ this.props.info.url } alt={this.props.info.alt}/>
                </div>
                <div className="enter_button_div">
                    <DelayLink delay={700} to="/items">
                        <button onClick={ this.delayRedirect } type="button" className="enter btn btn-light m-2">Enter</button>
                    </DelayLink>
                </div>
            </div>
        );
    }
}

export default Logo;