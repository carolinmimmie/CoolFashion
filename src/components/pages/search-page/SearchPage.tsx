import React, { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import { getAllProducts } from "../../../Api";
import { IAllProducts } from "../../../interfaces";

const SearchPage = () => {
  const [productList, setProductList] = useState<IAllProducts[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<IAllProducts[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getAllProducts();
      setProductList(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const results = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm)
    );
    setSearchResults(results);
    setShowResults(searchTerm !== "");
  }, [searchTerm, productList]);

  const handleSearchChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search_wrapper">
    <div className="container_search">
      <h3 className="search_products">Search Products</h3>
      <Form>
        <Form.Group controlId="searchForm">
          <Form.Control
          className="search_field"
            type="text"
            placeholder="Search by title or price..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{ width: "50%" }} // Set the width to 50%
          />
        </Form.Group>
      </Form>
      {showResults && (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((product) => (
              <tr key={product.id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.title}
                    width="30"
                    height="30"
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} kr</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
    </div>
  );
};

export default SearchPage;
