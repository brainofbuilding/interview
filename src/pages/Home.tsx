import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Component from "./Component";
import { sortByAlphabeticalOrder } from "./utils";

export default function Home() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos");
      let res = await data.json();
      res = sortByAlphabeticalOrder(res);
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <>
      <Typography variant="h1">TODO</Typography>
      <Component data={data} />
    </>
  );
}
