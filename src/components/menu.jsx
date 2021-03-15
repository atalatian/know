import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAlignLeft} from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import footer from "../test/arm.png";
import {Link} from "react-router-dom";

class Menu extends Component{
    render() {
        return(
            <div className={this.props.info.class}>
                <div className="console">
                    <h3>Menu</h3>
                    <button onClick={ this.props.onClick } type="button" className="btn btn-light">
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
                <ul>
                    <li>
                        <Link to="/">
                            <a href="#"><FontAwesomeIcon icon={faAlignLeft}/> Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link to="/items">
                            <a href="#"><FontAwesomeIcon icon={faAlignLeft}/> Food Menu</a>
                        </Link>
                    </li>
                </ul>
                <div className="footer">
                    <img src={ footer } alt="footer"/>
                </div>
            </div>
        );
    }
}

export default Menu;