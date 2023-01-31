import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ProductsList({ products, addProductToList }) {

  const productList = products.map(product => <li onClick={() => addProductToList(product)}>{product.nazwa}</li>)

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <ul>
          {productList}
        </ul>
      </header>
    </div>
  );
}

export default ProductsList;