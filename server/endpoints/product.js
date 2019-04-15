function getSingleProduct(req, res) {
    const id = req.params.id;
    console.log(id);
    res.json({
        id: id,
        name: 'Banana',
        category: 'dolls'
    });
}

function getAllProducts(req, res) {
    res.json([
        {
            id: '234sdf3904f903f34',
            name: 'Banana',
            category: 'dolls'
        },
        {
            id: 'svfg3fggvw45g5v',
            name: 'Lemon',
            category: 'dolls'
        }
    ])
}

module.exports.getSingleProduct = getSingleProduct;
module.exports.getAllProducts = getAllProducts;