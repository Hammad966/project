import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedtoast } from "../redux/features/collectionSlice";

const ResultCard = ({item}) => {
  const dispatch = useDispatch()
  const addToCollection = (item) => {
    dispatch(addCollection(item))
    dispatch(addedtoast())
  }
  return (
    <div className="w-[22vw] relative h-80 bg-white rounded-xl overflow-hidden">
      <a href={item.url} className="h-full" target="_blank">
        {item.type == "photo" ? <img src={item.src} className="h-full w-full object-cover object-center" alt="" /> : ""}
        {item.type == "video" ? (
          <video src={item.src} className="h-full w-full object-cover object-center" autoPlay loop muted></video>
        ) : (
          ""
        )}
      </a>
      <div id="bottom" className="text-white h-[35%] w-full px-4 py-6 absolute gap-3 bottom-0 flex justify-between items-center">
       <h2 className="text-sm font-semibold capitalize h-14">{item.title}</h2> 
       <button onClick={() => 
        addToCollection(item)
       } className="bg-indigo-600 text-white rounded px-3 py-2 font-medium cursor-pointer active:scale-95">Save</button>
       </div>
    </div>
  );
};

export default ResultCard;
