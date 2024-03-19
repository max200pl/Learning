const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async () => {
            return productsModel.getAllProducts();
        },
        productByPrice: (_, args) => {
            return productsModel.getAllProductsByPrice(args.min, args.max);
        }
    }
}