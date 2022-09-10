import React, {Component} from "react";
import * as ReactBootstrap from 'react-bootstrap';
class Item extends Component{
    render() {
        return(
            <div className={ this.props.info.class }>
                <ReactBootstrap.Card bg={ this.props.info.color }>
                    <div className="c-card-image">
                        <ReactBootstrap.Card.Img loading="lazy" variant="top" src={ this.props.info.image } />
                    </div>
                    <ReactBootstrap.Card.Body>
                        <ReactBootstrap.Card.Title><a onClick={ ()=> this.props.onClick(this.props.info) }
                                                      href="#/items"
                                                      className="stretched-link">{this.props.info.name}</a></ReactBootstrap.Card.Title>
                    </ReactBootstrap.Card.Body>
                </ReactBootstrap.Card>
            </div>
        );
    }
}

export default Item;