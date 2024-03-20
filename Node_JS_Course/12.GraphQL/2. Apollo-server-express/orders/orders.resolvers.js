const ordersModel = require('./orders.model');

module.exports = {
    Query: {
        orders: async (parent) => {
            return ordersModel.getAllOrders();
        }
    }
}