import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  // constructor
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchString: "",
    };
  }

  // on Mount
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // function to search
  onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchString };
    });
  };

  // render a component
  render() {
    // destructuring for a convinience
    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    // filtered based on a search box
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchString);
    });

    return (
      <div className="App">
        <h1>Monster App</h1>
        <SearchBox
          className="search-box-monster"
          placeholder="Search"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
