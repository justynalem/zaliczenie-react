import React from "react";
import styles from "../../common/styles/Headers.module.scss";
class ProductsFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPhrase: "",
            searchCategory: "all",
            searchGroceries: false,
        };
    }
    handleChangeSearchPhrase = event => {
        this.setState({ searchPhrase: event.target.value }, () =>
            this.filterProducts()
        );
    };

    handleSelectCategory = event => {
        this.setState({ searchCategory: event.target.value }, () =>
            this.filterProducts()
        );
    };

    handleOnlyGroceries = event => {
        this.setState({ searchGroceries: event.target.checked }, () =>
            this.filterProducts()
        );
    };

    componentDidUpdate(prevProps) {
        if (
            prevProps.availableProducts.length !== this.props.availableProducts.length
        ) {
            this.filterProducts();
        }
    }

    filterProducts = () => {
        const { searchCategory, searchGroceries, searchPhrase } = this.state;
        const { availableProducts } = this.props;
        let filteredProducts = availableProducts.filter(product =>
            product.nazwa.includes(searchPhrase.toLowerCase())
        );
        if (searchGroceries) {
            filteredProducts = filteredProducts.filter(
                product => product.produktSpozywczy === true
            );
        }
        if (searchCategory !== "all") {
            filteredProducts = filteredProducts.filter(
                product => product.kategoria === searchCategory
            );
        }
        this.props.showFilterProducts(filteredProducts);
    };

    render() {
        const { availableProducts } = this.props;
        const categories = availableProducts.map(product => product.kategoria);
        const uniqueCategories = [...new Set(categories)].map(category => (
            <option value={category}>{category}</option>
        ));
        return (
            <div className={styles.Wrapper}>
                <label>Szukaj wg nazwy produktu:</label>
                <input
                    onChange={this.handleChangeSearchPhrase}
                    type='text'
                    value={this.state.searchPhrase}></input>{" "}
                <label> Szukaj wg kategorii:</label>
                <select onChange={this.handleSelectCategory}>
                    <option value='all'>wszystkie kategorie</option>
                    {uniqueCategories}
                </select>
                <p>Tylko produkty spożywcze</p>
                <input
                    type='checkbox'
                    onChange={this.handleOnlyGroceries}
                    value={this.searchGroceries}></input>
            </div>
        );
    }
}

export default ProductsFilters;
