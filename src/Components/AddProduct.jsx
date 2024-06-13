

import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/Product', productData)
      .then(response => {
        alert('Product Added Successfully');
        console.log(response.data);
        setProductData({
          image: '',
          title: '',
          price: '',
          category: '',
          description: ''
        });
      })
      .catch(err => console.log(err));
  };

  return (
    <Container className="add-product-container">
      <h2 className="text-center">Add Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Enter image URL" name="image" value={productData.image} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Product Title</Form.Label>
          <Form.Control type="text" placeholder="Enter product title" name="title" value={productData.title} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" placeholder="Enter product price" name="price" value={productData.price} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter product category" name="category" value={productData.category} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter product description" name="description" value={productData.description} onChange={handleChange} />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Addd Prouct
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
