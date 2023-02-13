import React, { useState, useEffect } from "react";

export default function Count({ incre, decre }) {
  const [data, setData] = useState();

  // useEffect({} => {

  // }, [])

  return (
    <div>
      <button onClick={() => incre(1)}>Tang</button>
      <button onClick={() => decre(1)}>Giam</button>
    </div>
  );
}
