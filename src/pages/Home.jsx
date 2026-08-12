import React from "react";
import SearchBar from "../components/SearchBar";
import SearchTabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";

import Tabs from "../components/Tabs";
import { useSelector } from "react-redux";
const Home = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
     
      <SearchBar />
      {query != "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        ""
      )}
      
    </div>
  );
};

export default Home;
