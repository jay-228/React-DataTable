
import AddProduct from './Components/AddProduct'
import EditProduct from './Components/EditProduct'
import { Route, Routes } from 'react-router-dom'
import ProductDetails from './Components/ProductDetails'
import { ProductList } from './Components/ProductList'
import DeleteProduct from './Components/DeleteProduct'


const Allroutes = () => {
  return (
    <div>
         <Routes>
            <Route path='/ProductList' element={<ProductList/>}></Route>
            <Route path='/ProductDetails/:id' element={<ProductDetails/>}></Route>
            <Route path='/Addproduct' element={<AddProduct/>}></Route>
            <Route path='/Editproduct/:id' element={<EditProduct/>}></Route>
            <Route path='/Deleteproduct/:id' element={<DeleteProduct/>}></Route>

        </Routes>
    </div>
  )
}

export default Allroutes