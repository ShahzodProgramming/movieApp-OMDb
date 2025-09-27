import React from "react";

export const Input = ({ input, setInput, setType, searchData }) => {
  return (
    <div className="mx-auto flex flex-col items-center">
      <input
        type="text"
        placeholder="Search movies"
        className="bg-gray-100 border-3 border-black w-50 h-10 mb-10"
        value={input}
        onChange={(e) => {
          setInput(e.target.value.toLowerCase());
        }}
      />

      <div className="flex gap-10 items-center">
        <div className="flex gap-2">
          <label htmlFor="radio1">All</label>
          <input type="radio" id="radio1" name="radio" checked={tyoe === 'all'} onClick={() => setType(1)}/>
        </div>
        <div className="flex gap-2">
          <label htmlFor="radio2">Movies</label>
          <input type="radio" id="radio2" name="radio" checked={tyoe === 'movie'} onClick={() => setType(2)}/>
        </div>
        <div className="flex gap-2">
          <label htmlFor="radio3">Series</label>
          <input type="radio" id="radio3" name="radio" checked={tyoe === 'series'} onClick={() => setType(3)}/>
        </div>
      </div>
    </div>
  );
};
