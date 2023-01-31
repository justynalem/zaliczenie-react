import { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList({ shopingList, deleteProductFromShopingList }) {
  const [crossedOut, setCrossedOut] = useState([]);

  const setProductCrossed = index => {
    if (crossedOut.includes(index)) {
      setCrossedOut(crossedOut.filter(el => el !== index));
    } else {
      setCrossedOut([...crossedOut, index]);
    }
  };

  const list = shopingList.map((product, index) => (
    <li
      style={{
        textDecoration: crossedOut.some(crossed => crossed === index)
          ? "line-through"
          : "auto",
      }}
      onClick={e => {
        deleteProductFromShopingList(index);
      }}
      onContextMenu={e => {
        e.preventDefault();
        setProductCrossed(index);
      }}>
      {product.nazwa}
    </li>
  ));

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <ul>{list}</ul>
      </header>
    </div>
  );
}

export default ShopingList;
