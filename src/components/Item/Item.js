import React from 'react';
import {Component} from 'react';

export default class Item extends Component {
    constructor(props){
        super(props);
        this.handleDelete = () => {this.props.onHandleDelete(this.props.item);};
    }

    render() {
        return (
            <div className="item">
                <p className="item-name">{this.props.item}</p>
                <button type="button" className="delete-btn" onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }

}