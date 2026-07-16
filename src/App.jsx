import React from "react";
import SearchBar from "./components/SearchBar";
import SearchTabs from './components/Tabs'
import ResultGrid from "./components/ResultGrid";

const App = () => {
 
  return (
    <div className="min-h-screen w-full text-white bg-gray-950">
     <SearchBar/>
     <SearchTabs/>
     <ResultGrid/>
    </div>
  );
};

export default App;
