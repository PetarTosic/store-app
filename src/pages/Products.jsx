import AppProducts from "../components/AppProducts";

const Products = ({
  products,
  addQuantity,
  decreaseQuantity,
  handleSearch,
}) => {
  return (
    <AppProducts
      products={products}
      addQuantity={addQuantity}
      decreaseQuantity={decreaseQuantity}
      handleSearch={handleSearch}
    />
  );
};

export default Products;
