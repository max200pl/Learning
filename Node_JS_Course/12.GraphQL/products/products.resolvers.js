const productsModel = require('./products.model');

module.exports = {
    Query: {
        products: async () => {
            return productsModel.getAllProducts();
        },
        productByPrice: (_, args) => {
            return productsModel.getAllProductsByPrice(args.min, args.max);
        },
        product: (_, args) => {
            return productsModel.getProductById(args.id);
        }
    },
    Mutation: {
        addProduct: (_, args) => {
            return productsModel.addProduct(args.id, args.description, args.price);
        }
    }
}