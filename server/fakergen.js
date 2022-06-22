var faker = require('faker');

var database = {products: []};

for (var i = 1; i <= 50; i++ ) {
    database.products.push ({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.paragraph(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/1600x900/?food",
        quality: faker.datatype.number()
    });
}

console.log(JSON.stringify(database));
