import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Desc() {
  const [desc, setDesc] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch("https://fakestoreapiserver.reactbd.com/amazonproducts" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDesc([data]);
      });
  }, [params.id]);
  return (
    <>
      <div>
        <label>{desc?.title}</label>
      </div>
    </>
  );
}
