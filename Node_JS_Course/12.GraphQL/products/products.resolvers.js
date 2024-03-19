const productsModel = require('./products.data');

module.exports = {
    Query: {
        products: async () => {
            return productsModel.getAllProducts();
        }
    }
}