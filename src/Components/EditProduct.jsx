import axios from 'axios'
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const [editProduct, setEditProduct] = useState({
    image: '',
    title: '',
    price: 0,
    category: '',
    description: ''
  })

  const [editHistory, setEditHistory] = useState([]) // State to store edit history

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:8000/Product/${id}`)
      .then((res) => {
        setEditProduct(res.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEditProduct({ ...editProduct, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`http://localhost:8000/Product/${id}`, editProduct)
      .then((res) => {
        console.log('Product updated successfully:', res.data)
        console.log(editProduct)
        alert('Product updated successfully')

        setEditHistory([...editHistory, editProduct])

        setEditProduct({
          image: '',
          title: '',
          price: 0,
          category: '',
          description: ''
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h2>Edit Product</h2>
      <br />
      <div style={{display:"flex", justifyContent:"space-evenly"}}>
        <div style={{ border: "1px solid gray", width: "50%", height: "auto", padding: "10px", borderRadius: "15px" }}>
          <b>{editProduct.id}</b>
          <h1>{editProduct.title}</h1>
          <img src={editProduct.image} alt={editProduct.title} height={300} width={300} />
          <p>Price: ${editProduct.price}</p>
          <p>Category: {editProduct.category}</p>
          <p>{editProduct.description}</p><br />
        </div>
        <br />
        <form onSubmit={handleSubmit} style={{border:"1px solid teal", borderRadius:"10px", width:"35%"}}>
          <br /><br /><br />
          <input
            type="text"
            name="title"
            value={editProduct.title}
            onChange={handleChange}
            placeholder="Title"
          />  <br /><br />
          <input
            type="text"
            name="category"
            value={editProduct.category}
            onChange={handleChange}
            placeholder="Category"
          /><br /><br />
          <input
            type="text"
            name="price"
            value={editProduct.price}
            onChange={handleChange}
            placeholder="Price"
          /> <br /><br />
          <input
            type="text"
            name="image"
            value={editProduct.image}
            onChange={handleChange}
            placeholder="Image URL"
          /><br /><br />
          <input
            type="text"
            name="description"
            value={editProduct.description}
            onChange={handleChange}
            placeholder="Description"
          /> <br /><br />
          <button type="submit">Edit Product</button>
        </form>
      </div>
      <br />
      <table style={{border: "1px solid black", borderCollapse: "collapse",Width:"80%"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid black"}}>Image</th>
            <th style={{border: "1px solid black"}}>Title</th>
            <th style={{border: "1px solid black"}}>Category</th>
            <th style={{border: "1px solid black"}}>Price</th>
            <th style={{border: "1px solid black"}}>Description</th>
          </tr>
        </thead>
        <tbody>
          {editHistory.map((edit, index) => (
            <tr key={index}>
              <td style={{border: "1px solid black"}}><img src={edit.image} alt={edit.title} width={100} /></td>
              <td style={{border: "1px solid black"}}>{edit.title}</td>
              <td style={{border: "1px solid black"}}>{edit.category}</td>
              <td style={{border: "1px solid black"}}>${edit.price}</td>
              <td style={{border: "1px solid black"}}>{edit.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EditProduct

