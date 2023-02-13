import "./App.css";
import { useState, useEffect } from "react";
import Count from "./Count";

function App() {
  const [count, setCount] = useState(100);
  const [dataInput, setDataInput] = useState({
    name: "",
    age: "",
  });
  const [list, setList] = useState();
  const [status, setStatus] = useState(true);

  const incre = (data) => {
    setCount((preCount) => preCount + data);
  };
  const decre = (data) => {
    setCount((preCount) => preCount - data);
  };

  // useEffect(() => {
  //   console.log("runnnn");
  //   fetch("https://61015a754e50960017c29da2.mockapi.io/listProducts")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setList(data);
  //     });
  // }, []);

  useEffect(() => {
    async function getData() {
      try {
        let res = await fetch(
          "https://61015a754e50960017c29da2.mockapi.io/listProducts"
        );
        let data = await res.json();
        setList(data);
      } catch (error) {
        throw new Error(error);
      }
    }
    getData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(dataInput);
  };

  // const handleChange = (e) => {
  //   setDataInput({
  //     ...dataInput,
  //     name: e.target.value,
  //     age: e.target.value,
  //   });
  // };

  return (
    <div className="App">
      <p>{count}</p>
      <Count incre={incre} decre={decre} />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={dataInput.name}
          onChange={(e) => setDataInput({ ...dataInput, name: e.target.value })}
        />
        <input
          type="text"
          value={dataInput.age}
          onChange={(e) => setDataInput({ ...dataInput, age: e.target.value })}
        />
        <input type="submit" />
      </form>
      {/* <div>
        {list.map((item) => {
          return <p key={item.id}>{item.nameProduct}</p>;
        })}
      </div> */}
      <button onClick={() => setStatus((pre) => !pre)}>un mound</button>
    </div>
  );
}

export default App;
