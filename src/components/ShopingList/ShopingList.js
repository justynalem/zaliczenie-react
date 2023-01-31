import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList({ shopingList, deleteProductFromList }) {

  const list = shopingList.map((product, index) => <li onContextMenu={(e) => {
    e.preventDefault()
    deleteProductFromList(index)

  }} > {product.nazwa}</li >)

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <>{list}</>
      </header>
    </div>
  );
}

export default ShopingList;