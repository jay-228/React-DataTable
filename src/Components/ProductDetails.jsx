
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { Button, Container, Card } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/Product/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  //*****************************for delete item************************************/
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/Product/${id}`)
      .then(() => {
        alert("Product deleted successfully!");
        console.log(product);
      })
      .catch((error) => console.error("Error deleting product:", error));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="product-details-container">
      <h2 className="text-center">Product Details</h2>
      <Card className="product-details-card">
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Img variant="top" src={product.image} alt={product.title} className="product-image" />
          <Card.Text>Price: ${product.price}</Card.Text>
          <Card.Text>Category: {product.category}</Card.Text>
          <Card.Text>{product.description}</Card.Text>
          <div className="button-group">
            <Link to={`/Editproduct/${product.id}`} className="btn btn-edit">Edit</Link>
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProductDetails;
