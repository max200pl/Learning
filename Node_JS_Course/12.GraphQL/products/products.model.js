const products = [
    {
        id: "redshoes",
        description: "Red shoes",
        price: 123.44,
        reviews: [],
    },
    {
        id: "blueshoes",
        description: "Blue shoes",
        price: 44.2,
        reviews: [],
    },
]

function getAllProducts() {
    return products;
}

function getAllProductsByPrice(min, max) {
    return products.filter(product => product.price > min && product.price <= max);
}

function getProductById(id) {
    return products.find(product => product.id === id);
}

function addProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: [],
    }

    products.push(newProduct);
    return newProduct;
}

module.exports = {
    getAllProducts,
    getAllProductsByPrice,
    getProductById,
    addProduct,
}
