import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
export default function BookTable() {
  
  //let [posts, setPosts] = useState([]);
  // criar state que vai conter a lista da api
  let [comments, setComments] = useState([]);

  //criar o objeto colunas no qual o datafield é a propriedade do objeto

  const columns = [
    {
      dataField: 'id',
      text: 'Id',
    },
    {
      dataField: 'name',
      text: 'Nome',
    },
    {
      dataField: 'email',
      text: 'E-mail',
    },
    {
      dataField: 'body',
      text: 'Texto',
    },
  ];
  const getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((response) => response.json())
      .then((data) => {
        //console.log("posts", data);
        setComments(data);
      });
  };

  useEffect(() => {
    getComments();
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
      <BootstrapTable keyField='id' data={comments} columns={columns} pagination={ paginationFactory() } />
      
      
    </div>
  );
}
