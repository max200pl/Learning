const orders = [
    {
        date: "2021-12-12",
        subTotal: 123.44,
        items: [
            {
                product: {
                    id: "redshoes",
                    description: "Old red shoes",
                    price: 42.11,
                },
                quantity: 2
            }
        ]
    }
]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders,
}
