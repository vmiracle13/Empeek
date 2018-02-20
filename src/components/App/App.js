import React, {Component} from 'react';
import './App.css';
import Form from './../Form/Form';
import Item from './../Item/Item';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('itemList')) ? {items: JSON.parse(localStorage.getItem('itemList'))} : { items: []};
        this.handleCreateItem = this.handleCreateItem.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleCreateItem(item) {
        this.setState({items: this.state.items.push(item)});
        this.saveIntoLocalStorage(this.state.items);
    }

    saveIntoLocalStorage(array) {
        localStorage.setItem( 'itemList', JSON.stringify(array) );
    }

    handleDeleteItem(item) {
        if ( this.state.items.indexOf(item) !== -1 ) {
            let a = this.state.items.slice();
            a.splice(a.indexOf(item), 1);

            console.log(a);

            this.setState = {items: a};
            this.saveIntoLocalStorage(a);
        } else {
            alert('Please, re-check the data');
        }
    }

    render() {
        return (
            <div className="app">
                <Form onHandleCreateItem={this.handleCreateItem} />

                {this.state.items.length > 0 &&
                    <div>
                    <ul className="list">
                        {this.state.items.map((item, i) => {
                            return (
                                <li key={item}>
                                    <Item item={item} onHandleDelete={this.handleDeleteItem}/>
                                </li>
                            );
                        })
                        }
                    </ul>
                    </div>
                }
            </div>
        );
    }
}

