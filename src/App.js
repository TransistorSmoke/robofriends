import './App.css';
import { Component } from 'react';
import CardList from './components/CardLIst';
import SearchBox from './components/SearchBox';
import ScrollBox from './components/Scrollbox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({robots: users}))
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value})
  }

  render() {
    const { robots, searchField } = this.state;
    const searchedRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField))
    const additionalRobots = [...searchedRobots];
    const newerRobots = searchedRobots.concat(additionalRobots)

    console.log(newerRobots)
    return !robots.length ? <h1>Loading robots</h1> :
    (
        <div className="tc">
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <ScrollBox>
            <CardList robots={newerRobots}/>
          </ScrollBox>
        </div>
    )
  }

}

export default App;
