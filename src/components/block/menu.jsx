import React, {Component} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
class Menu extends Component{
    renderMain(){
        if (this.props.render.main){
            return(
                <div className="main">
                    <a href="#">
                        <div className="price"><h3 className="m-0 p-2">{ this.props.info.price }</h3></div>
                        <div className="icon"><h5 className="m-0 p-2"><FontAwesomeIcon icon={faShoppingCart}/></h5></div>
                    </a>
                </div>
            );
        }
    }

    renderOptions(){
        if (this.props.info.options){
            return(
                <React.Fragment>
                    <div className={ this.props.classes.class1 }>
                        {
                            this.props.info.options.map(opt =>{
                                return(
                                    <a className="m-2" href="#">
                                        <div className="title"><h4 className="m-0 p-2">{ opt.title }</h4></div>
                                        <div className="price"><h3 className="m-0 p-2">{ opt.price }</h3></div>
                                        <div className="icon"><h5 className="m-0 p-2"><FontAwesomeIcon icon={faShoppingCart}/></h5></div>
                                    </a>
                                );
                            })
                        }
                    </div>
                    { this.renderMain() }
                </React.Fragment>
            );
        }
    }

    renderDescription(){
        if (this.props.info.description){
            return(
                <div className="description p-1">
                    <p>{ this.props.info.description }</p>
                </div>
            );
        }
    }


    render() {
        return(
            <div className={ this.props.info.class }>
                <div className="title_image">
                    <div className="top_image">
                        <img loading="lazy" src={ this.props.info.image_url } alt={ this.props.info.image_alt }/>
                        { this.renderDescription() }
                    </div>
                    <div className="detail">
                        <div className="section">
                            { this.renderOptions() }
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <button onClick={ () =>this.props.onClick() } type="button" className="btn btn-light m-2">
                        <FontAwesomeIcon icon={faTimes}/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Menu;