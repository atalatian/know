import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';

class Back extends Component{
    render() {
        return(
            <div className="back_button_div">
                <button onClick={ ()=> this.props.onClick() } className="btn btn-light m-2">
                    <FontAwesomeIcon icon={faArrowCircleLeft}/>
                </button>
            </div>
        );
    }
}

export default Back;