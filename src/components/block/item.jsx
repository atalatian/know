import React, {Component} from "react";
class Item extends Component{
    render() {
        return(
            <button key={this.props.info.id} onClick={ ()=> this.props.onClick(this.props.info) } type="button" className="btn btn-light m-2">
                { this.props.info.food_name }
            </button>
        );
    }
}

export default Item;