import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

class Back extends Component{
    render() {
        return(
            <div className="back_button_div">
                <Link to="/">
                    <button className="btn btn-light m-2">
                        <FontAwesomeIcon icon={faArrowCircleLeft}/>
                    </button>
                </Link>
            </div>
        );
    }
}

export default Back;