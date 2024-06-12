import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
    <div>
    
      <h2>Deleted Products</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px", fontFamily: "Arial, sans-serif" }}>
        <thead>
          <tr style={{ backgroundColor: "#4CAF50", color: "white" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Image</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Title</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Category</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Price</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {deletedProducts.map((product, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "white" }}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}><img src={product.image} alt={product.title} width={100} style={{ borderRadius: "8px" }} /></td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.title}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.category}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>${product.price}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteProduct;