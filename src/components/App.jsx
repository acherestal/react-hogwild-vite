import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import FilterBar from "./FilterBar";
import HogForm from "./HogForm";
import hogsData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("");

  const filtered = hogs
    .filter(h => (showGreased ? h.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "weight") return a.weight - b.weight;
      return 0;
    });

  function addNewHog(newHog) {
    setHogs([...hogs, newHog]);
  }

  return (
    <div className="App">
      <Nav />
      <FilterBar
        showGreased={showGreased}
        setShowGreased={setShowGreased}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <HogForm addNewHog={addNewHog} />
      <HogList hogs={filtered} />
    </div>
  );
}

export default App;
