import { Component } from "react";
import './search-box.styles.css';

class SearchBox extends Component {
    
    render() {
      return (
        <div>
          <input
          className={`search-box ${this.props.className}`}
          type="search"
          placeholder="search monsters"
          onChange={this.props.onChange}
        />
        </div>
      )
    }
}

export default SearchBox;