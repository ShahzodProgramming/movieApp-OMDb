import React from "react";

export const Result = ({ result, error, type }) => {
  const movies = (result.Search?.filter((e) => e.Type === "movie") || []);
  const series = result.Search?.filter((e) => e.Type === "series") || [];

  console.log(result);
  if (!result) {
    return <p className="text-center text-5xl">Search movies</p>;
  }
  if (error) {
    return (
      <p className="text-center text-5xl">Sorry there is an error: {error}</p>
    );
  }

  if (type === 2 && result) {
    return (
      <div className="flex flex-wrap mx-auto gap-10 max-w-5xl justify-center mt-10">
        {movies.map((e, i) => (
          <div
            className="border-2 w-1/3 max-w-md p-5 flex flex-col items-center "
            key={i}
          >
            <img src={e.Poster} className="max-w-[150px]" />
            <p className="text-2xl">{e.Title}</p>
            <div className="card__info flex gap-2">
              <p>{e.Year}</p>
              <p>{e.Type}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (type === 3 && result) {
    return (
      <div className="flex flex-wrap mx-auto gap-10 max-w-5xl justify-center mt-10">
        {series.map((e, i) => (
          <div
            className="border-2 w-1/3 max-w-md p-5 flex flex-col items-center"
            key={i}
          >
            <img src={e.Poster} className="max-w-[150px]" />
            <p className="text-2xl">{e.Title}</p>
            <div className="card__info flex gap-2">
              <p>{e.Year}</p>
              <p>{e.Type}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (result) {
    return (
      <div className="flex flex-wrap mx-auto gap-10 max-w-5xl justify-center mt-10">
        {result.Search?.map((e, i) => (
          <div
            className="border-2  w-[300px] max-w-3xs p-5 flex flex-col items-center"
            key={i}
          >
            <img src={e.Poster} className="max-w-[150px]" />
            <p className="text-2xl">{e.Title}</p>
            <div className="card__info flex gap-2">
              <p>{e.Year}</p>
              <p>{e.Type}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
