const products = [
    {
        id: "redshoes",
        description: "Red shoes",
        price: 123.44,
    },
    {
        id: "blueshoes",
        description: "Blue shoes",
        price: 44.2,
    },
]

function getAllProducts() {
    return products;
}

function getAllProductsByPrice(min, max) {
    return products.filter(product => product.price > min && product.price <= max);
}

module.exports = {
    getAllProducts,
    getAllProductsByPrice
}
