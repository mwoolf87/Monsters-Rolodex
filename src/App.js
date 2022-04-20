import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState(""); //value, setValue
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilterRobots] = useState(robots);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setRobots(users));
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Robodex</h1>
      <SearchBox
        className="robots-search-box"
        placeholder="search robots"
        onChangeHandler={onSearchChange}
      />
      <CardList robots={filteredRobots} />
    </div>
  );
};

export default App;
