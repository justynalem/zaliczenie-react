import React, { useState } from "react";
import styles from "../../common/styles/Headers.module.scss";

function AddProducts({ addNewProduct, availableProducts }) {
  const [nazwa, setNazwa] = useState("");
  const [kategoria, setKategoria] = useState("");
  const [produktSpozywczy, setProduktSpozywczy] = useState(false);

  const handleNazwaOnChange = event => {
    setNazwa(event.target.value);
  };
  const handleKategoriaOnChange = event => {
    setKategoria(event.target.value);
  };
  const handleProduktSpozywczy = event => {
    setProduktSpozywczy(event.target.checked);
  };
  const getAndSendNewProduct = () => {
    const isAlreadyOnList = availableProducts.some(
      product =>
        product.nazwa === nazwa &&
        product.kategoria === kategoria &&
        product.produktSpozywczy === produktSpozywczy
    );

    if (isAlreadyOnList) {
      console.error("Produkt już znajduje się na liście");
      return;
    }
    addNewProduct({ nazwa, kategoria, produktSpozywczy });
  };

  return (
    <div className={styles.Wrapper}>
      <label>nazwa produktu</label>
      <input
        type='text'
        value={nazwa.toLowerCase()}
        onChange={handleNazwaOnChange}></input>

      <label>kategoria produktu</label>
      <input
        type='text'
        value={kategoria.toLowerCase()}
        onChange={handleKategoriaOnChange}></input>
      <p>Tylko produkty spożywcze</p>
      <input
        type='checkbox'
        checked={produktSpozywczy}
        onChange={handleProduktSpozywczy}></input>

      <button disabled={!nazwa || !kategoria} onClick={getAndSendNewProduct}>
        {" "}
        Dodaj{" "}
      </button>
    </div>
  );
}

export default AddProducts;
