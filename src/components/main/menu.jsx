import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignJustify } from '@fortawesome/free-solid-svg-icons';

class MenuButton extends Component{
    render() {
        return(
            <div className="menu_button_div">
                <button onClick={this.props.onClick} type="button" className="btn btn-light m-2">
                    <FontAwesomeIcon icon={faAlignJustify}/>
                </button>
            </div>
        );
    }
}

export default MenuButton;