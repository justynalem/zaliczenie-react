import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList({ shopingList, deleteProductFromShopingList, setShopingList }) {
  const list = shopingList.map((product, index) => (
    <li
      style={{
        textDecoration: product.crossed
          ? "line-through"
          : "auto",
      }}
      onClick={e => {
        deleteProductFromShopingList(index);
      }}
      onContextMenu={e => {
        e.preventDefault();
        setShopingList(shopingList => shopingList.map((prod, i) => {
          if (i === index) {
            return { ...product, crossed: !product.crossed }
          }
          return prod
        }))

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
