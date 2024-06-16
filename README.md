Project Video Link:   
==================== Project Description ====================



**Objective:**
Develop a web application using React.js that serves as a Product Management System. The system should allow users to perform CRUD operations (Create, Read, Update, Delete) on products. Additionally, users should be able to sort, search, paginate, and filter products. Axios will be used for making HTTP requests, and JSON Server will be used to simulate a backend REST API.

**Tasks:**

1. Set up a new React.js project using Create React App.
2. Install Axios and JSON Server dependencies using npm.
    
    ```bash
    bashCopy code
    npm install axios json-server
    
    ```
    
3. Create the following components:
    - `ProductList`: Display a list of products fetched from the JSON Server API. Implement features like sorting, searching, pagination, and filtering.
    - `ProductDetails`: Display detailed information about a specific product.
    - `AddProduct`: Allow users to add new products to the system.
    - `EditProduct`: Enable users to edit existing product details.
    - `DeleteProduct`: Provide functionality to delete a product from the system.
4. Set up JSON Server to create a mock REST API:
    - Create a `db.json` file with sample product data.
    - Run JSON Server to serve the API on a local port.
    
    ```bash
    bashCopy code
    json-server --watch db.json --port 8000
    
    ```
    
5. Implement Axios requests in React components:
    - Use Axios to fetch a list of products in the `ProductList` component.
    - Implement sorting, searching, pagination, and filtering logic on the client-side.
    - Handle CRUD operations (post, put/patch, delete) using Axios requests in the respective components.
6. Design the UI for each component using CSS or a CSS framework like Bootstrap.
