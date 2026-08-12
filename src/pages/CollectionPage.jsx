import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCollection } from "../redux/features/collectionSlice";
import CollectionCard from "../components/CollectionCard";
const CollectionPage = () => {
  const dispatch = useDispatch();
  const clearAll = () => {
    dispatch(clearCollection());
  };
  const collection = useSelector((state) => state.collection.items);
  return (
    <div className=" overflow-auto px-10  py-6">
      {collection.length > 0 ? (
        <div className="flex justify-between mb-6">
          <h2 className="text-3xl font-medium">Your Collection</h2>
          <button
            onClick={() => clearAll()}
            className="bg-red-600 px-8 py-3 text-lg font-medium rounded transition cursor-pointer "
          >
            Clear Collection
          </button>
        </div>
      ) : (
        <h2 className="text-2xl font-medium">Collection is empty</h2>
      )}
      <div className="flex  flex-wrap gap-5 justify-start w-full">
        {collection.map((item, idx) => {
          return <div key={idx}>{<CollectionCard item={item} />}</div>;
        })}
      </div>
    </div>
  );
};

export default CollectionPage;
