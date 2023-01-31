import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import produkty from "./common/consts/produkty";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [availableProducts, setAvailableProducts] = useState(produkty);
  const [products, setProducts] = useState(produkty);
  const [shopingList, setShopingList] = useState([]);

  const addProductToShopingList = product => {
    setShopingList(shopingList => [...shopingList, product]);
  };

  const deleteProductFromShopingList = productIndex => {
    setShopingList(shopingList =>
      shopingList.filter((_, index) => index !== productIndex)
    );
  };

  const addNewProduct = newProduct => {
    setAvailableProducts(availableProducts => [
      ...availableProducts,
      newProduct,
    ]);
  };

  const showFilterProducts = filteredProducts => {
    setProducts(filteredProducts);
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts
        addNewProduct={addNewProduct}
        availableProducts={availableProducts}
      />
      <ProductsFilters
        availableProducts={availableProducts}
        showFilterProducts={showFilterProducts}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList
          products={products}
          addProductToShopingList={addProductToShopingList}
        />
        <ShopingList
          shopingList={shopingList}
          deleteProductFromShopingList={deleteProductFromShopingList}
        />
      </div>
    </div>
  );
}

export default App;