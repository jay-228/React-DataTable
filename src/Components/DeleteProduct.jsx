
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table, Container, Image } from 'react-bootstrap';

const DeleteProduct = () => {
  const [deletedProducts, setDeletedProducts] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8000/Product/${id}`)
      .then((res) => {
        setDeletedProducts([res.data]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <Container>
      <h2 className="mt-4" >Deleted Products</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {deletedProducts.map((product, index) => (
            <tr key={index}>
              <td><Image src={product.image} alt={product.title} thumbnail width={100} /></td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DeleteProduct;



