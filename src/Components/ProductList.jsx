
import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Form, Row, Col, Card,  } from 'react-bootstrap';

export const ProductList = () => {
  const [products, setProducts] = useState([]); // product set in state.
  const [page, setpage] = useState(1); // for use pagination.
  const [filter, setfilter] = useState(null); // filtering products.
  const [sort, setsort] = useState(""); // Sorting product.
  const [search, setsearch] = useState(""); // Search products.

  //************Item Get part using Axios.get method**********************/

  useEffect(() => {
    axios.get("http://localhost:8000/Product", {
        params: {
          category: filter,
          _page: page,
          _limit: "10",
          _sort: "price",
          _order: sort,
          q: search,
        },
      })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [products, filter, sort, page, search]);

  // *******************searchFunctionality*******************/

  let searchOperation = (e) => {
    setTimeout(() => {
      setsearch(e.target.value);
    }, 2000);
  };

  // *************************for reset all functionality********************/
  const resetAll = () => {
    setpage(1);
    setsort('');
    setfilter(null);
    setsearch('');
    alert('All filters, sort, and search reset');
  };

  return (
    <Container className="product-list-container">
      <h2 className="product-list-header">Product List</h2>
      <div className="mb-3">
        {/*******************sort button belowside****************************/}
        <Button variant="outline-primary" className="me-2" onClick={() => setsort("asc")}>Low To High Price</Button>
        <Button variant="outline-primary" className="me-2" onClick={() => setsort("desc")}>High To Low Price</Button>
      </div>

      {/***********************************Search Option*******************************/}
      <Form.Control
        type="text"
        placeholder="Search Goods.."
        onChange={(e) => searchOperation(e)}
        className="mb-3"
      />

      {/* ****************filter part********************************************** */}
      <Form.Select onChange={(e) => setfilter(e.target.value)} className="mb-3">
        <option value="">Select Your choice.</option>
        <option value="men's clothing">men s clothing</option>
        <option value="women's clothing">womens clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="perfume">perfume</option>
        <option value="electronics">electronics</option>
      </Form.Select>

      {/*******************************************Reset Button**********************************************/}
      <Button variant="danger" onClick={resetAll}>Reset</Button>

      <Row className="mt-3">
        {products.map((el) => (
          <Col key={el.id} sm={12} md={6} lg={4} xl={3}>
            <Card className="mb-4 product-card">
              <Card.Img variant="top" src={el.image} alt={el.title} className="product-img" />
              <Card.Body>
                <Card.Title>{el.category}</Card.Title>
                <Card.Text>{el.description}</Card.Text>
                <Card.Text><strong>${el.price}</strong></Card.Text>
                <Link to={`/ProductDetails/${el.id}`} className="btn btn-Buy">Buy Item</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="pagination-buttons">
        <Button variant="primary" onClick={() => setpage(page - 1)} disabled={page === 1}>
           Previous
        </Button>
        <span><strong>{page}</strong></span>
        <Button variant="primary" onClick={() => setpage(page + 1)}>
          Next
        </Button>
      </div>
    </Container>
  );
};

export default ProductList;
