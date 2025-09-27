import React, { useEffect, useState } from "react";
import { Input } from "./components/input";
import { Result } from "./components/result";

const App = () => {
  const [result, setResult] = useState(false);
  const [input, setInput] = useState("hulk");

  const [error, setError] = useState(false);
  const [type, setType] = useState(1);

  const [query, setQuery] = useState("hulk");
  useEffect(() => {
    try {
      fetch(`http://www.omdbapi.com/?s=${input}&apikey=c7d9b509`)
        .then((res) => res.json())
        .then((res) => setResult(res));
      setError(false);
    } catch (err) {
      console.warn("Error occured" + err);
      setError(error);
    }
  }, [input, type]);

  function searchData() {
    setQuery(input);
  }
  return (
    <div>
      <Input input={input} setInput={setInput} setType={setType} searchData={searchData}/>
      <Result result={result} error={error} type={type} />
    </div>
  );
};

export default App;
