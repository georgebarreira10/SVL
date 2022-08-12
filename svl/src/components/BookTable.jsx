import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";

export default function BookTable() {
  let [posts, setPosts] = useState([]);

  const columns = [
    {
      dataField: "id",
      text: "Id",
    },
    {
      dataField: "body",
      text: "Texto",
    },
    {
      dataField: "id",
      text: "Id",
    },
  ];
  const getPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        //console.log("posts", data);
        setPosts(data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  /* const columns = [
    {
      dataField: "id",
      text: "Product ID",
    },
    {
      dataField: "name",
      text: "Product Name",
    },
    {
      dataField: "price",
      text: "Product Price",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Livro1",
      price: "100"
    },{
      id: 2,
      name: "Livro2",
      price: "200"

    }
  ]; */

  return (
    <div>
      <BootstrapTable keyField="id" data={posts} columns={columns} />
    </div>
  );
}
