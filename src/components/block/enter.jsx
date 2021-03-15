import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
class Enter extends Component{
    render() {
        return(
            <div className={ this.props.info.class }>
                <button onClick={this.props.onClick} type="button" className="btn btn-light m-2">
                    <FontAwesomeIcon icon={faAngleUp}/>
                </button>
            </div>
        );
    }
}

export default Enter;