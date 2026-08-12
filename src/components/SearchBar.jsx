import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    
    dispatch(setQuery(text));
    e.preventDefault();
    setText("");
  };

  return (
    <div className="">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex bg-(--c1) p-10 gap-5"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          type="text"
          className=" border-2 px-4 py-2 text-xl rounded w-full outline-none"
          placeholder="Search anything..."
        />
        <button className="border-2 px-4 py-2 text-xl rounded outline-none active:scale-95 cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
