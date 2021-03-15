import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import "./rotate.css";

class Rotate extends Component{
    render() {
        return(
            <div className="rotate">
                <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                <div className="detail"><p>Switch To Landscape</p></div>
            </div>
        );
    }
}

export default Rotate;