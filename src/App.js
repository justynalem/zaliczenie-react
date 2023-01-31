import ProductsList from "./components/ProductsList/ProductsList";
import ShopingList from "./components/ShopingList/ShopingList";
import AddProducts from "./components/AddProducts/AddProducts";
import ProductsFilters from "./components/ProductsFilters/ProductsFilters";
import produkty from "./common/consts/produkty";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState(produkty);
  const [shopingList, setShopingList] = useState([]);

  const addProductToList = product => {
    setShopingList(shopingList => [...shopingList, product]);
  };
  const deleteProductFromList = productIndex => {
    setShopingList(shopingList =>
      shopingList.filter((_, index) => index !== productIndex)
    );
  };

  return (
    <div className={styles.appWrapper}>
      <AddProducts />
      <ProductsFilters
        products={produkty}
        sendNameOfProductToApp={setProducts}
      />
      <div className={styles.columnsWrapper}>
        <ProductsList products={products} addProductToList={addProductToList} />
        <ShopingList
          shopingList={shopingList}
          deleteProductFromList={deleteProductFromList}
        />
      </div>
    </div>
  );
}

export default App;
