import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Desc() {
  const [desc, setDesc] = useState({});
  const params = useParams();

  console.log("Checking");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/" + params.id)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setDesc(data);
      });
  }, [params.title]);
  return (
    <>
      <div>
        <label>{desc?.title}</label>
        <img src={desc?.image} />
      </div>
    </>
  );
}
