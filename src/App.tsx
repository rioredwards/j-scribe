import { useEffect, useState, useRef } from "react";
import "./App.css";
import * as esbuild from "esbuild-wasm";

function App() {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
    startService();
  }, []);

  const onClick = async () => {
    if (!ref.current) return;

    const result = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });
    console.log("result: ", result);
    setCode(result.code);
  };

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  return (
    <div className="App">
      <textarea value={input} onChange={(e) => setInput(e.target.value)}>
        {input}
      </textarea>
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
}

export default App;
