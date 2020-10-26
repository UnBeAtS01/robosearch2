import React, { Component } from 'react';
import CardList from './Cardlist';
//import { robots } from './robo';
import SearchBox from './SearchBox';
import Scroll from './scroll.js';
import './App.css';
/*const App = () => {
    return (
        <div className="tc">
            <h1>RoboSearch</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>


    )
}*/
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(Response => {
                return Response.json();
            })
            .then(user => {
                this.setState({ robots: user });
            })

    }
    onsearchchange = (event) => {
        this.setState({ searchfield: event.target.value });//setting value to searchfield

        //console.log(filterrobots);
    }
    render() {
        const filterrobots = this.state.robots.filter(s => {
            return s.name.toLowerCase().includes(this.state.searchfield.toLowerCase());///filtering on basis of searchfield for props of child:)
        })
        return (
            <div className="tc">
                <h1>RoboSearch</h1>
                <SearchBox searchchange={this.onsearchchange} />
                <Scroll>
                    <CardList robots={filterrobots} />
                </Scroll>

            </div>
        );
    }
};
export default App;