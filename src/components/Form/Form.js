import React from 'react';
import {Component} from 'react';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = (event) => {this.setState({ value: event.target.value});};
        this.handleSubmit = () => {
            if (!this.state.value) {
                alert('The item is empty.');
                return;
            }

            this.props.onHandleCreateItem(this.state.value);
        };
    }

    render() {
        return (
            <form className="add" name="add" onSubmit={this.handleSubmit}>
                <input className="inputField" type="text" placeholder="Type name here ..."
                       onChange={this.handleChange}/>
                <input className="inputField" type="submit" value="Add new"/>
            </form>
        );
    }
}
